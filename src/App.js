import React, { useState } from 'react';

function App() {
    const [initialTextFieldValue, setInitialTextFieldValue] = useState('Enter initial value');
    const [textFields, setTextFields] = useState([]);

    const handleButtonClick = () => {
        setTextFields([...textFields, initialTextFieldValue]);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={initialTextFieldValue}
                    onChange={(e) => setInitialTextFieldValue(e.target.value)}
                />
                <button onClick={handleButtonClick}>Add Text Field</button>
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
        </div>
    );
}

export default App;
