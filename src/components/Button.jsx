const Button = ({ show, onClick }) => {
  return (
    <button className="btn-toggle" onClick={onClick}>
      {show ? "-" : "+"}
    </button>
  );
};
export default Button;
