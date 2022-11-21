import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendsList = ({ friends }) => {
    return (
        <ul class="friend-list"> 
            {friends.map(friend => (
                <li key={friend.id}>
                <FriendListItem
                avatar= {friend.avatar}
                name={friend.name} 
                isOnline={friend.isOnline}/>
            </li>
            ))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
  }))  
}

export default FriendsList
