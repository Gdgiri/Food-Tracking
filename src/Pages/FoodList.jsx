import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodList.css"; // Import the CSS file for styling

const FoodList = () => {
  const navigate = useNavigate();

  // Define state for selected food items and total amount
  const [selectedFoods, setSelectedFoods] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const foodList = [
    {
      name: "Biryani",
      options: [
        { label: "Biryani-25", price: 5000 },
        { label: "Biryani-50", price: 10000 },
        { label: "Biryani-75", price: 15000 },
        { label: "Biryani-100", price: 20000 },
      ],
    },
    {
      name: "Paneer Tikka",
      options: [
        { label: "Paneer Tikka-25", price: 3750 },
        { label: "Paneer Tikka-50", price: 7500 },
        { label: "Paneer Tikka-75", price: 11250 },
        { label: "Paneer Tikka-100", price: 15000 },
      ],
    },
    {
      name: "Ice Cream",
      options: [
        { label: "Ice Cream-25", price: 1250 },
        { label: "Ice Cream-50", price: 2500 },
        { label: "Ice Cream-75", price: 3750 },
        { label: "Ice Cream-100", price: 5000 },
      ],
    },
  ];

  const handleFoodSelect = (foodLabel, price) => {
    setSelectedFoods((prevSelectedFoods) => {
      const updatedFoods = { ...prevSelectedFoods };
      const currentPrice = updatedFoods[foodLabel]?.price || 0;

      // If the food is already selected, remove it and subtract its price
      if (updatedFoods[foodLabel]) {
        delete updatedFoods[foodLabel]; // Remove the food from selection
        setTotalAmount((prevAmount) => prevAmount - currentPrice); // Update total amount
      } else {
        // Otherwise, add the food to the selection and add its price
        updatedFoods[foodLabel] = { price, label: foodLabel }; // Add food and price
        setTotalAmount((prevAmount) => prevAmount + price); // Update total amount
      }

      return updatedFoods;
    });
  };

  const handleConfirmSelection = () => {
    navigate("/", { state: { selectedFoods, totalAmount } });
  };

  return (
    <div className="food-list-container">
      <h1>Select Your Food</h1>
      {foodList.map((foodGroup, groupIndex) => (
        <div key={groupIndex} className="food-group">
          <h2>{foodGroup.name}</h2>
          <div className="food-options">
            {foodGroup.options.map((option, optionIndex) => (
              <div className="food-item" key={optionIndex}>
                <input
                  type="checkbox"
                  onChange={() => handleFoodSelect(option.label, option.price)}
                  checked={selectedFoods[option.label] !== undefined}
                  className="food-checkbox"
                />
                <span className="food-name">{option.label}</span>
                <span className="food-price">₹{option.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <h2 className="total-amount">Total Amount: ₹{totalAmount}</h2>
      <button className="confirm-button" onClick={handleConfirmSelection}>
        Confirm Selection
      </button>
    </div>
  );
};

export default FoodList;
