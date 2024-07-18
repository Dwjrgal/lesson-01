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
      <img
        src="https://i.pinimg.com/736x/c0/e5/8a/c0e58a8822f16eedf09fa0a29d57ccc0.jpg"
        alt=""
      />
      <ul className="menu">
        <li>home</li>
        <li>workd</li>
        <li>about us</li>
        <li>contact</li>
      </ul>
    </header>
  );
};

export default Header;
