function Person({ name, age, hobbies }) {
  let voteStatus = "Must be over 18";
  if (age >= 18) {
    voteStatus = "Please go vote!";
  }

  const hobbyHTML = hobbies.map(hobby => <li>{hobby}</li>)

  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>Name: {name} </li>
        <li>Age: {age} <br /><p>{voteStatus}</p></li>
        <li>Hobbies: <br />
          <ul>
            {hobbyHTML}
          </ul>
        </li>
      </ul>
    </div>
  );
}