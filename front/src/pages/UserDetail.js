import React from "react";

export function UserDetails(props) {
  const { email, setEmail, password, setPassword, brith, setBrith, setGender } =
    props;

  return (
    <div className="join">
      <h1>Join</h1>
      <div className="join-input">
        <div>
          ID
          <input
            type="text"
            name="useremail"
            placeholder="Eail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div>
          birth
          <input
            type="text"
            name="brith"
            placeholder="YYMMDD"
            onChange={(e) => {
              setBrith(e.target.value);
            }}
            value={brith}
          />
        </div>
        <div className="gender">
          gender
          <div className="gender-checkbox">
            <input
              type="radio"
              name="gender"
              onChange={(e) => {
                setGender("MALE");
              }}
            />
            <span> male</span>
            <input
              type="radio"
              name="gender"
              onChange={(e) => {
                setGender("FEMALE");
              }}
            />
            <span> female</span>
          </div>
        </div>
      </div>
    </div>
  );
}
