import styles from "./Header.module.scss";
import arrow from "../../assets/icon-arrow.svg";
import { useInputStore } from "./useInputStore";
import { useEffect } from "react";

const Header = () => {
  const {
    inputValue,
    setInputValue,
    isMatchDomain,
    isMatchIPv4,
    handleSubmitReset,
    inputValueValidation,
    getNewLocationData,
  } = useInputStore();

  useEffect(() => {
    console.log("Component rendered with value:", isMatchIPv4, isMatchDomain);
  }, [isMatchIPv4, isMatchDomain]);

  function handleValidation(e) {
    e.preventDefault();
    inputValueValidation();
  }

  useEffect(() => {
    if (isMatchIPv4 || isMatchDomain) {
      getNewLocationData(isMatchIPv4, inputValue);
      handleSubmitReset();
    }
  }, [isMatchIPv4, isMatchDomain]);

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
