import { FC, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  submit: () => void;
}

const Loader: FC<IProps> = ({ submit }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 100) {
        setCount(count + 1);
      }
      if (count === 100) {
        submit();
      }
    }, 45);

    return () => clearTimeout(timer);
  }, [count, submit]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('loader')} />
      <span className={cx('loader__percent')}>{count} %</span>
    </div>
  );
};

export default Loader;
