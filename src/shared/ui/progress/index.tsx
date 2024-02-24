import { FC } from 'react';
import classNames from 'classnames/bind';
import back from '../../../../public/icons/back.svg';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router';

const cx = classNames.bind(styles);

interface IProps {
  step: number;
  total: number;
}

const Progress: FC<IProps> = ({ step, total }) => {
  const navigate = useNavigate();
  const widthPercent = (step / total) * 100;

  return (
    <div className={cx('progress')}>
      {step !== 1 && (
        <img
          src={back}
          onClick={() => navigate(-1)}
          className={cx('progress__icon')}
          width={24}
          height={24}
          alt="progress-back"
        />
      )}
      <div className={cx('progress__label')}>
        {step}/{total}
      </div>
      <div className={cx('progress__item')}>
        <div
          className={cx('progress__step')}
          style={{ width: `${widthPercent}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
