import user from '../data/user.json'
import statistics from '../data/statistics.json';
import Profile from './profile/Profile';
import StatisticList from './statistics/StatisticsList';
import Section from './statistics/Section';


export default function App() {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   textTransform: 'uppercase',
      //   color: '#010101',
      // }}
    >
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
<Section title="Upload stats" stats={statistics} />;
<StatisticList stats={statistics} />;
    </div>
  );
};
