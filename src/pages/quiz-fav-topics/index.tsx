import classNames from 'classnames/bind';
import PageLayout from '../../shared/ui/page-layout/PageLayout';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAnswerStore } from '../../entities/answer/models/answer.store';
import { useCallback, useState } from 'react';
import { topics } from './config';
import Ui from './ui';
import { RouteE } from '../../shared/config/navigation';
import Loader from '../../shared/ui/loader';

const cx = classNames.bind(styles);

const QuizFavTopics = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { answer, setAnswer } = useAnswerStore();
  const [topicsList, setTopicsList] = useState(topics);
  const [loading, setLoading] = useState<boolean>(false);

  const disableSubmit =
    topicsList.every((topic) => !topic.selected) ||
    topicsList.filter((topic) => topic.selected)?.length > 3;

  const selectTopics = (title: string) => {
    const updated = topicsList.map((criteria) => {
      if (t(criteria.title) === title) {
        return {
          ...criteria,
          selected: !criteria.selected,
        };
      }

      return criteria;
    });
    setTopicsList([...updated]);
  };

  const saveCriteria = useCallback(() => {
    const selected = topicsList
      .filter((topic) => topic.selected)
      ?.map((topic) => t(topic.title));
    setAnswer({ ...answer, favTopics: selected });
    setLoading(true);
  }, [topicsList]);

  return (
    <PageLayout>
      {loading ? (
        <>
          <Loader submit={() => navigate(RouteE.EMAIL)} />
          <div className={cx('topics__label')}>{t('subtitleLoading')}</div>
        </>
      ) : (
        <div className={cx('topics__container')}>
          <div className={cx('topics')}>
            <div className={cx('topics__title')}>{t('title5')}</div>
            <div className={cx('topics__subtitle')}>{t('subtitle5')}</div>
            <div className={cx('topics__options')}>
              {topicsList.map((topic) => (
                <Ui
                  key={topic.title}
                  selected={topic.selected}
                  title={t(topic.title)}
                  picture={topic.picture}
                  select={selectTopics}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={saveCriteria}
            disabled={disableSubmit}
            className={cx('topics__next')}
          >
            {t('next')}
          </button>
        </div>
      )}
    </PageLayout>
  );
};

export default QuizFavTopics;
