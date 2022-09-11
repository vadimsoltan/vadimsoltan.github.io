import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const downloadResume = () => {
    setMenuOpen(false);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#resume">Resume</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => downloadResume()}>
          <a href="../../files/Vadim_Soltan_Resume.pdf" download>
            Download Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
