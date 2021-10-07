import "./styles.css";
import { useState } from "react";

var bestFood = {
  "Pure veg": [
    { name: "Maharaja Bhog", speciality: "buffet", rating: "3.9" },
    { name: "Green Leaf", speciality: "south-indian", rating: "4.0" },
    { name: "Metkut", speciality: "maharashtrian food", rating: "4.3" }
  ],
  "Non-veg": [
    { name: "Barbeque Nation", speciality: "Chicken starter", rating: "4.3" },
    { name: "Mi Hi Koli", speciality: "Fish", rating: "3.9" },
    { name: "Rangoon Zayka", speciality: "Tandoori", rating: "4.0" }
  ],
  Chinese: [
    { name: "Mainland in China", speciality: "Dumpling soup", rating: "4.0" },
    { name: "Chopstick", speciality: "Chicken crispy rice", rating: "4.1" },
    {
      name: "China Bistro",
      speciality: "crab,burnt garlic rice",
      rating: "4.2"
    }
  ],
  "Fast Food": [
    { name: "Mac Donald", speciality: "Burger", rating: "4.1" },
    {
      name: "Preeti-Sandwitch",
      speciality: "Grilled Sandwitch",
      rating: "4.2"
    },
    { name: "KFC", speciality: "Fried Chicken", rating: "4.0" }
  ]
};

const foodWeKnow = Object.keys(bestFood);

export default function App() {
  const [selectedgener, setgener] = useState("Pure veg");

  function generClickHandler(gener) {
    setgener(gener);
  }

  return (
    <div className="App">
      <div className="container">
        <h1> 🍲foodie_adda </h1>
        <p style={{ fontSize: "smaller" }}>
          {" "}
          Check out following recommondations by selecting gener.{" "}
        </p>
      </div>

      {foodWeKnow.map(function (gener) {
        return (
          <button className="btn" onClick={() => generClickHandler(gener)}>
            {gener}
          </button>
        );
      })}

      <div>
        <ul>
          {bestFood[selectedgener].map((hotel) => (
            <li style={{ listStyle: "none" }}>
              <div className="restaurant"> {hotel.name} </div>
              <div className="speciality"> {hotel.speciality} </div>
              <div className="rating"> {hotel.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
