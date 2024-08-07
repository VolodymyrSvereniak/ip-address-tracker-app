import styles from "./Header.module.scss";
import arrow from "../../assets/icon-arrow.svg";
import { useInputStore } from "./useInputStore";
import { useEffect } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const Header = () => {
  const {
    inputValue,
    setInputValue,
    isMatchDomain,
    isMatchIPv4,
    handleSubmitReset,
    inputValueValidation,
    getNewLocationData,
    modalPopupStatus,
    handleModalPopupStatus,
  } = useInputStore();

  const handleValidation = (e) => {
    e.preventDefault();
    inputValueValidation();
  };

  useEffect(() => {
    if (isMatchIPv4 || isMatchDomain) {
      getNewLocationData(isMatchDomain, inputValue);
      handleSubmitReset();
    }
  }, [isMatchIPv4, isMatchDomain]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>IP Address Tracker</h1>
        <form className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search for any IP address or domain"
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

      {modalPopupStatus && (
        <ErrorModal
          isOpen={modalPopupStatus}
          onClose={handleModalPopupStatus}
        />
      )}
    </>
  );
};

export default Header;
