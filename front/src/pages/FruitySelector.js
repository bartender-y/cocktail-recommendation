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
    <div className="Fruity_test">
      <input type="radio" name="fruity1" onClick={DownHandler}></input>
      <span>바나나</span>
      <input type="radio" name="fruity1" onClick={UPHandler}></input>
      <span>귤</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
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
    <div className="Fruity_test">
      <input type="radio" name="fruity2" onClick={DownHandler}></input>
      <span>자몽에 이슬</span>
      <input type="radio" name="fruity2" onClick={UPHandler}></input>
      <span>참이슬</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
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
    <div className="Fruity_test">
      <input type="radio" name="fruity2" onClick={DownHandler}></input>
      <span>딸기 막걸리</span>
      <input type="radio" name="fruity2" onClick={UPHandler}></input>
      <span>막걸리</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
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
        <button onClick={goToNextStage}> Next!</button>
      )}
    </div>
  );
}
