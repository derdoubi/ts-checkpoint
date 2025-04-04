// CODE 01: Converting a functional React component to TypeScript

// Step 1: Import React
import React from 'react';

// Step 2: Define the props interface for type safety
// This defines the shape of the props object that the component expects
interface GreetingProps {
  name: string; // Specify that name must be a string
}

// Step 3: Convert the functional component with proper type annotations
// Use the interface to type the props parameter
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Step 4: Export the component
export default Greeting;
