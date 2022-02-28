"use strict";

function App() {
  return (
    <div>
      <Tweet
        username="n8snyder"
        name="Nate"
        date={(new Date(Date.now())).toDateString()}
        message="This is my first tweet!">
      </Tweet>
      <Tweet
        username="mrdog"
        name="Brian"
        date={(new Date(Date.now())).toDateString()}
        message="I just divorced my ex">
      </Tweet>
    </div >
  );
}