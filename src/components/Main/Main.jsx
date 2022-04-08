import s from "./Main.module.css";
import Profile from "components/Profile/Profile";

import user from "db/user";
// import { user } from '/user';

const Main = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    </>
  );
};

export default Main;
