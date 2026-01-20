// Component1.jsx
import Component2 from "./component2";

function Component1() {
  const memeText1 = "Frontend";
  const memeText2 = "Frontend with React";

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Simple Meme Generator!!</h1> <br />
      <Component2 topText={memeText1} bottomText={memeText2} />
    </div>
  );
}

export default Component1;
