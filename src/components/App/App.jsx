import Profile from '../Profile/Profile';
import user from '../Profile/user.json';
import Statistics from '../Statistics/Statistics';
import data from '../Statistics/data';
import FriendsList from '../Friends/FriendList';
import friends from '../Friends/friends.json';
import TransactionHistory from '../Transaction/TransactionHistory';
import transactions from '../Transaction/transactions.json';
// import GlobalStyle from '../GlobajStyles';
import 'modern-normalize';

export const App = () => {
  return (   
    <> 
        {/* <GlobalStyle/> */}
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
    