import PageLayout from "../../shared/ui/page-layout/PageLayout";
import classNames from "classnames/bind";
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useAnswerStore } from "../../entities/answer/models/answer.store";
import { RouteE } from "../../shared/config/navigation";

const cx = classNames.bind(styles);

const QuizGender = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const { answer, setAnswer } = useAnswerStore();

    const selectGender = (value: string) => {
        setAnswer({ ...answer, gender: value })
        navigate(RouteE.QUIZ_3)
    }

    return (
        <PageLayout>
            <div className={cx('gender__title')}>{t('title2')}</div>
            <div className={cx('gender__subtitle')}>{t('subtitle2')}</div>
            <div className={cx('gender__options')}>
                <div onClick={() => selectGender(t('genderFemale'))} className={cx('gender__item')}>
                    <span className={cx('gender__emodji')}>👩</span>
                    <span className={cx('gender__label')}>{t('genderFemale')}</span>
                </div>
                <div onClick={() => selectGender(t('genderMale'))} className={cx('gender__item')}>
                    <span className={cx('gender__emodji')}>👨</span>
                    <span className={cx('gender__label')}>{t('genderMale')}</span>
                </div>
                <div onClick={() => selectGender(t('genderOther'))} className={cx('gender__item')}>
                    <span className={cx('gender__emodji')}>😉</span>
                    <span className={cx('gender__label')}>{t('genderOther')}</span>
                </div>
            </div>
        </PageLayout>
    );
};

export default QuizGender;