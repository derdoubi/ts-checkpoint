import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

// Define the App component
const App: React.FC = () => {
  return (
    <div className="app">
      <h1>React TypeScript Demo</h1>
      
      {/* Using the Greeting component with required name prop */}
      <Greeting name="World" />
      
      {/* Using the Counter component */}
      <Counter />
    </div>
  );
};

export default App;
