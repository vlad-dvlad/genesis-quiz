import classNames from "classnames/bind";
import styles from "./styles.module.scss"

const cx = classNames.bind(styles);

const Loader = () => {
    return (
        <div className={cx("progress-bar-container")}>
            <div className={cx("progress-bar html")}>
                <progress className={cx("html")} max="100" value="92"></progress>
            </div>
        </div>
    );
};

export default Loader;