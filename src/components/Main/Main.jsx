import s from "./Main.module.css";
import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";

import user from "db/user";
import data from "db/data";

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
        <Statistics title={"Upload stats"} stats={data} />
      </div>
    </>
  );
};

export default Main;
