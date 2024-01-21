import { classNames } from 'shared/lib/class-names/class-names';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { useSelector } from 'react-redux';
import { fetchArticlesList } from '../../model/services/fetch-articles-list';
import {
  selectArticlesPageIsLoading,
  selectArticlesPageView,
} from '../../model/selectors/select-articles-page';
import {
  articlesPageActions,
  articlesPageReducer, getArticles,
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

  useEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  }, [dispatch]);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView({ view }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticlesPage;
