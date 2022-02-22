import PropTypes from 'prop-types';
function Section({ title, children }) {
  return (
    <div>
      {/* рендерим по условию, если тайтл есть, то да. если нету - то не рендерим, чтоб не занимал место пустой заголовок */}
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
