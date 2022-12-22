import "./css/App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "./pages/UserDetail";
import { ProofSelector } from "./pages/ProofSelector";
import { FruitySelector } from "./pages/FruitySelector";
import { ColorfulSelector } from "./pages/ColorfulSelector";
const Join = () => {
  //about routing
  const navigate = useNavigate();
  //about stage
  const [stage, setStage] = useState(0);

  //about UserDetail
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [brith, setBrith] = useState("");
  const [gender, setGender] = useState("");
  //about Proof
  const [proof, setProof] = useState([]);
  //about Fruity
  const [fruity, setFruity] = useState([]);
  //about Colorful
  const [colorful, setColorful] = useState([]);

  console.log(email, password, brith, gender);
  console.log("now Stage : " + stage);
  console.log("end Proof : " + proof);
  console.log("end Fruity : " + fruity);
  console.log("end Colorful : " + colorful);


  // joinHandler need to add Dbti data for join
  const joinHandler = () => {
    fetch(process.env.REACT_APP_MODEL_SERVER_IP + "/auth/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        birth: brith,
        gender: "MALE",
      }),
    }).then((res) => {
      if (res.ok) {
        alert("회원가입이 완료 되었습니다.");
        navigate("/login");
      } else {
        alert("회원가입 오류");
        throw Error(res);
      }
    });
  };

  const nextStageHandler = () => {
    setStage((prev) => prev + 1);
  };

  return (
    <div>
      {stage === 0 ? (
        <UserDetails
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          brith={brith}
          setBrith={setBrith}
          gender={gender}
          setGender={setGender}
          setStage={setStage}
        />
      ) : stage === 1 ? (
        <ProofSelector setProof={setProof} setStage={setStage} />
      ) : stage === 2 ? (
        <FruitySelector setFruity={setFruity} setStage={setStage} />
      ) : stage === 3 ? (
        <ColorfulSelector setColorful={setColorful} setStage={setStage} />
      ) : (
        <button className="join" onClick={joinHandler}>
          Join!
        </button>
      )}

      {stage === 0 ? (
        <button className="next-stage" onClick={nextStageHandler}>
          next
        </button>
      ) : null}
    </div>
  );
};

export default Join;
