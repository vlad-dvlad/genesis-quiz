import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../shared/config/common";

const App = () => {
  const { t, i18n  } = useTranslation();
  
  return (
    <div>
      {t('title1')}
      {
        LANGUAGES.map((lang) => (
          <div key={lang} onClick={() => i18n.changeLanguage(lang)}>{lang}</div>
        ))
      }
    </div>
  );
};

export default App;