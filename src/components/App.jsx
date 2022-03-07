import user from '../data/user.json'
import statistics from '../data/statistics.json';
import Profile from './Profile/Profile';
import StatisticList from './Statistics/StatisticsList';
import Section from './Statistics/Section';
import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';
import Container from './Container/Container';
import transactions from '../data/transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory' ;


export default function App() {
  return (
    <Container>
     <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
      />
      
      <Section title="Upload stats" stats={statistics} >
        <StatisticList stats={statistics} />
      </Section>
     
      <FriendList friends={friends} />
     
        <TransactionHistory items={transactions} />
        
          </Container>
     
    
     
  );
};
