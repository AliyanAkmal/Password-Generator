import { useCallback, useEffect, useRef, useState } from "react";

const RemakeComponent = () => {
  const [password, setPassword] = useState("");
  const [rangeLength, setRangeLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [Character, setCharacter] = useState(false);

  ////////////////passGeneratorLogic/////////////////
  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "abcdefghijklmnopzrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) string += "0123456789";
    if (Character) string += "~!@#%^&*()_+}{|:?>";

    for (let i = 1; i < rangeLength; i++) {
      const wholePassword = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(wholePassword);
    }
    setPassword(password);
  }, [rangeLength, number, Character, setPassword]);
  //////////////////useEffect///////////////
  useEffect(() => {
    passwordGenerator();
  }, [rangeLength, number, Character, passwordGenerator]);
  /////////useReference/////////
  const passRef = useRef(null);
  const handleClick = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div style={style.dif}>
        <div style={style.mpow}>
          <input
            type="text"
            style={style.input}
            value={password}
            readOnly
            ref={passRef}
          />
          <button onClick={handleClick} style={style.button}>
            Copy
          </button>
        </div>
        <div style={style.forFLex}>
          <div>
            <input
              type="range"
              value={rangeLength}
              min={8}
              max={30}
              onChange={(e) => setRangeLength(e.target.value)}
            />
            <label>Range: {rangeLength}</label>
          </div>
          <div>
            <input
              type="checkBox"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
              id="number"
            />
            <label htmlFor="number">Number</label>
          </div>
          <div>
            <input
              type="checkBox"
              defaultChecked={Character}
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
              id="character"
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemakeComponent;
const style = {
  input: {
    padding: "10px 10px",
    outline: "none",
    width: "30vw",
    borderRadius: "10px 0px 0px 10px",
    border: "none",
  },
  mpow: {
    padding: "10px 10px",
    display: "flex",
  },
  dif: {
    padding: "50px 30px",
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:
      " linear-gradient(135deg, rgba(20, 20, 20, 1), rgba(64, 64, 64, 1))",
  },
  forFLex: {
    display: "flex",
    gap: "3rem",
    color: "white",
  },
  button: {
    backgroundColor: "#3a86ff",
    color: "white",
    padding: "5px 15px 9px 15px",
    borderRadius: "0px 10px 10px 0px",
    outline: "none",
  },
};
