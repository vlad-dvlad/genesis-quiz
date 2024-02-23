import PageLayout from '../../shared/ui/page-layout/PageLayout';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { ages } from './config';
import { useAnswerStore } from '../../entities/answer/models/answer.store';
import { useNavigate } from 'react-router';
import { RouteE } from '../../shared/config/navigation';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const QuizAge = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { answer, setAnswer } = useAnswerStore();

  const selectAge = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const age = (e.target as HTMLElement).innerText;
    setAnswer({ ...answer, age });
    navigate(RouteE.QUIZ_4);
  };

  return (
    <PageLayout>
      <div className={cx('ages__title')}>{t('title3')}</div>
      <div onClick={selectAge} className={cx('ages__options')}>
        {ages.map((age) => (
          <div key={age} className={cx('ages__item')}>
            {t(age)}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default QuizAge;
