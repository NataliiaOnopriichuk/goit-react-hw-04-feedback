import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p style={{ fontSize: '22px' }}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
