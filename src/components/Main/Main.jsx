import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";

import user from "db/user";
import data from "db/data";

const Main = () => {
  return (
    <>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Upload stats">
        <Statistics array={data} />
      </Section>
    </>
  );
};

export default Main;
