import PageLayout from '../../shared/ui/page-layout/PageLayout';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const QuizBookHate = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className={cx('gender__title')}>{t('title4')}</div>
    </PageLayout>
  );
};

export default QuizBookHate;
