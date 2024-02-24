import { FC, PropsWithChildren, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { useLocation } from 'react-router';

const cx = classNames.bind(styles);

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransistionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <div
      className={cx('layout', `${transitionStage}`)}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      {children}
    </div>
  );
};

export default PageLayout;
