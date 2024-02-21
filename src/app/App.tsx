import React from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('title1')}
    </div>
  );
};

export default App;