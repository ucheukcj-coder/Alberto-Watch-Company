import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "albertoWatchBrowserVisits";

export default function useVisitorCount() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState("");
  const counted = useRef(false);

  useEffect(() => {
    if (counted.current) return;
    counted.current = true;

    try {
      const savedCount = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
      if (!Number.isSafeInteger(savedCount) || savedCount < 0) {
        throw new Error("The saved visit count is invalid.");
      }

      const nextCount = savedCount + 1;
      window.localStorage.setItem(STORAGE_KEY, String(nextCount));
      setCount(nextCount);
    } catch (storageError) {
      console.error("Could not read or update the browser-local visit count.", storageError);
      setError("Local count unavailable");
    }
  }, []);

  return { count, error };
}
