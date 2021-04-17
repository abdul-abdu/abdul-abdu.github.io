import React, { useEffect, useState } from "react";
import "../styles/google.scss";

const CONSTANTS = {
  DELETING_SPEED: 50,
  TYPING_SPEED: 60,
  MESSAGES: [
    "What is a Stack?",
    "Binary Heap Implementation",
    "What is a Bubble Sort and How Does it Work",
    "What Is Recursion?",
    "Implementing a Deque in Python",
  ],
};

const Google = () => {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting, state.typingSpeed]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, CONSTANTS.MESSAGES),
      }));
    }
  }, [state.text, state.message, state.isDeleting]);

  const getCurrentText = (currentState) => {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  };

  const getMessage = (currentState, data) => {
    return data[Number(currentState.loopNum) % Number(data.length)];
  };

  const getTypingSpeed = (currentState) => {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  };

  return (
    <div id="google">
      <header>
        <ul>
          <li>
            <a className="links" href="#user">
              <button className="signbutton" type="button">
                Sign in
              </button>
            </a>
          </li>
          <li>
            <a href="#grid">
              <img
                className="grid"
                src="https://img.icons8.com/color/1x/activity-grid-2.png"
                title="Google apps"
                alt="googleimg"
              />
            </a>
          </li>
          <li>
            <a href="#images">Images</a>
          </li>
          <li>
            <a href="mailto:abdugaffor.abdurakhimov@gmail.com">Gmail</a>
          </li>
        </ul>
      </header>

      <div className="google-logo">
        <img alt="Google" src={process.env.PUBLIC_URL + "google.png"} />
      </div>

      <div className="searchbar">
        <input type="text" title="Search" value={state.text} disabled />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/26px-Google_mic.svg.png"
          title="Search by Voice"
          alt="voiceimg"
        />
      </div>

      <div className="buttons">
        <button className="button" type="button">
          Google Search
        </button>
        <button className="button" type="button">
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default Google;
