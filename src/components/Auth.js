import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged);

  const logHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={logHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
