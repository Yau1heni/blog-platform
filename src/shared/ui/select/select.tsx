import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import s from './select.module.scss';

export type SelectOptionType = {
    value: string;
    content: string;
}

type SelectProps = {
    className?: string;
    label?: string;
    options?: SelectOptionType[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={s.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  return (
    <div className={classNames(s.wrapper, {}, [className])}>
      {label && (
        <span className={s.label}>
          {`${label}>`}
        </span>
      )}
      <select
        disabled={readonly}
        className={s.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
