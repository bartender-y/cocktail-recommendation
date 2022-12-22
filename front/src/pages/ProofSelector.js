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
    <div className="beerVSsoju">
      <input type="radio" name="proof1" onClick={DownHandler} />
      <span>beer</span>
      <input type="radio" name="proof1" onClick={UPHandler} />
      <span>soju</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
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
    <div className="beerVSsoju">
      <input type="radio" name="proof2" onClick={DownHandler} />
      <span>NonDrunk</span>
      <input type="radio" name="proof2" onClick={UPHandler} />
      <span>Drunk</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
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
    <div className="beerVSsoju">
      <input type="radio" name="proof3" onClick={DownHandler} />
      <span>MackChol</span>
      <input type="radio" name="proof3" onClick={UPHandler} />
      <span>Original</span>
      <button className="next-stage" onClick={innerStageHandler}>
        next
      </button>
    </div>
  );
};

export function ProofSelector(props) {
  const { setProof, setStage } = props;
  const [innerStage, setInnerStage] = useState(0);
  const [isProof, setIsProof] = useState([]);

  console.log("isProof " + isProof);

  const goToNextStage = () => {
    setProof(isProof);
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
        <button onClick={goToNextStage}> Next!</button>
      )}
    </div>
  );
}
