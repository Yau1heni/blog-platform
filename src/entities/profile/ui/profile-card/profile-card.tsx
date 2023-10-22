import { useTranslation } from 'react-i18next';
import { classNames, ModsType } from 'shared/lib/class-names/class-names';
import { Input } from 'shared/ui/input/input';
import { Text, TextAlign, TextTheme } from 'shared/ui/text/text';
import { Loader } from 'shared/ui/loader/loader';
import { Avatar } from 'shared/ui/avatar/avatar';
import { Currency, CurrencySelect } from 'entities/currency';
import { Country, CountrySelect } from 'entities/country';
import s from './profile-card.module.scss';
import { ProfileType } from '../../model/types/profile';

type ProfileCardProps = {
  className?: string;
  data?: ProfileType
  isLoading?: boolean
  error?: string
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(s.profileCard, { [s.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(s.profileCard, {}, [className, s.error])}>
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте перезагрузить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: ModsType = {
    [s.editing]: !readonly,
  };

  return (
    <div className={classNames(s.profileCard, mods, [className])}>
      <div className={s.data}>
        {data?.avatar && (
          <div className={s.avatarWrapper}>
            <Avatar src={data.avatar} alt="ava" />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={s.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={s.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={s.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Ваш город')}
          className={s.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Ваше имя')}
          className={s.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Ваш аватар')}
          className={s.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={s.input}
          onChange={onChangeCurrency}
          value={data?.currency}
          readonly={readonly}
        />
      </div>
      <CountrySelect
        className={s.input}
        onChange={onChangeCountry}
        value={data?.country}
        readonly={readonly}
      />
    </div>
  );
};
