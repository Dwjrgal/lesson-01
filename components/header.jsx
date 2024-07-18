const Header = () => {
  return (
    <header
      style={{
        color: "white",
        display: "flex",
        height: "80px",
        backgroundColor: "#333",
      }}
    >
      <h1>Brainwave.io</h1>
      <ul className="menu">
        <li>Demos</li>
        <li>Pages</li>
        <li>Support</li>
        <li>Contact</li>
      </ul>
      <button>Get started a project</button>
    </header>
  );
};

export default Header;
