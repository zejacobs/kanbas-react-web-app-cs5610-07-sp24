function TernaryOperator() {
  let loggedIn = true;

  return (
    <>
      <h2>Logged In</h2>
      {loggedIn ? <p>Welcome</p> : <p>Please Login</p>}
    </>
  );
}

export default TernaryOperator;
