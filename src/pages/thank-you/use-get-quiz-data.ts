import { useTranslation } from 'react-i18next';
import { useAnswerStore } from '../../entities/answer/models/answer.store';

export const useGetQuizData = () => {
  const { t } = useTranslation();
  const { answer } = useAnswerStore();

  return [
    [t('order'), t('title'), t('type'), t('answer')],
    [1, t('title1'), t('singleSelect'), answer.language],
    [2, t('title2'), t('singleSelectImg'), answer.gender],
    [3, t('title3'), t('singleSelect'), answer.age],
    [4, t('title4'), t('multipleSelect'), answer.hateCriterias.join(',')],
    [5, t('title5'), t('bubble'), answer.favTopics.join(',')],
    [6, t('email'), t('email'), answer.email],
  ];
};

export default useGetQuizData;
