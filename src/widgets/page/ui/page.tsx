import {
  memo, MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { useInfiniteScroll } from 'shared/lib/hooks/use-infinite-scroll';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { scrollSavingActions, selectScrollByPath } from 'features/scroll-saving';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/store-provider';
import { useThrottle } from 'shared/lib/hooks/use-throttle';
import s from './page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => selectScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSavingActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={wrapperRef}
      className={classNames(s.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
