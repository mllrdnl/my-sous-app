import React, { useCallback, useState } from "react";
import styles from "../styles/Register.module.css";
import axios from "axios";
import { signIn } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

function Register() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal, isLoading]);

  return (
    <div>
      <div className={styles.regContainer}>
        <h1 className={styles.regH}>REGISTER</h1>
        <form className={styles.regForm}>
          <div className={styles.regInputs}>
            <input type="text" name="firstName" placeholder="Name" />

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
