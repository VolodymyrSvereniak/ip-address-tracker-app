import styles from "./Header.module.scss";
import arrow from "../../assets/icon-arrow.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <form className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for any IP address domain"
        />
        <button className={styles.button} type="submit">
          <img src={arrow} alt="submit" />
        </button>
      </form>
    </div>
  );
};

export default Header;
