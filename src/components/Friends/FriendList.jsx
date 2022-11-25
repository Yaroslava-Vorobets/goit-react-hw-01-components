import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendList, ListElem} from './friendList.styled';


const FriendsList = ({ friends }) => {
    return (    
         
        <FriendList> 
        {friends.map(friend => (
        <ListElem key={friend.id}>
            <FriendListItem
            avatar= {friend.avatar}
            name={friend.name} 
            isOnline={friend.isOnline}/>
        </ListElem>
        ))}
        </FriendList>                
)}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
  }))  
}

export default FriendsList
