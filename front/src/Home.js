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
  const [cfCocktails, setCfCocktails] = useState([]);
  const [keywordRec, setKeywordREc] = useState(false);
  const [login, action] = useLogin();

  const resetCocktail = () => {
    setCockTail([]);
  };

  useEffect(() => {
    if (login) {
      fetch(process.env.REACT_APP_BACKEND_SERVER_IP + "/flask/today-cf", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application / json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.cf_cocktails);
          setTodayCocktail(res.today_cocktail);
          setCfCocktails(res.cf_cocktails);
        });
    }
    return;
  }, [login]);

  const KeywordRequestHandler = () => {
    if (!login) {
      return alert(
        "키워드 기반 검색기능을 이용 하시려면 로그인 해주시기 바랍니다."
      );
    }
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
        setTodayCocktail({
          name: "",
          proof: "",
          gradients: [],
          image: "",
        });
        setCfCocktails([]);
        setKeywordREc(true);
      });
  };

  const onPressKey = (e) => {
    if (e.code === "Enter") {
      KeywordRequestHandler();
    }
  };

  return (
    <div className="home">
      <div className="keyword">
        <input
          className="keyword-input"
          placeholder="What type of cocktail are you looking for?"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyDown={onPressKey}
          value={keyword}
        />
        <button
          className="home-button input-submit"
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

      <div className="content-based-box">
        {{ cockTail } && login ? <ContentBased cockTail={cockTail} /> : null}
      </div>
      <div className="today-cocktail-box">
        {login && !keywordRec ? (
          <div className="layout">
            <h5>오늘의 칵테일</h5>
            <TodayCockTail todayCocktail={todayCocktail} />
          </div>
        ) : null}
      </div>
      <div className="cf-cocktail-box">
        {login && !keywordRec ? (
          <div className="layout">
            <h5>당신을 위한 추천 칵테일</h5>
            <CfCocktail cfCocktails={cfCocktails} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
