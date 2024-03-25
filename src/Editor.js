import React, {useState, useEffect} from 'react';
import Draggable from 'react-draggable';

function Editor() {
    const [textFieldDefaultValue, setTextFieldDefaultValue] = useState('Enter default value');
    const [textFieldLabelValue, setTextFieldLabelValue] = useState('Enter label value');
    const [textFields, setTextFields] = useState([]);
    const [selectedTextFieldIndex, setSelectedTextFieldIndex] = useState(null);
    //gets all the textFields from the local storage
    useEffect(() => {
        const savedTextFields = JSON.parse(localStorage.getItem('textFields')) || [];
        setTextFields(savedTextFields);
    }, []);
    //update textField in local storage when it changes
    useEffect(() => {
        localStorage.setItem('textFields', JSON.stringify(textFields));
    }, [textFields]);
    //creates a new textField with given parameters
    const handleCreateButtonClick = () => {
        setTextFields([...textFields, { value: textFieldDefaultValue, label: textFieldLabelValue, x: 0, y: 0 }]);
    };
    //selects the textField when clicked on it
    const handleTextFieldClick = (index) => {
        setSelectedTextFieldIndex(index);
        setTextFieldDefaultValue(textFields[index].value);
        setTextFieldLabelValue(textFields[index].label);
    };
    //edits the selected textField with given parameters
    const handleEditButtonClick = () => {
        if (selectedTextFieldIndex !== null) {
            const updatedTextFields = [...textFields];
            updatedTextFields[selectedTextFieldIndex].value = textFieldDefaultValue;
            updatedTextFields[selectedTextFieldIndex].label = textFieldLabelValue;
            setTextFields(updatedTextFields);
        }
    };
    //saves the position of textField when stop we dragging it
    const handleDragStop = (index, event, ui) => {
        const updatedTextFields = [...textFields];
        updatedTextFields[index].x = ui.x;
        updatedTextFields[index].y = ui.y;
        setTextFields(updatedTextFields);
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
                <button onClick={handleCreateButtonClick}>Create Text Field</button>
                <button onClick={handleEditButtonClick}>Edit Text Field</button>
            </div>
            <div>
                {textFields.map((field, index) => (
                    <Draggable
                        key={index}
                        defaultPosition={{ x: field.x, y: field.y }}
                        onStop={(event, ui) => handleDragStop(index, event, ui)}
                    >
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

export default Editor;
