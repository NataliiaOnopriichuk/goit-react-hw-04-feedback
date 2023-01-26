import s from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
