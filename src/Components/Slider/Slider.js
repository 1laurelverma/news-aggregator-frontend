import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import "./Slider.css";
const axios = require("axios");

const Slider = () => {
  const [Cards, setCards] = useState([
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Russian gas supply to Poland resumes; Ukraine condemns 'gas blackmail' - Reuters",
      description:
        'Russian gas supplies to Poland were halted briefly on Wednesday, data from the European Union gas transmission operators showed, raising fears Russia may turn off the gas taps to Ukraine\'s allies in what it calls "gas blackmail".',
      url: "https://www.reuters.com/world/poland-bulgaria-face-russian-gas-cut-ukraine-crisis-escalates-2022-04-26/",
      urlToImage:
        "https://www.reuters.com/resizer/J5A5w66jNZcD7fsqhecujlJ2n8s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EUV3KPNMWZPW3ARVS54NLRPOKY.jpg",
      publishedAt: "2022-04-27T06:00:00Z",
      content:
        "WARSAW/SOFIA/KYIV, April 27 (Reuters) - Russian gas supplies to Poland were halted briefly on Wednesday, data from the European Union gas transmission operators showed, raising fears Russia may turn … [+5466 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Rachel Sharp",
      title:
        "Lily Peters news - live: Juvenile suspect known to 10-year-old is arrested in murder investigation - The Independent",
      description: "Follow updates live",
      url: "https://www.independent.co.uk/news/world/americas/crime/lily-peters-death-body-found-chippewa-falls-b2066275.html",
      urlToImage:
        "https://static.independent.co.uk/2022/04/25/20/newFile-1.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-04-27T05:50:04Z",
      content:
        "Police in Chippewa Falls have arrested a juvenile suspect in connection to the murder of 10-year-old Liliana Lily Peters.\r\nChief Matthew Kelm announced the arrest in a press conference on Tuesday eve… [+10022 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "How NOT TO WIN A Playoff Game: Timberwolves at Grizzlies Game 5 - BBALLBREAKDOWN",
      description:
        "#NBA #grizzlies #timberwolves #jamorant #nbaplayoffs Join my new community and discord where we discuss and diagram the X's and O's: bit.ly/3pElHsaFor more i...",
      url: "https://www.youtube.com/watch?v=St5c7Vv15c8",
      urlToImage: "https://i.ytimg.com/vi/St5c7Vv15c8/hqdefault.jpg",
      publishedAt: "2022-04-27T05:37:00Z",
      content: null,
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Tyler O'Neil",
      title:
        "Zelenskyy demands 'global control' over Russia's nuclear capabilities after 'completely irresponsible actions' - Fox News",
      description:
        "Ukrainian President Volodymyr Zelenskyy marked the 36th anniversary of the Chernobyl nuclear disaster with a speech condemning Russia's “completely irresponsible actions” around nuclear power plants during its invasion and calling for “global control” of the …",
      url: "https://www.foxnews.com/world/zelenskyy-global-control-russias-nuclear-capabilities",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/04/222zelenskyy-address.jpg",
      publishedAt: "2022-04-27T04:45:56Z",
      content:
        'Ukrainian President Volodymyr Zelenskyy marked the 36th anniversary of the Chernobyl nuclear disaster with a speech condemning Russia\'s "completely irresponsible actions" around nuclear power plants … [+5650 chars]',
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Holly Ellyatt",
      title:
        "European markets head for lower open as fears over global growth rattle sentiment - CNBC",
      description:
        "European stocks are expected to open lower on Wednesday as global markets remain mixed, with fears persisting over the global growth outlook.",
      url: "https://www.cnbc.com/2022/04/27/european-markets-fears-over-global-growth-dominate-sentiment.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107046007-gettyimages-1239943114-AFP_32888K9.jpeg?v=1649807410&w=1920&h=1080",
      publishedAt: "2022-04-27T04:30:38Z",
      content:
        "LONDON European stocks are expected to open lower on Wednesday as global markets remain mixed, with fears persisting over the global growth outlook.\r\nThe U.K.'s FTSE index is seen opening 10 points l… [+1477 chars]",
    },
  ]);
  // console.log("hello");
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get("https://newsapi.org/v2/top-headlines", {
  //         params: {
  //           country: "in",
  //           category: "general",
  //           // apiKey: "b186e59534794e9a9b732580246cf18a",
  //           // apiKey: "9ad6a21779da47c28dde78964e668571",
  //           apiKey: "8b08468bd2174e088385c41a3930dc08",
  //           sortBy: "popularity",
  //         },
  //       });
  //       setCards(res.data.articles.slice(0, 5));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className="outer-div">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        {Cards.map((card, index) => {
          const { urlToImage, title, author } = card;
          return (
            <div className="Card" key={index}>
              <div className="gradient">
                <img alt="" src={urlToImage} />
              </div>
              <div className="first-txt">
                <h2>{title}</h2>
                <h4>{author}</h4>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
