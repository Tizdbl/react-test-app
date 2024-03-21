import React, { useState } from 'react';

function App() {
    const [textFieldDefaultValue, setTextFieldDefaultValue] = useState('Enter default value');
    const [textFieldLabelValue, setTextFieldLabelValue] = useState('Enter label value');
    const [textFields, setTextFields] = useState([]);

    const handleDefaultValueButtonClick = () => {
        setTextFields([...textFields, { value: textFieldDefaultValue, label: textFieldLabelValue }]);
    };

    return (
        <div>
            <div>
                <h1>TextField Maker 9000</h1>
            </div>
            <div>
                <input
                    type="text"
                    value={textFieldDefaultValue}
                    onChange={(e) => setTextFieldDefaultValue(e.target.value)}
                />
                <input
                    type="text"
                    value={textFieldLabelValue}
                    onChange={(e) => setTextFieldLabelValue(e.target.value)}
                />
                <button onClick={handleDefaultValueButtonClick}>Add Text Field</button>
            </div>
            <div>
                {textFields.map((field, index) => (
                    <div key={index}>
                        <p>{field.label}</p>
                        <input
                            type="text"
                            value={field.value}
                            onChange={(e) => {
                                const updatedTextFields = [...textFields];
                                updatedTextFields[index].value = e.target.value;
                                setTextFields(updatedTextFields);
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
