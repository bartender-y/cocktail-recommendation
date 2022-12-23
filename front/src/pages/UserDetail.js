import React from "react";

export function UserDetails(props) {
  const { email, setEmail, password, setPassword, brith, setBrith, setGender } =
    props;

  return (
    <div className="join">
      <h2>Join</h2>
      <div className="join-input">
        <div>
          {/* ID */}
          <input
            type="text"
            name="useremail"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div>
          {/* Password */}
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
          {/* birth */}
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
          {/* gender */}
          <div className="gender-checkbox">
            <input
              className="gender-input"
              type="radio"
              name="gender"
              id="male"
              onChange={(e) => {
                setGender("MALE");
              }}
              
            />
            <label htmlFor="male"> Male</label>
            <input
              className="gender-input"
              type="radio"
              name="gender"
              id="female"
              onChange={(e) => {
                setGender("FEMALE");
              }}
              checked
            />
            <label htmlFor="female"> Female</label>
          </div>
        </div>
      </div>
    </div>
  );
}
