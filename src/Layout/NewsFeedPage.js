import React, { useEffect, useState } from "react";
import NewsCategory from "../Components/News-Category/NewsCategory";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer/Footer";
import { Navigate } from "react-router-dom";
import checkAuth from "../Components/Login/checkAuth";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import ArticleShow from "../Components/Editor/ArticleShow";

const NewsFeedPage = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/user`, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data.categories);
        if (user.length == 0) {
          setUser(["general", "technology"]);
          // console.log(user);
        }
      });
  }, []);

  if (!checkAuth()) return <Navigate to="/login" />;
  // console.log(user.categories);

  return (
    <div>
      <Navbar />
      <Slider />
      <h1 className="date-left">hellow</h1>

      {user.map((c, index) => (
        <NewsCategory category={c} key={index} />
      ))}

      <h1 className="date-left">hellow</h1>
      <ArticleShow />
      <Footer />
    </div>
  );
};

export default NewsFeedPage;
