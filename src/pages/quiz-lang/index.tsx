import { useTranslation } from "react-i18next";
import PageLayout from "../../shared/ui/page-layout/PageLayout";
import { languages } from "./config";
import classNames from "classnames/bind";
import styles from "./styles.module.scss"
import { useAnswerStore } from "../../entities/answer/models/answer.store";
import { ILanguage } from "../../entities/answer/types/answer.types";
import { useNavigate } from "react-router";
import { RouteE } from "../../shared/config/navigation";

const cx = classNames.bind(styles);

const QuizLang = () => {
    const { t, i18n  } = useTranslation();
    const navigate = useNavigate();
    const { answer, setAnswer } = useAnswerStore();

    const chooseLang = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const langCode = (e.target as HTMLElement).id as ILanguage
        i18n.changeLanguage(langCode)
        setAnswer({ ...answer, language: langCode })
        navigate(RouteE.QUIZ_2)
    }
    
    return (
        <PageLayout>
            <div className={cx('lang__title')}>{t('title1')}</div>
            <div className={cx('lang__subtitle')}>{t('subtitle1')}</div>
            <div className={cx('lang__options')} onClick={chooseLang}>
                {
                    languages.map((lang) => (
                        <div key={lang.code} id={lang.code} className={cx("lang__item")}>
                            {lang.name}
                        </div>
                    ))
                }
            </div>
        </PageLayout>
    );
};

export default QuizLang