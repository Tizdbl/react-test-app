import React, { useState } from 'react';

function App() {
  const [textFields, setTextFields] = useState([]);
  const [radioButtons, setRadioButtons] = useState([]);

  const handleButtonClick = () => {
    setTextFields([...textFields, '']);
  };
  const handleRadioButtonButtonClick = () => {
    setRadioButtons([...radioButtons, '']);
  };

  return (
      <div>
        <div>
          <button onClick={handleButtonClick}>Add Text Field</button>
          <button onClick={handleRadioButtonButtonClick}>Add Radio Button</button>
        </div>
        <div>
          {textFields.map((value, index) => (
              <input
                  key={index}
                  type="text"
                  value={value}
                  onChange={(e) => {
                    const updatedTextFields = [...textFields];
                    updatedTextFields[index] = e.target.value;
                    setTextFields(updatedTextFields);
                  }}
              />
          ))}
        </div>
        <div>
          {radioButtons.map((value, index) => (
              <input
                  key={index}
                  type="radio"
                  name="radioButtonGroup"
                  value={value}
              />
          ))}
        </div>
      </div>
  );
}

export default App;
