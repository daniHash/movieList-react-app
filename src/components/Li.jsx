const Li = ({ m, children, onClick }) => {
  return (
    <li onClick={() => onClick(m.imdbID)}>
      <img src={m.Poster} alt="" />
      <h3>{m.Title}</h3>
      {children}
    </li>
  );
};

export default Li;
