import { useEffect, useState } from "react";

export default function useDebounce(initialValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
    }, delay);

    // clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialValue]);
  return debounceValue;
}
