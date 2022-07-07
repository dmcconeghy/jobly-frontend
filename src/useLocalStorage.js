import { useState, useEffect } from "react";

function useLocalStorage(key, firstValue = null){
    const startingValue = localStorage.getItem(key) || firstValue;

    const [item, setItem] = useState(startingValue);

    useEffect(
        function setKeyInLocalStorage(){
            console.debug("useLocalStorage useEffect", "item=", item);
            if (item === null) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, item);
            }
        },
        [key, item]
    );

    return [item, setItem];
}

export default useLocalStorage