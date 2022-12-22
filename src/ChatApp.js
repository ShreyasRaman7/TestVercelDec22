import React, { useState } from 'react';

function ChatApp(props) {
  // State to store the login form data
  const [loginForm, setLoginForm] = useState({ username: '' });

  // State to store the chat messages
  const [messages, setMessages] = useState([]);

  // State to store the message form data
  const [messageForm, setMessageForm] = useState({ text: '' });

  // Function to handle changes to the login form
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  // Function to handle submission of the login form
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Save the username in the component's state
  };

  // Function to handle changes to the message form
  const handleMessageChange = (event) => {
    const { name, value } = event.target;
    setMessageForm({ ...messageForm, [name]: value });
  };

  // Function to handle submission of the message form
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    // Add the new message to the messages array
    setMessages([...messages, { username: loginForm.username, text: messageForm.text }]);
    // Clear the message form
    setMessageForm({ text: '' });
  };

  return (
    <div>
      {/* Login form */}
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={loginForm.username}
          onChange={handleLoginChange}
        />
        <button type="submit">Sign in</button>
      </form>

      {/* Chat window */}
      <div>
        {messages.map((message) => (
          <p>
            {message.username}: {message.text}
          </p>
        ))}
      </div>

      {/* Message form */}
      <form onSubmit={handleMessageSubmit}>
        <label htmlFor="text">Message:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={messageForm.text}
          onChange={handleMessageChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatApp;
