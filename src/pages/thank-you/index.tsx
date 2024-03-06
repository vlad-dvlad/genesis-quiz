import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import PageLayout from '../../shared/ui/page-layout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import check from '../../assets/icons/checkmark.svg';
import download from '../../assets/icons/download.svg';
import { useAnswerStore } from '../../entities/answer/models/answer.store';
import { RouteE } from '../../shared/config/navigation';
import { CSVLink } from 'react-csv';
import useGetQuizData from './use-get-quiz-data';

const cx = classNames.bind(styles);

const ThankYou = () => {
  const { t } = useTranslation();
  const { answer, setAnswer } = useAnswerStore();
  const navigate = useNavigate();
  const data = useGetQuizData();

  const retake = () => {
    setAnswer({
      ...answer,
      age: '',
      email: '',
      favTopics: [],
      hateCriterias: [],
      gender: '',
      language: '',
      languageCode: 'en',
    });
    fetch('/app/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({})
    })
    navigate(RouteE.QUIZ_1);
  };

  return (
    <PageLayout>
      <div className={cx('thankyou__container')}>
        <div className={cx('thankyou__title')}>{t('thankYou')}</div>
        <div className={cx('thankyou__subtitle')}>{t('quizThank')}</div>
        <img src={check} width={120} height={120} alt="Alt" />
        <CSVLink
          filename={'quiz-data'}
          data={data}
          className={cx('thankyou__download')}
        >
          <img src={download} width={42} height={42} />
          {t('download')}
        </CSVLink>
      </div>
      <button type="button" onClick={retake} className={cx('thankyou__next')}>
        {t('retakeQuiz')}
      </button>
    </PageLayout>
  );
};

export default ThankYou;
