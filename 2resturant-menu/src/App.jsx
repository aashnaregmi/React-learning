import "./App.css";

import foodItems from "./resturantcard/items.jsx";
import Card from "./resturantcard/card.jsx";

function App() {
  return (
    <>
      <div className="card-container">
        {foodItems.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </>
  );
}

export default App;
