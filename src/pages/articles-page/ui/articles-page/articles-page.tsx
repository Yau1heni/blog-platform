import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/page/ui/page';
import { fetchNextArticlesPage } from 'pages/articles-page/model/services/fetch-next-articles-page';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchArticlesList } from '../../model/services/fetch-articles-list';
import {
  selectArticlesPageIsLoading, selectArticlesPageNumber,
  selectArticlesPageView,
} from '../../model/selectors/select-articles-page';
import {
  articlesPageActions, articlesPageReducer,
  getArticles,
} from '../../model/slices/articles-page-slice';

type ArticlesPagePropsType = {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo((props: ArticlesPagePropsType) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(selectArticlesPageIsLoading);
  const view = useSelector(selectArticlesPageView);
  const page = useSelector(selectArticlesPageNumber);

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView({ view }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page }));
  }, [dispatch, page, view]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPage} className={classNames('', {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
