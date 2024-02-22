import { useTranslation } from "react-i18next";
import PageLayout from "../../shared/ui/page-layout/PageLayout";
import { languages } from "./config";
import classNames from "classnames/bind";
import styles from "./styles.module.scss"

const cx = classNames.bind(styles);

const QuizLang = () => {
    const { t, i18n  } = useTranslation()

    const chooseLang = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        i18n.changeLanguage((e.target as HTMLElement).id)
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