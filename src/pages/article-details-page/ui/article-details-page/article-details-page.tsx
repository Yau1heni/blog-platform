import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/text/text';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CommentList } from 'entities/сomment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { RoutePath } from 'shared/config/route-config/route-config';
import { Page } from 'shared/ui/page/page';
import { fetchComments } from '../../model/services/fetch-comments';
import { addCommentForArticle } from '../../model/services/add-comment-for-article';
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
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const comments = useSelector(selectArticleComments.selectAll);
  const isLoading = useSelector(selectArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const onBackToList = useCallback(() => navigate(RoutePath.articles), [navigate]);

  useEffect(() => {
    dispatch(fetchComments(id));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  if (!id) {
    return (
      <Page>{t('Статья не найдена')}</Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(s.articleDetailsPage, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={s.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
