import { useState } from "react";

function formatCoordinate(value, positive, negative) {
  const direction = value >= 0 ? positive : negative;
  return `${Math.abs(value).toFixed(2)}° ${direction}`;
}

export default function useLocationCoordinates() {
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("Location not shared");
  const [isLoading, setIsLoading] = useState(false);

  function requestLocation() {
    if (!navigator.geolocation) {
      setLocation("");
      setMessage("Geolocation is not available in this browser");
      return;
    }

    setIsLoading(true);
    setMessage("Requesting location permission");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const latitude = formatCoordinate(coords.latitude, "N", "S");
        const longitude = formatCoordinate(coords.longitude, "E", "W");
        setLocation(`${latitude}, ${longitude}`);
        setMessage("Coordinates shown only in this browser");
        setIsLoading(false);
      },
      (error) => {
        setLocation("");
        setMessage(
          error.code === error.PERMISSION_DENIED
            ? "Location permission denied"
            : "Location unavailable",
        );
        setIsLoading(false);
      },
      { enableHighAccuracy: false, maximumAge: 60000, timeout: 10000 },
    );
  }

  return { location, message, isLoading, requestLocation };
}
