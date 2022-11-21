import Profile from './profile/Profile';
import user from './profile/user.json';
import Statistics from './statistics/Statistics';
import data from './statistics/data';
import FriendsList from './Friends/FriendList';
import friends from './Friends/friends.json';
import TransactionHistory from './Transaction/TransactionHistory'
import transactions from './Transaction/transactions.json'

export const App = () => {
  return (   
      <>      
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            statsFollow={user.stats.followers}
            statsView={user.stats.views} 
            statsLikes={user.stats.likes}        
          />     
          <Statistics title="Upload stats" ststs={data}/> 
          <FriendsList friends={friends}/> 
          <TransactionHistory items={transactions} />
      </>     
      );
}
    