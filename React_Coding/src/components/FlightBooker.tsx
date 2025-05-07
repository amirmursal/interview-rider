import { useCallback, useState } from "react";

const FlightBooker = () => {
  const today = new Date().toISOString().split("T")[0];
  const [routeState, setRouteState] = useState<"oneway" | "returnback">(
    "oneway"
  );
  const [oneWayDate, setOneWayDate] = useState(today);
  const [returnDate, setReturnDate] = useState(today);

  const handleRouteChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setRouteState(event.target.value as "oneway" | "returnback");
    },
    []
  );

  const handleOneWayDateChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setOneWayDate(event.target.value);
      if (new Date(event.target.value) > new Date(returnDate)) {
        setReturnDate(event.target.value);
      }
    },
    [returnDate]
  );

  const handleReturnDateChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setReturnDate(event.target.value);
    },
    []
  );

  const validateTripDetails = () => {
    return new Date(oneWayDate) <= new Date(returnDate);
  };

  const handleSubmit = () => {
    if (routeState === "oneway") {
      alert(`You have booked a one-way flight on ${oneWayDate}`);
    } else if (routeState === "returnback" && validateTripDetails()) {
      alert(
        `You have booked a return flight, departing on ${oneWayDate} and returning on ${returnDate}`
      );
    } else {
      alert(`Return date must be after the departure date`);
    }
  };

  return (
    <div className="container">
      <header>
        <h2>Flight Booker</h2>
      </header>
      <main>
        <section>
          <label htmlFor="routeType">Trip Type:</label>
          <select
            id="routeType"
            value={routeState}
            onChange={handleRouteChange}
          >
            <option value="oneway">One-way Flight</option>
            <option value="returnback">Return Flight</option>
          </select>
        </section>

        <section>
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            value={oneWayDate}
            onChange={handleOneWayDateChange}
            min={today}
          />
        </section>

        {routeState === "returnback" && (
          <section>
            <label htmlFor="returnDate">Return Date:</label>
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              onChange={handleReturnDateChange}
              min={oneWayDate}
            />
          </section>
        )}

        <button onClick={handleSubmit}>Book Flight</button>
      </main>
    </div>
  );
};

export default FlightBooker;
