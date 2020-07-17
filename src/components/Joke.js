import React from "react";

function Joke(props) {
  return (
    <div className="jokes-item">
      <p style={{ display: !props.question && "none" }}>
        Question: {props.question}
      </p>
      <p style={{ color: !props.question && "#888888" }}>
        Answer: {props.punchline}
      </p>
      <hr />
    </div>
  );
}
export default Joke;
