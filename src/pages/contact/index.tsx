import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import PageLayout from '../../shared/ui/page-layout';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAnswerStore } from '../../entities/answer/models/answer.store';
import { RouteE } from '../../shared/config/navigation';

const cx = classNames.bind(styles);

const Contact = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { answer, setAnswer } = useAnswerStore();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const changeEmail = (value: string) => {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);

    if (regExp.test(value)) {
      setError('');
    } else {
      setError(t('invalidEmail'));
    }
  };

  const submit = () => {
    setAnswer({ ...answer, email });
    navigate(RouteE.THANK_YOU);
  };

  return (
    <PageLayout>
      <div className={cx('contact__wrapper')}>
        <div>
          <div className={cx('contact__title')}>{t('email')}</div>
          <div className={cx('contact__subtitle')}>{t('emailTitle')}</div>
          <div className={cx('contact__inblock')}>
            <input
              type="email"
              value={email}
              onChange={(e) => changeEmail(e.target.value)}
              placeholder={t('inputLabel')}
              className={cx('contact__input')}
            />
            {!!error && <div className={cx('contact__error')}>{error}</div>}
          </div>
          <div className={cx('contact__terms')}>
            {t('termsLabel1')}&nbsp;<span>{t('termsLabel2')}</span>
            &nbsp;{t('termsLabel3')}&nbsp;<span>{t('termsLabel4')}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={submit}
          disabled={!email || !!error}
          className={cx('contact__next')}
        >
          {t('next')}
        </button>
      </div>
    </PageLayout>
  );
};

export default Contact;
