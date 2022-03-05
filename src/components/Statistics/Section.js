import PropTypes from 'prop-types';
// import StatisticsList from './StatisticsList';
import s from './Statistics.module.css';
function Section({ title, children }) {
  return (
    <div className={s.container}>
      {/* рендерим по условию, если тайтл есть, то да. если нету - то не рендерим, чтоб не занимал место пустой заголовок */}
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
