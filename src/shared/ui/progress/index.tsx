import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss"

const cx = classNames.bind(styles);

interface IProps {
    step: number;
    total: number;
}

const Progress: FC<IProps> = ({ step, total }) => {
    const widthPercent = step / total * 100;

    return (
        <div className={cx('progress')}>
            <div className={cx('progress__label')} >{step}/{total}</div>
            <div className={cx('progress__item')}>
                <div className={cx("progress__step")}  style={{ width: `${widthPercent}%` }} />
            </div>
        </div>

    );
};

export default Progress;