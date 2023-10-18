import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectProfileData } from 'entities/profile/model/selectors/select-profile-data';
import { classNames } from 'shared/lib/class-names/class-names';
import Input from 'shared/ui/input/input';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { Text } from 'shared/ui/text/text';
import s from './profile-card.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const profileData = useSelector(selectProfileData);

  return (
    <div className={classNames(s.profileCard, {}, [className])}>
      <div className={s.header}>
        <Text title={t('Профиль')} />
        <Button
          className={s.editBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={s.data}>
        <Input
          value={profileData?.first}
          placeholder={t('Ваше имя')}
          className={s.input}
        />
        <Input
          value={profileData?.lastname}
          placeholder={t('Ваша фамилия')}
          className={s.input}
        />
      </div>
    </div>
  );
};
