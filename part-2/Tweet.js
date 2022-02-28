"use strict";

function Tweet({ username, name, date, message }) {
  return (
    <div className="tweet">
      <h1>{name}<br />{username}</h1>
      <p className="message">{message}</p>
      <div className="message-footer">{date}</div>
    </div>
  );
}