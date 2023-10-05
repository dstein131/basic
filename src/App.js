// App.js

import React, { useState } from 'react';
import './App.css';

// This is a React functional component.
function App() {
  // Using the useState hook to create a piece of state to hold comments.
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  // This function will be triggered when submitting a new comment.
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Update the comments state by appending the new comment.
    setComments([...comments, input]);
    setInput('');  // Clear the input field.
  };

  return (
    <div className="App">
      <h1>React Teaching Demo</h1>

      {/* JSX syntax, allowing for a mix of JS and HTML. */}
      <form onSubmit={handleCommentSubmit}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {/* Rendering a list of comments using .map */}
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
