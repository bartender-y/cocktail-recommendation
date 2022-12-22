import React, { useState } from "react";

const Fruity_test1 = (props) => {
  const { setInnerStage, setIsFruity } = props;
  const [fruity_test1, setFruity_test1] = useState(0);

  const innerStageHandler = () => {
    setIsFruity((prev) => [...prev, fruity_test1]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setFruity_test1(1);
  };
  const DownHandler = () => {
    setFruity_test1(-1);
  };

  return (
    <div id="container">
      <div class="box">
        <h1>무슨 과일을 더 좋아하세요?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/banana.jpg' width="110" height="110"></img>
              <p>바나나</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/ggull.jpg' width="110" height="110"></img>
              귤
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

const Fruity_test2 = (props) => {
  const { setInnerStage, setIsFruity } = props;
  const [fruity_test1, setFruity_test1] = useState(0);

  const innerStageHandler = () => {
    setIsFruity((prev) => [...prev, fruity_test1]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setFruity_test1(1);
  };
  const DownHandler = () => {
    setFruity_test1(-1);
  };


  return (
    <div id="container">
      <div class="box">
        <h1>무슨 술을 더 좋아하세요?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/zamong_isel.jpg' width="110" height="110"></img>
              <p>자몽에 이슬</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/cham_isel.jpg' width="110" height="110"></img>
              <p>참이슬</p>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

const Fruity_test3 = (props) => {
  const { setInnerStage, setIsFruity } = props;
  const [fruity_test1, setFruity_test1] = useState(0);

  const innerStageHandler = () => {
    setIsFruity((prev) => [...prev, fruity_test1]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setFruity_test1(1);
  };
  const DownHandler = () => {
    setFruity_test1(-1);
  };

  return (
    <div id="container">
      <div class="box">
        <h1>무슨 막걸리를 더 좋아하세요?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/strawberry_makgeolli.jpg' width="110" height="110"></img>
              <p>딸기 막걸리</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/makgeolli.jpg' width="110" height="110"></img>
              <p>막걸리</p>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export function FruitySelector(props) {
  const { setFruity, setStage } = props;
  const [innerStage, setInnerStage] = useState(0);
  const [isFruity, setIsFruity] = useState([]);


  const goToNextStage = () => {
    const resultFruity = isFruity.reduce((a,b) =>a+b)
    let ret = -1;
    if(resultFruity >0){
      ret = 1;
    }else{
      ret = 0;
    }
    setFruity(ret);
    setStage((prev) => prev + 1);
  };

  return (
    <div>
      {innerStage === 0 ? (
        <Fruity_test1 setIsFruity={setIsFruity} setInnerStage={setInnerStage} />
      ) : innerStage === 1 ? (
        <Fruity_test2 setIsFruity={setIsFruity} setInnerStage={setInnerStage} />
      ) : innerStage === 2 ? (
        <Fruity_test3 setIsFruity={setIsFruity} setInnerStage={setInnerStage} />
      ) : (
        goToNextStage()
      )}
    </div>
  );
}
