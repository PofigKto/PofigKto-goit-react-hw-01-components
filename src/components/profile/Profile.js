import PropTypes from 'prop-types'; // ES6
// import defaultImage from './default.jpg';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div
      className="profile"
      style={{
        color: 'red',
      }}
    >
      <div
        className="description"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: 'aqua',
        }}
      >
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          style={{
            display: 'block',
            backgroundColor: 'purple',
            borderRadius: '50%',
          }}
        />
        <p
          className="name"
          style={{
            color: 'green',
          }}
        >
          {username}
        </p>
        <p
          className="tag"
          style={{
            color: 'green',
          }}
        >
          {tag}
        </p>
        <p
          className="location"
          style={{
            color: 'green',
          }}
        >
          {location}
        </p>
      </div>
      <ul
        className="stats"
        style={{
          color: 'blue',
        }}
      >
        <li>
          <span className="label">Followers : </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views : </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes : </span>
          <span className="quantity">{stats.likes}</span>
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
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile;
