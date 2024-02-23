import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  title: string;
  selected: boolean;
  update: (value: string) => void;
}

const Ui: FC<IProps> = ({ title, selected, update }) => {
  return (
    <div className={cx('hate__item', { selected })}>
      <label htmlFor={title}>{title}</label>
      <input
        id={title}
        type="checkbox"
        className={cx('hate__check')}
        checked={selected}
        onChange={() => update(title)}
      />
    </div>
  );
};

export default Ui;
