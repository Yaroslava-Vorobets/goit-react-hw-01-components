import PropTypes from 'prop-types';
import { Avatar, Status, FriendName,} from './friendsListItem.styled';
const FriendListItem = ({avatar,name,isOnline}) => {
    return (
        <>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem