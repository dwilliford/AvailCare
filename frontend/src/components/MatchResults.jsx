import React from 'react';

function MatchResults({ matches, onBook }) {
  if (!matches.length) return null;

  return (
    <div className="mt-8 space-y-6">
      {matches.map(provider => (
        <div key={provider.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800">{provider.name}</h3>
          <p className="text-sm text-gray-600">{provider.specialty}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {provider.available_slots.map(slot => (
              <button
                key={slot}
                onClick={() => onBook(provider.id, slot)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {new Date(slot).toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MatchResults;
