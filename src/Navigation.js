import React from 'react';

// Functional component for the navigation bar
function Navigation() {
  return (
    <nav className="navbar">
      {/* Unordered list to structure the navigation links */}
      <ul>
        {/* Placeholder links for the navigation bar */}
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

// Export the component to be used in the main application
export default Navigation;
