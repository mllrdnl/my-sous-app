import Login from "@/app/components/Login";
import styles from "../styles/login.module.css";
import Register from "@/app/components/Register";

function login() {
  return (
    <div className={styles.loginBody}>
      <div className={styles.loginContainer}>
        <div>
          <Login />
        </div>
        <div>
          <Register />
        </div>
        <div className={styles.loginOrRegRow}>
          <button className={styles.loginBtn}>LOGIN</button>
          <button className={styles.regBtn}>REGISTER</button>
        </div>
      </div>
    </div>
  );
}

export default login;
