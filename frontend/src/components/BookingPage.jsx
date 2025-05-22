import React, { useState } from 'react';
import BookingInput from './BookingInput';
import MatchResults from './MatchResults';

function BookingPage() {
  const [matches, setMatches] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  const handleMatch = (results) => {
    setMatches(results);
    setConfirmation(null);
  };

  const handleBook = async (providerId, slot) => {
    const response = await fetch('/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ provider_id: providerId, time_slot: slot })
    });
    const data = await response.json();
    setConfirmation(data);
    setMatches([]);
  };

  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
      <BookingInput onMatch={handleMatch} />
      <MatchResults matches={matches} onBook={handleBook} />
      {confirmation && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
          <p className="font-semibold text-green-800">{confirmation.message}</p>
          <p>{confirmation.provider} at {new Date(confirmation.time).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
