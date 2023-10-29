import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useEffect } from 'react';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/text/text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CommentList } from 'entities/сomment';
import { useSelector } from 'react-redux';
import { fetchComments } from 'pages/article-details-page/model/services/fetchComments';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { selectArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
  articleDetailsCommentsReducer,
  selectArticleComments,
} from '../../model/slices/article-details-comments-slice';
import s from './article-details-page.module.scss';

type ArticleDetailsPagePropsType = {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPagePropsType) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();

  const dispatch = useAppDispatch();

  const comments = useSelector(selectArticleComments.selectAll);
  const isLoading = useSelector(selectArticleCommentsIsLoading);

  useEffect(() => {
    dispatch(fetchComments(id));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  if (!id) {
    return (
      <div>{t('Статья не найдена')}</div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(s.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={s.commentTitle} title={t('Комментарии')} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
