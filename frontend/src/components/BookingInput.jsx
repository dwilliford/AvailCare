import React, { useState } from 'react';

function BookingInput({ onMatch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fake NLP parsing for this prototype
    const parsed = {
      specialty: "Dermatology",
      date: "2024-05-23"
    };
    const response = await fetch('/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed)
    });
    const data = await response.json();
    onMatch(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="I need a dermatologist next Thursday afternoon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Search Availability
      </button>
    </form>
  );
}

export default BookingInput;
