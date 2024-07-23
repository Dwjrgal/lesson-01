const Header = () => {
  return (
    <header
      style={{
        color: "white",
        display: "flex",
        height: "80px",
      }}
    >
      <div className="nav flex items-center justify-center">
        <h1 className="font-bold text-2xl">Brainwave.io</h1>
        <ul className="menu flex items-center font-bold">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="mt-[20px] mr-[60px]">
      "Get started a project</button>
    </header>
  );
};

export default Header;
