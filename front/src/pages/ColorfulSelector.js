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
    <div className="Fruity_test">
      <input type="radio" name="colorful1" onClick={DownHandler}></input>
      <span>모나미</span>
      <input type="radio" name="colorful1" onClick={UPHandler}></input>
      <span>화려한 옷</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
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
    <div className="Fruity_test">
      <input type="radio" name="colorful2" onClick={DownHandler}></input>
      <span>화려하지 않은 칵테일</span>
      <input type="radio" name="colorful2" onClick={UPHandler}></input>
      <span>화려한 칵테일</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
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
    <div className="Fruity_test">
      <input type="radio" name="colorful3" onClick={DownHandler}></input>
      <span>타조</span>
      <input type="radio" name="colorful3" onClick={UPHandler}></input>
      <span>공작</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
    </div>
  );
};

export function ColorfulSelector(props) {
  const { setColorful, setStage } = props;
  const [innerStage, setInnerStage] = useState(0);
  const [isColorful, setIsColorful] = useState([]);

  console.log("isColorful : " + isColorful);

  const goToNextStage = () => {
    setColorful(isColorful);
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
      ) : (
        <button onClick={goToNextStage}> Next!</button>
      )}
    </div>
  );
}
