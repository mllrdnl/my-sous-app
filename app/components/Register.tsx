import React from "react";
import styles from "../styles/Register.module.css";

function Register() {
  return (
    <div>
      <div className={styles.regContainer}>
        <h1 className={styles.regH}>REGISTER</h1>
        <form className={styles.regForm}>
          <div className={styles.regInputs}>
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
            />
          </div>
          <button className={styles.regBtn}>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
