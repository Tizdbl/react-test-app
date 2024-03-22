import React, { useState } from 'react';
import Draggable from 'react-draggable';

function App() {
    const [textFieldDefaultValue, setTextFieldDefaultValue] = useState('Enter default value');
    const [textFieldLabelValue, setTextFieldLabelValue] = useState('Enter label value');
    const [textFields, setTextFields] = useState([]);
    const [selectedTextFieldIndex, setSelectedTextFieldIndex] = useState([]);

    const handleDefaultValueButtonClick = () => {
        setTextFields([...textFields, { value: textFieldDefaultValue, label: textFieldLabelValue }]);
    };
    const handleTextFieldClick = (index) => {
        setSelectedTextFieldIndex(index);
        setTextFieldDefaultValue(textFields[index].value);
        setTextFieldLabelValue(textFields[index].label);
    };
    const handleEditButtonClick = () =>{
        if (selectedTextFieldIndex !== null) {
            const updatedTextFields = [...textFields];
            updatedTextFields[selectedTextFieldIndex].value = textFieldDefaultValue;
            updatedTextFields[selectedTextFieldIndex].label = textFieldLabelValue;
            setTextFields(updatedTextFields);
        }
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
                <button onClick={handleEditButtonClick}>Edit Text Field</button>
            </div>
            <div>
                {textFields.map((field, index) => (
                    <Draggable key={index}>
                        <div style={{ position: 'absolute', border: selectedTextFieldIndex === index ? '2px solid red' : 'none'}}
                             onClick={() => handleTextFieldClick(index)}>
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
                    </Draggable>
                ))}
            </div>
        </div>
    );
}

export default App;
