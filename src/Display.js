import React, { useEffect, useState } from 'react';

function Display() {
    const [textFields, setTextFields] = useState([]);
    //gets all the textFields from the local storage
    useEffect(() => {
        const savedTextFields = JSON.parse(localStorage.getItem('textFields')) || [];
        setTextFields(savedTextFields);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            {textFields.map((field, index) => (
                <div
                    key={index}
                    style={{ position: 'absolute', left: field.x, top: field.y }}
                >
                    <p>{field.label}</p>
                    <input type="text" defaultValue={field.value} />
                </div>
            ))}
        </div>
    );
}

export default Display;
