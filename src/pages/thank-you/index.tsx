import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import PageLayout from '../../shared/ui/page-layout/PageLayout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import check from '../../../public/icons/checkmark.svg';
import download from '../../../public/icons/download.svg';
import { useAnswerStore } from '../../entities/answer/models/answer.store';
import { RouteE } from '../../shared/config/navigation';

const cx = classNames.bind(styles);

const ThankYou = () => {
    const { t } = useTranslation();
  const { answer, setAnswer } = useAnswerStore();
    const navigate = useNavigate();

    const downloadAnswers = () => {
        console.log('AAAA')
    }

    const retake = () => {
        setAnswer({
            ...answer,
            age: '',
            email: '',
            favTopics: [],
            hateCriterias: [],
            gender: '',
            language: '',
            languageCode: 'en'
        })

        navigate(RouteE.QUIZ_1)
    }

    return (
        <PageLayout>
            <div className={cx('thankyou__container')}>
                <div className={cx('thankyou__title')}>
                    {t('thankYou')}
                </div>
                <div className={cx('thankyou__subtitle')}>
                    {t('quizThank')}
                </div>
                <img src={check} width={120} height={120} alt="Alt" />
                <div onClick={downloadAnswers} className={cx('thankyou__download')}>
                    <img src={download} width={42} height={42} />
                    {t('download')}
                </div>
            </div>
            <button
                type="button"
                onClick={retake}
                className={cx('thankyou__next')}
            >
            {t('retakeQuiz')}
          </button>
        </PageLayout>

    );
};

export default ThankYou;