import { useState } from "react";

const plantsArray = {
  Succulents: [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Cactus", price: 8 }
  ],
  Indoor: [
    { id: 3, name: "Snake Plant", price: 15 },
    { id: 4, name: "Ficus", price: 18 }
  ],
  Flowering: [
    { id: 5, name: "Peace Lily", price: 20 },
    { id: 6, name: "Orchid", price: 25 }
  ]
};

function ProductList() {
  const [added, setAdded] = useState([]);

  return (
    <div>
      <h1>Plants</h1>

      {Object.entries(plantsArray).map(([category, plants]) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants.map(p => (
            <div key={p.id}>
              <h3>{p.name}</h3>
              <p>${p.price}</p>

              <button
                disabled={added.includes(p.id)}
                onClick={() => setAdded([...added, p.id])}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
