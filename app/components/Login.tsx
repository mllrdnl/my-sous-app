import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div>
      <div className={styles.loginForm}>
        <h1 className={styles.loginH}>LOGIN</h1>
        <form>
          <div className={styles.loginInputs}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
          </div>
        </form>
        <button className={styles.loginBtn}>LOGIN</button>
      </div>
      <div className={styles.registerRow}>
        <p>New to MySousApp?</p>
        <button className={styles.gotoRegBtn}>Register HERE</button>
      </div>
    </div>
  );
}

export default Login;
