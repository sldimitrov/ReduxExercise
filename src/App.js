import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const logState = useSelector((state) => state.auth.logged);

  return (
    <Fragment>
      <Header />
      {logState ? <UserProfile /> : <Auth />}
      <Counter />;
    </Fragment>
  );
}

export default App;
