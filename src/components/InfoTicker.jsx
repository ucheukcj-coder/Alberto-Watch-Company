import { useEffect, useState } from "react";
import useLocalTime from "../hooks/useLocalTime.js";
import useLocationCoordinates from "../hooks/useLocationCoordinates.js";

export default function InfoTicker() {
  const { date, time } = useLocalTime();
  const { location, message, isLoading, requestLocation } = useLocationCoordinates();
  const [isPinned, setIsPinned] = useState(false);
  const locationText = location || "YOUR LOCATION · NOT SHARED";

  // Handle scroll to pin ticker at bottom when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const ticker = document.querySelector('.ticker');
      if (!ticker) return;

      const tickerRect = ticker.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Pin when ticker would go below viewport (scrolling up)
      const shouldPin = tickerRect.bottom > viewportHeight;

      if (shouldPin !== isPinned) {
        setIsPinned(shouldPin);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Also check on resize
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isPinned]);

  return (
    <div className={`ticker${isPinned ? ' is-pinned' : ''}`} aria-label="Local date, time, and location">
      <div className="ticker-track" aria-live="polite">
        {[0, 1, 2].map((copy) => (
          <div
            className="ticker-copy"
            aria-hidden={copy > 0 ? "true" : undefined}
            key={copy}
          >
            ALBERTO WATCH COMPANY <span>/</span> DATE · {date} <span>/</span>
            LOCAL TIME · {time} <span>/</span> {locationText}
          </div>
        ))}
      </div>
      <div className="ticker-action">
        <button
          className="text-button"
          type="button"
          onClick={requestLocation}
          disabled={isLoading}
          aria-describedby="location-status"
        >
          {isLoading ? "Requesting…" : location ? "Update location" : "Share location"}
        </button>
        <span className="visually-hidden" id="location-status" role="status">
          {message}
        </span>
      </div>
    </div>
  );
}
