import { RouterProvider } from 'react-router-dom';
import { router } from '../pages/router';

const App = () => {
  /* {t('title1')}
      {
        LANGUAGES.map((lang) => (
          <div key={lang} onClick={() => i18n.changeLanguage(lang)}>{lang}</div>
        ))
      } */
  return <RouterProvider router={router} />;
};

export default App;
