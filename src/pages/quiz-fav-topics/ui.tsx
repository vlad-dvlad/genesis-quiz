import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  title: string;
  disabled: boolean;
  picture: string;
  selected: boolean;
  select: (value: string) => void;
}

const Ui: FC<IProps> = ({ title, disabled, picture, selected, select }) => {
  
  const selectTopic = () => {
    !disabled && select(title);
  }

  return (
    <div
      onClick={selectTopic}
      className={cx('topics__item', { selected, disabled })}
    >
      <img src={picture} alt={title} width={25} height={25} />
      {title}
    </div>
  );
};

export default Ui;
