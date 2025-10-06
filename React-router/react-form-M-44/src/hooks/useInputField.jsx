import { useState } from "react";


const useInputField = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const handleFieldOnChange = (event) => {
        setValue(event.target.value);
    }

    return [value, handleFieldOnChange];
}


export default useInputField;