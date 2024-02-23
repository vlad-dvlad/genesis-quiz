import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={cx('layout')}>{children}</div>;
};

export default PageLayout;
