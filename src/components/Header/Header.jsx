import styles from "./Header.module.scss";
import arrow from "../../assets/icon-arrow.svg";
import { useInputStore } from "./useInputStore";

const Header = () => {
  const {
    inputValue,
    setInputValue,
    isMatchDomain,
    isMatchIPv4,
    inputValueValidation,
    currentLocationData,
    getCurrentLocationData
  } = useInputStore();

  if (isMatchDomain) {
    console.log(`${isMatchDomain} domain`);
  } else if (isMatchIPv4) {
    console.log(`${isMatchIPv4} ip`);
  }

  function handleValidation(e) {
    e.preventDefault();
    // inputValueValidation();
    getCurrentLocationData()
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <form className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for any IP address domain"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={(e) => handleValidation(e)}
          className={styles.button}
          type="submit"
        >
          <img src={arrow} alt="submit" />
        </button>
      </form>
    </div>
  );
};

export default Header;
