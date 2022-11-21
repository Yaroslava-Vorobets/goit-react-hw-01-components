import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <>
            <span class="status">{isOnline ? 'Onlin' : 'ofline'}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem