import Profile from "components/Profile/Profile";
import List from "components/List/List";
import Section from "components/Section/Section";

import user from "db/user";
import data from "db/data";
import friends from "db/friends";

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
        <List array={data} direction={true} />
      </Section>
      {/* <Section>
        <List array={friends} direction={false} />
      </Section> */}
    </>
  );
};

export default Main;
