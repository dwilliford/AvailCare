import React from 'react';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white px-6 py-4 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AvailCare</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Bookings</a>
            <a href="#" className="hover:underline">Log in</a>
          </nav>
        </div>
      </header>
      <main className="p-6 flex justify-center">
        <BookingPage />
      </main>
    </div>
  );
}

export default App;
