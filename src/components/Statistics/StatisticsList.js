import Statistic from './Statistic';

import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function StatisticList({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={s.item}
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )} `,
          }}
        >
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
