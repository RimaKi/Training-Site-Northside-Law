import styles from "./StepCardComponent.module.css";
const StepCardComponent = ({icon , title , description}) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconContainer}>
                <i className={icon}></i>
            </div>
            <h4 style={{
                fontWeight:"500",
                fontSize : "18px"
            }}>{title}</h4>
            <p>{description}</p>
        </div>
    );
}


export default StepCardComponent;