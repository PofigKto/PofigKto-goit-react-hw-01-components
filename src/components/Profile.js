import PropTypes from 'prop-types'; // ES6
// import defaultImage from './default.jpg';
const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  followers,
  Views,
  Likes,
}) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.Views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.Likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      Views: PropTypes.number.isRequired,
      Likes: PropTypes.number.isRequired,
    })
  ),
};
export default Profile;
