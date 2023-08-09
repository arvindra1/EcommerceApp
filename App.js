import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigate/Navigate';
import Auth from './screens/Auth';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    // Perform your login logic here
    // If login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    // Set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {/* Conditionally render Auth or MyTabs based on the login state */}
      {isLoggedIn ? (
        <MyTabs />
      ) : (
        <Auth onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
