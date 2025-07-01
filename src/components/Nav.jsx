const Nav = ({ movies, children }) => {
  return (
    <nav className="nav-bar">
      {children}
      <p className="num-results">Found {movies.length} results</p>
    </nav>
  );
};

export default Nav;
