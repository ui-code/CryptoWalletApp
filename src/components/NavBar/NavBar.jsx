import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <li>
        <i className="ri-stack-fill"></i>
      </li>
      <li>
        <i className="ri-layout-masonry-line"></i>
      </li>
      <li>
        <i className="ri-repeat-2-fill active"></i>
      </li>
      <li>
        <i className="ri-layout-top-line"></i>
      </li>
      <li>
        <i className="ri-checkbox-blank-line"></i>
      </li>
      <li>
        <i className="ri-user-line"></i>
      </li>
    </nav>
  );
};

export default NavBar;
