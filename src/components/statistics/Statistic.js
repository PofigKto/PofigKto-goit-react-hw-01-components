import PropTypes from 'prop-types';
const Statistic = ({ label, percentage }) => {
  return (
    <div>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </div>
  );
};
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistic;
