import React, { useState } from "react";

const DetailsBox = () => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}
    >
      <p>This is the details box content.</p>
    </div>
  );
};

const Form = () => {
  const [isDetailsBoxOpen, setIsDetailsBoxOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDetailsBoxOpen(!isDetailsBoxOpen);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle Details Box</button>
      {isDetailsBoxOpen && <DetailsBox />}
    </div>
  );
};

export default Form;
