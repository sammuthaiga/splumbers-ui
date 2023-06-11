import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PlumbersPage from "./components/PlumbersPage";
import Hero from './components/Hero'

function App() {
  const plumbers = [
    // ... your plumber data
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      location: "New York",
      pricePerHour: "$50",
      available: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "987-654-3210",
      location: "Los Angeles",
      pricePerHour: "$60",
      available: false,
    },
    {
      id: 3,
      name: "David Johnson",
      email: "david@example.com",
      phoneNumber: "555-123-4567",
      location: "Chicago",
      pricePerHour: "$45",
      available: true,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phoneNumber: "789-456-1230",
      location: "Miami",
      pricePerHour: "$55",
      available: true,
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@example.com",
      phoneNumber: "111-222-3333",
      location: "San Francisco",
      pricePerHour: "$65",
      available: false,
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily@example.com",
      phoneNumber: "444-555-6666",
      location: "Seattle",
      pricePerHour: "$60",
      available: true,
    },
  ];

  return (
    <Router>
      <Hero />
      <PlumbersPage plumbers={plumbers} />
    </Router>
  );
}

export default App;
