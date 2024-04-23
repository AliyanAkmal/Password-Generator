import { useCallback, useEffect, useState } from "react";

const PassGenerator = () => {
  const [Password, setPassword] = useState("");
  const [range, setRange] = useState(8);
  const [number, setNumber] = useState(true);
  const [character, setCharacter] = useState(true);

  const Generator = useCallback(() => {
    let getPassword = "";
    let getstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      getstring += "0123456789";
    }
    if (character) {
      getstring += "!@#$%^&*()";
    }
    for (let index = 1; index < range; index++) {
      const wholePass = Math.floor(Math.random() * getstring.length + 1);
      getPassword += getstring.charAt(wholePass);
    }
    setPassword(getPassword);
  }, [setPassword, range, number, character]);

  useEffect(() => {
    Generator();
  }, [setPassword, range, number, character]);
  return (
    <>
      <div style={{ backgroundColor: "gainsboro", padding: "15px 25px" }}>
        <h3>Password Password Generator</h3>
        <input
          style={{ width: "100%", padding: "5px" }}
          type="text"
          value={Password}
        />
        <br />
        <input
          style={{ width: "30%" }}
          type="range"
          min={6}
          max={100}
          value={range}
          onChange={(e) => {
            setRange(e.target.value);
          }}
        />
        <label>{range}</label>
        <input
          type="checkbox"
          defaultChecked={number}
          onChange={(prev) => {
            setNumber(!prev);
          }}
        />
        <label htmlFor="">numbers</label>
        <input
          type="checkbox"
          defaultChecked={character}
          onChange={(prev) => {
            setCharacter(!prev);
          }}
        />
        <label htmlFor="">characters</label>
      </div>
    </>
  );
};

export default PassGenerator;
