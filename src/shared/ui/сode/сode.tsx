import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './сode.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(s.code, {}, [className])}>
      <Button onClick={onCopy} className={s.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={s.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
