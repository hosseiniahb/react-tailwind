import { useEffect, useState } from "react";

/**
 *  A custom hook to get and store a value from localStorage by key
 *
 * @param key The name of the key to access is the value stored in localStorage
 * @param initialValue An initial value or a function that returns an initial value
 * @returns The current value stored in localStorage and the function to change the localStorage value
 *
 */

export const useLocalStorage = <T>(
  key: string,
  initialValue: T | (() => T),
) => {
  // State variable to hold localStorage value
  const [value, setValue] = useState<T>(() => {
    const existDataInStorage = localStorage.getItem(key);

    if (existDataInStorage != null) {
      return JSON.parse(existDataInStorage);
    }

    if (typeof initialValue === "function") {
      return initialValue as () => T;
    } else {
      return initialValue as T;
    }
  });

  useEffect(() => {
    // Store state value in localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
};
