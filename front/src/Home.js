import React, { useEffect, useState } from "react";
import "./css/App.css";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { useLogin } from "./LoginContext";
import { ContentBased } from "./render/ContentBased";
import { TodayCockTail } from "./render/TodayCockTail";
import { CfCocktail } from "./render/CfCockTail";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [cockTail, setCockTail] = useState([]);
  const [todayCocktail, setTodayCocktail] = useState({
    name: "",
    proof: "",
    gradients: [],
    image: "",
  });
  const [cfCocktail, setCfCocktail] = useState([]);
  const [login] = useLogin();

  const resetCocktail = () => {
    setCockTail([]);
  };

  useEffect(() => {
    if (login) {
      // console.log("hi")
      fetch(process.env.REACT_APP_BACKEND_SERVER_IP + "/flask/today-cf", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application / json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setTodayCocktail(res.today_cocktail);
          setCfCocktail(res.cf_cocktail);
        });
    }
    return;
  }, [login]);

  const KeywordRequestHandler = () => {
    fetch(
      process.env.REACT_APP_BACKEND_SERVER_IP +
        "/flask/search?keyword=" +
        keyword,
      {
        method: "GET",
        headers: {
          Accept: "application / json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setCockTail(res);
      });
  };

  return (
    <div className="home">
      {login ? <div>hi</div> : null}
      <div className="keyword">
        <input
          className="keyword-input"
          placeholder="enter your mood"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
        />
        <button
          className="input-submit"
          type="submit"
          onClick={KeywordRequestHandler}
        >
          <span>submit</span>
        </button>
        <button className="reset-submit" type="submit" onClick={resetCocktail}>
          <span>
            <BsArrowCounterclockwise />
          </span>
        </button>
      </div>

      {{ cockTail } ? <ContentBased cockTail={cockTail} /> : null}
      <div className="today-cocktail-box">
        {login && todayCocktail !== null ? (
          <TodayCockTail todayCocktail={todayCocktail} />
        ) : null}
      </div>
      <div className="cf-cocktail-box">
        {login && todayCocktail !== null ? (
          <CfCocktail cfCocktail={cfCocktail} />
        ) : null}
      </div>
    </div>
  );
};

export default Home;