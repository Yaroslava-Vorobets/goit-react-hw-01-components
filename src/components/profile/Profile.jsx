import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, statsFollow, statsView, statsLikes}) => {
    return (
       <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{statsFollow}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{statsView}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{statsLikes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  statsFollow: PropTypes.number.isRequired,
  statsView: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired,
}


export default Profile