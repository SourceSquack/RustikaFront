const { useState } = require("react");

const useAlert = (options) => {
    const defaultOptions = {
        active: false,
        message: "",
        autoClose: true,
    };
    const [alert, setAlert] = useState({
        ...defaultOptions,
        ...options,
    });

    const toggleAlert = () => {
        setAlert(!alert.active);
    };

    return {
        alert,
        setAlert,
        toggleAlert,
    }
};

export default useAlert;

