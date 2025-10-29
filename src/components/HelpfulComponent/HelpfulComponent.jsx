import styles from "./HelpfulComponent.module.css";
const HelpfulComponent = ({title,description}) => {
    return (
        <div className={styles.card}>
            <h4>{title}</h4>
            <p>{description}</p>
            <i className="lni lni-arrow-right"></i>
        </div>
    );
};

export default HelpfulComponent;