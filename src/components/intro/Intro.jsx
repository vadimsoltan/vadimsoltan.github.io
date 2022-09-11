import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software", "Data", "UX/UI"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer"></div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1 className="name">Vadim Soltan.</h1>
          <h3>
            <span ref={textRef}></span> Engineer
          </h3>
        </div>
        <a href="#resume">
          <ExpandMoreIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
