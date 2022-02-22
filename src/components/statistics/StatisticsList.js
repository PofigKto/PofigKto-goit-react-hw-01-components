import Statistic from './Statistic';
import PropTypes from 'prop-types';

function StatisticList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id} className="item">
          <Statistic label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
}
// проверяем только те проптайпы, которые есть в этом компоненте. А сюда приходит массив обьектов, у которых есть ключ
StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default StatisticList;
