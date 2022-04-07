import Profile from "components/Profile/Profile";
import s from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Profile />
      </div>
    </>
  );
};

export default Main;
