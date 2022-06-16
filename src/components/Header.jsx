import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-3 p-3">
      <div className="container">
        <div className="navbar-brand" href="/">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" />
            <h5 className="m-0">ManagementApp</h5>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
