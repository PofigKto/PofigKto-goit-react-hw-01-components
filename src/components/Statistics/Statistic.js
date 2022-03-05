import PropTypes from 'prop-types';

import s from './Statistics.module.css';
const Statistic = ({ label, percentage }) => {
  return (
    <div className={s.wrap}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage} % </span>
    </div>
  );
};
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistic;
