// Component2.jsx
import memepic from "./meme.jpg";

function Component2({ topText, bottomText }) {
  return (
    <div
      style={{
        height: "450px",
        width: "500px",
        position: "relative",
        // border: "1px solid black",
        display: "block",
        margin: "5px auto",
      }}
    >
      <img
        src={memepic}
        alt="meme"
        style={{
          height: "400px",
          width: "450px",

          margin: "15px ",
          display: "block",
        }}
      />
      <h2
        style={{
          position: "absolute",
          top: "55px",
          left: "265px",
          padding: "5px 20px 5px 10px",
          wordWrap: "break-word", // wrap long words
          textAlign: "left", // align text inside the box
        }}
      >
        {topText}
      </h2>

      <h2
        style={{
          position: "absolute",
          bottom: "100px",
          left: "265px",
          padding: "5px 20px 5px 10px",
          wordWrap: "break-word", // wrap long words
          textAlign: "left", // align text inside the box
        }}
      >
        {bottomText}
      </h2>
    </div>
  );
}

export default Component2;
