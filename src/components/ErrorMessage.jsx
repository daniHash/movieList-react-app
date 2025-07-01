const ErrorMessage = ({ err }) => {
  return (
    <p className="error">
      <span>⛔</span>
      {err}
    </p>
  );
};
export default ErrorMessage;
