import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedFoods, totalAmount } = location.state || {
    selectedFoods: [],
    totalAmount: 0,
  };

  const handleCateringSelect = () => {
    navigate("/foodlist", { state: { cateringSelected: true } });
  };
  return (
    <div>
      <h1>Home To Select Food List</h1>
      <button onClick={handleCateringSelect}>select foods</button>

      <h2>Seleted Foods</h2>

      {selectedFoods.length>0?(
        <ul>
            {selectedFoods.map((food,index)=>(
                <li key={index}>{food}</li>
            ))}
        </ul>
      ):(
        <p>No food selected</p>
      )}
      <h2>Total Amount: ₹{totalAmount}</h2>
    </div>
  );
};

export default Home;
