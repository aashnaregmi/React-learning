import React, { useState } from "react";
import Component2 from "./2";

const Component1 = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter upper text"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter lower text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />

      <Component2 topText={text1} bottomText={text2} />
    </div>
  );
};

export default Component1;
