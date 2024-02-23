import Progress from '../progress';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  console.log(window.location.href);
  return (
    <div className={cx('header')}>
      <Progress step={3} total={5} />
    </div>
  );
};

export default Header;
