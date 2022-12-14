import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSendMessage() {
    const newMessage = {
      text: inputValue,
      timestamp: Date.now(),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  }

  return (
    <div className="chat">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => handleInputChange(event)}
        />
        <button onClick={() => handleSendMessage()}>Send</button>
      </div>
    </div>
  );
}
