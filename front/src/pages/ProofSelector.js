import "../css/drink-bti.css";
import React, { useState } from "react";

const BeerVSsoju = (props) => {
  const { setInnerStage, setIsProof } = props;
  const [BSProof, setBSProof] = useState(0);

  const innerStageHandler = () => {
    setIsProof((prev) => [...prev, BSProof]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setBSProof(1);
  };
  const DownHandler = () => {
    setBSProof(-1);
  };
  return (
    <div id="container">
      <div class="box">
        <h1>무슨 술을 좋아하나요?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/beer.jpg' width="110" height="110"></img>
              <p>맥주</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/soju.jpg' width="110" height="110"></img>
              소주
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

const DrunkVSNonDrunk = (props) => {
  const { setInnerStage, setIsProof } = props;
  const [DNDProof, setDNDProof] = useState(0);

  const innerStageHandler = () => {
    setIsProof((prev) => [...prev, DNDProof]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setDNDProof(1);
  };
  const DownHandler = () => {
    setDNDProof(-1);
  };

  return (
    <div id="container">
      <div class="box">
        <h1>술을 마실 때 어떤 것을 선호하나요?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/full_drink.jpg' width="110" height="110"></img>
              <p>취할 때 까지 마시기</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/soft_drink.jpg' width="110" height="110"></img>
              적당히 마시기
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

const MackcholVSOriginal = (props) => {
  const { setInnerStage, setIsProof } = props;
  const [MNOProof, setMNOProof] = useState(0);

  const innerStageHandler = () => {
    setIsProof((prev) => [...prev, MNOProof]);
    setInnerStage((prev) => prev + 1);
  };

  const UPHandler = () => {
    setMNOProof(1);
  };
  const DownHandler = () => {
    setMNOProof(-1);
  };

  return (
    <div id="container">
      <div class="box">
        <h1>친구의 생일날 선물로 사가고 싶은 술은?</h1>
        <form class="form">
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{DownHandler(); innerStageHandler()}}/>
            <span class="custom-radio-button">
              <img class="img-left" src='img/makgulri.jpg' width="110" height="110"></img>
              <p>느긋하고 달콤하게 오래 즐기는 막걸리</p>
            </span>
          </label>
          <label class="custom-radio-button__container">
            <input type="radio" name="radio" onClick={()=>{UPHandler(); innerStageHandler()}}/> 
            <span class="custom-radio-button">
              <img class="img-right" src='img/bbal_too.jpg' width="110" height="110"></img>
              <p>신나니까 도수 높은 참이슬 오리지널(빨간 뚜껑)</p>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export function ProofSelector(props) {
  const { setProof, setStage } = props;
  const [innerStage, setInnerStage] = useState(0);
  const [isProof, setIsProof] = useState([0]);


  const goToNextStage = () => {
    const resultProof = isProof.reduce((a,b) =>a+b)
    let ret = -1;
    if(resultProof >0){
      ret = 1;
    }else{
      ret = 0;
    }
    setProof(ret);
    setStage((prev) => prev + 1);
  };

  return (
    <div>
      {innerStage === 0 ? (
        <BeerVSsoju setIsProof={setIsProof} setInnerStage={setInnerStage} />
      ) : innerStage === 1 ? (
        <DrunkVSNonDrunk
          setIsProof={setIsProof}
          setInnerStage={setInnerStage}
        />
      ) : innerStage === 2 ? (
        <MackcholVSOriginal
          setIsProof={setIsProof}
          setInnerStage={setInnerStage}
        />
      ) : (
        goToNextStage()
      )}
    </div>
  );
}
