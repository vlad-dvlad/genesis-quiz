import PageLayout from '../../shared/ui/page-layout/PageLayout';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { hateCriteriaArray } from './config';
import Ui from './ui';
import { useCallback, useState } from 'react';
import { useAnswerStore } from '../../entities/answer/models/answer.store';
import { useNavigate } from 'react-router';
import { RouteE } from '../../shared/config/navigation';

const cx = classNames.bind(styles);

const QuizBookHate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { answer, setAnswer } = useAnswerStore();
  const [criterias, setCriterias] = useState(hateCriteriaArray);

  const disableSubmit = criterias.every((criteria) => !criteria.selected);

  const updateCriteria = (title: string) => {
    const updated = criterias.map((criteria) => {
      if (t(criteria.name) === title) {
        return {
          ...criteria,
          selected: !criteria.selected,
        };
      }

      return criteria;
    });
    setCriterias([...updated]);
  };

  const saveCriteria = useCallback(() => {
    const selected = criterias
      .filter((criteria) => criteria.selected)
      ?.map((criteria) => t(criteria.name));
    setAnswer({ ...answer, hateCriterias: selected });
    navigate(RouteE.QUIZ_5);
  }, [criterias]);

  return (
    <PageLayout>
      <div className={cx('hate__container')}>
        <div>
          <div className={cx('hate__title')}>{t('title4')}</div>
          <div className={cx('hate__options')}>
            {criterias.map((criteria) => (
              <Ui
                key={t(criteria.name)}
                title={t(criteria.name)}
                selected={criteria.selected}
                update={updateCriteria}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={saveCriteria}
          disabled={disableSubmit}
          className={cx('hate__next')}
        >
          {t('next')}
        </button>
      </div>
    </PageLayout>
  );
};

export default QuizBookHate;
