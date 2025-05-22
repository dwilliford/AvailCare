import React, { useState } from 'react';

function BookingForm({ onMatch }) {
  const [specialty, setSpecialty] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ specialty, date })
    });
    const data = await response.json();
    onMatch(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Specialty (e.g., Dermatology)"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Find Providers
      </button>
    </form>
  );
}

export default BookingForm;
