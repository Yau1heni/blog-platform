import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/text/text';
import { Skeleton } from 'shared/skeleton/skeleton';
import { Avatar } from 'shared/ui/avatar/avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/icon/icon';
import { ArticleCodeBlock } from '../article-code-block/article-code-block';
import { ArticleImageBlock } from '../article-image-block/article-image-block';
import { ArticleTextBlock } from '../article-text-block/article-text-block';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
  selectArticleDetailsData,
  selectArticleDetailsError,
  selectArticleDetailsIsLoading,
} from '../../model/selectors/select-article-details';
import { fetchArticle } from '../../model/services/fetch-article';
import { articleReducer } from '../../model/slice/article-details-slice';
import s from './article-details.module.scss';

type ArticleDetailsPropsType = {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsPropsType) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const articleData = useSelector(selectArticleDetailsData);
  const error = useSelector(selectArticleDetailsError);
  const isLoading = useSelector(selectArticleDetailsIsLoading);

  useEffect(() => {
    dispatch(fetchArticle(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} code={block.code} className={s.block} />;
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlock
            key={block.id}
            src={block.src}
            title={block.title}
            className={s.block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlock
            key={block.id}
            title={block.title}
            paragraphs={block.paragraphs}
            className={s.block}
          />
        );
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton className={s.title} width={300} height={32} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width="100%" height={200} />
        <Skeleton className={s.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Произошла ошибка при загрузке статьи')}
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = (
      <>
        {articleData?.img && (
          <div className={s.avatarWrapper}>
            <Avatar
              size={200}
              className={s.avatar}
              src={articleData.img}
              alt="img"
            />
          </div>
        )}
        <Text
          title={articleData?.title}
          text={articleData?.subtitle}
          className={s.title}
          size={TextSize.L}
        />
        <div className={s.articleInfo}>
          <Icon Svg={EyeIcon} className={s.icon} />
          <Text text={String(articleData?.views)} />
        </div>
        <div className={s.articleInfo}>
          <Icon Svg={CalendarIcon} className={s.icon} />
          <Text text={articleData?.createdAt} />
        </div>
        {articleData?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(s.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
