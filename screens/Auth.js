

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

function Auth({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here, e.g., make API call to verify credentials
    // For demonstration purposes, let's assume a successful login if username and password are not empty
    if (username !== '' && password !== '') {
      // Call the onLogin function provided by the parent component (App) to notify about successful login
      onLogin();
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {/* Status Bar */}
      <StatusBar style='light' />

      {/* Rest of the login UI */}
      {/* ... (The existing login UI code goes here) ... */}
      {/* Login Container */}
      <View style={{ marginTop: '30%' }}>
        {/* Login Title */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: '700', fontSize: 70 }}>Login</Text>
        </View>

        {/* Username */}
        <View style={{ marginLeft: 42, marginTop: 47 }}>
          <Text style={{ fontWeight: '700', fontSize: 25 }}>Username</Text>
          <TextInput
            style={{ height: 40, borderBottomWidth: 2, width: 280 }}
            placeholder='Type your username'
            onChangeText={(value) => setUsername(value)} // Set the username state correctly
          />
        </View>

        {/* Password */}
        <View style={{ marginLeft: 42, marginTop: 47 }}>
          <Text style={{ fontWeight: '700', fontSize: 25 }}>Password</Text>
          <TextInput
            style={{ height: 40, borderBottomWidth: 2, width: 280 }}
            placeholder='Type your password'
            onChangeText={(value) => setPassword(value)} // Set the password state correctly
          />
          <Text style={{ marginLeft: 190, marginTop: 7 }}>Forgot password?</Text>
        </View>

        {/* Login Button */}
        <View style={{ marginTop: 47, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 291,
              height: 52,
              borderRadius: 40,
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleLogin} // Correctly invoking the handleLogin function
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: 700,
                color: 'white',
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>

          {/* Or Sign Up Using */}
          <Text style={{ marginTop: 28 }}>Or Sign Up Using </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} name='facebook' />
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} type='ionicon' name='logo-twitter' />
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} type='font-awesome' name='google' />
          </View>
        </View>

        {/* Sign Up */}
        <View style={{ marginTop: 91, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 400, lineHeight: 24 }}>Or Sign Up Using</Text>
          <Text style={{ fontSize: 20, fontWeight: 400, lineHeight: 24 }}>Sign Up</Text>
        </View>
      </View>
      {/* Username */}
      {/* Password */}
      {/* Login Button */}
    </View>
  );
}

export default Auth;
