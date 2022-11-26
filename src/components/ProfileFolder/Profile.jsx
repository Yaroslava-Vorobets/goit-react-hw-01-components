import PropTypes from 'prop-types';
import { Description, Box, Wrap, Username, UserPhoto, Tag, Location, Label, LabelValue } from './profile.styled';
import { Container } from '../App/App.styles';

const Profile = ({ username, tag, location, avatar, statsFollow, statsView, statsLikes}) => {
    return (
      <Container>      
          <Description>
            <UserPhoto
              src={avatar}
              alt="User avatar"            
            />
            <Username>{username}</Username>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
          </Description>
          <Box>
            <Wrap>
              <Label>Followers</Label>
              <LabelValue >{statsFollow}</LabelValue>
            </Wrap>
            <Wrap>
              <Label>Views</Label>
              <LabelValue>{statsView}</LabelValue>
            </Wrap>
            <Wrap>
              <Label>likes</Label>
              <LabelValue>{statsLikes}</LabelValue>
            </Wrap>
          </Box>       
      </Container>
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