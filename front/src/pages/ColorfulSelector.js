import React from "react";
import { useState } from "react";
const Colorful_test1 = (props) => {
  const { setInnerStage, setIsColorful } = props;
  const [Colorful_test1, setColorful_test1] = useState(0);

  const innerStageHandler = () => {
    setIsColorful((prev) => [...prev, Colorful_test1]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setColorful_test1(1);
  };
  const DownHandler = () => {
    setColorful_test1(-1);
  };

  return (
    <div id="container">
      <div class="box">
        <h1>무슨 룩을 더 좋아하세요?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/monami.jpg'  width="110" height="110"></img>
              <p>모나미</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/colorful_look.jpg' width="110" height="110"></img>
              <p>화려한 옷</p>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

const Colorful_test2 = (props) => {
  const { setInnerStage, setIsColorful } = props;
  const [Colorful_test2, setColorful_test2] = useState(0);

  const innerStageHandler = () => {
    setIsColorful((prev) => [...prev, Colorful_test2]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setColorful_test2(1);
  };
  const DownHandler = () => {
    setColorful_test2(-1);
  };

  return (
    <div id="container">
      <div class="box">
        <h1>어떤 칵테일을 더 좋아하세요?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/Martini.jpg'  width="110" height="110"></img>
              <p>화려하지 않은 칵테일</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/Blue Hawaii.jpg' width="110" height="110"></img>
              <p>화려한 칵테일</p>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

const Colorful_test3 = (props) => {
  const { setInnerStage, setIsColorful } = props;
  const [Colorful_test2, setColorful_test3] = useState(0);

  const innerStageHandler = () => {
    setIsColorful((prev) => [...prev, Colorful_test2]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setColorful_test3(1);
  };
  const DownHandler = () => {
    setColorful_test3(-1);
  };

  return (
    <div id="container">
      <div class="box">
        <h1>어떤 동물을 더 좋아하세요?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/tazo.jpg' width="110" height="110"></img>
              <p>타조</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/gongzak.jpg' width="110" height="110"></img>
              <p>공작</p>
            </span>
          </label>
        </form>
      </div>
    </div>
  );

};

export function ColorfulSelector(props) {
  const { setColorful, setStage } = props;
  const [innerStage, setInnerStage] = useState(0);
  const [isColorful, setIsColorful] = useState([]);


  const goToNextStage = () => {
    const resultColor = isColorful.reduce((a,b) =>a+b)
    let ret = -1;
    if(resultColor >0){
      ret = 1;
    }else{
      ret = 0;
    }
    setColorful(ret);
    setStage((prev) => prev + 1);
  };

  return (
    <div>
      {innerStage === 0 ? (
        <Colorful_test1
          setIsColorful={setIsColorful}
          setInnerStage={setInnerStage}
        />
      ) : innerStage === 1 ? (
        <Colorful_test2
          setIsColorful={setIsColorful}
          setInnerStage={setInnerStage}
        />
      ) : innerStage === 2 ? (
        <Colorful_test3
          setIsColorful={setIsColorful}
          setInnerStage={setInnerStage}
        />
      ) : 
        goToNextStage()
      }
    </div>
  );
}
