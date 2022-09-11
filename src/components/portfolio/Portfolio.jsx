import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { placeHolderPortfolio, artWorkPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "art",
      title: "Art Work",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(placeHolderPortfolio);
        break;
      case "web":
        setData(placeHolderPortfolio);
        break;
      case "mobile":
        setData(placeHolderPortfolio);
        break;
      case "design":
        setData(placeHolderPortfolio);
        break;
      case "art":
        setData(artWorkPortfolio);
        break;
      default:
        setData(placeHolderPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio.</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
