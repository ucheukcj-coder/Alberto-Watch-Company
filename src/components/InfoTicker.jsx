import useLocalTime from "../hooks/useLocalTime.js";
import useLocationCoordinates from "../hooks/useLocationCoordinates.js";

export default function InfoTicker() {
  const { date, time } = useLocalTime();
  const { location, message, isLoading, requestLocation } = useLocationCoordinates();
  const locationText = location || "YOUR LOCATION · NOT SHARED";

  return (
    <div className="ticker" aria-label="Local date, time, and location">
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
