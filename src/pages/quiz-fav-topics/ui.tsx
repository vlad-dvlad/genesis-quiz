import { FC } from "react";
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IProps {
    title: string;
    picture: string;
    selected: boolean;
    select: (value: string) => void;
}

const Ui:FC<IProps> = ({ title, picture, selected, select }) => {
    return (
        <div onClick={() => select(title)} className={cx('topics__item', { selected })}>
            <img src={picture} alt={title} width={25} height={25} />
            {title}
        </div>
    );
};

export default Ui;