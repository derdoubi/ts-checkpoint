// CODE 02: Converting a class-based React component to TypeScript

// Step 1: Import React and Component
import React, { Component } from 'react';

// Step 2: Define interface for component state
// This provides type safety for the state object
interface CounterState {
  count: number; // Specify that count must be a number
}

// Step 3: Convert the class component with proper type annotations
// Extend Component with generic type parameters for props and state
// In this case, we don't have props, so we use empty object {}
class Counter extends Component<{}, CounterState> {
  // Step 4: Initialize state with type safety
  state: CounterState = {
    count: 0
  };

  // Step 5: Convert the increment method (arrow function remains the same)
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 6: Convert the render method
  render(): React.ReactNode {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Step 7: Export the component
export default Counter;