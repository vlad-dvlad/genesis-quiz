import Progress from '../progress';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useLocation } from 'react-router';

const cx = classNames.bind(styles);

const Header = () => {
  const location = useLocation();
  const quiz = location.pathname.includes('quiz');
  let step = 0;
  if (quiz) {
    step = +location.pathname.slice(-1);
  }

  return (
    <div className={cx('header', { quiz })}>
      <Progress step={step} total={5} />
    </div>
  );
};

export default Header;
