import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2c6c"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    name: "Monstera",
    price: 40,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 20,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 22,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 35,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1632207691144-0c9e8b5a0a5a"
  },

  // Flowering Plants
  {
    id: 7,
    name: "Rose Plant",
    price: 28,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
  },
  {
    id: 8,
    name: "Orchid",
    price: 45,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1566827401158-24c8e8c4f0e4"
  },
  {
    id: 9,
    name: "Jasmine",
    price: 26,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
  },
  {
    id: 10,
    name: "Hibiscus",
    price: 24,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651"
  },
  {
    id: 11,
    name: "Marigold",
    price: 18,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f"
  },
  {
    id: 12,
    name: "Lavender",
    price: 32,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
  },

  // Succulents
  {
    id: 13,
    name: "Echeveria",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1515402581115-18ce4749f92d"
  },
  {
    id: 14,
    name: "Jade Plant",
    price: 25,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 15,
    name: "Haworthia",
    price: 20,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 16,
    name: "String of Pearls",
    price: 30,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1600411833115-1c2f2f5b3c16"
  },
  {
    id: 17,
    name: "Burro's Tail",
    price: 27,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8b0c3a2"
  },
  {
    id: 18,
    name: "Zebra Haworthia",
    price: 22,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1536057550507-5f3e4d4b6f8c"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="/cart">🛒 Cart ({cartCount})</a>
        </div>
      </nav>

      <main id="plants">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>

                    <button
                      disabled={isAdded(plant.id)}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isAdded(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;	
