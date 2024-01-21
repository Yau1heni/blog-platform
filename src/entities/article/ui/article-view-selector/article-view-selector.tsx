import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { Icon } from 'shared/ui/icon/icon';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import s from './article-view-selector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(s.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [s.notSelected]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  );
});
