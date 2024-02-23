function IfElse() {
  let true1 = true,
    false1 = false;

  return (
    <>
      <h2>If Else</h2>
      {true1 && <p>true1</p>}
      {!false1 ? <p>!false1</p> : <p>false1</p>}
    </>
  );
}

export default IfElse;
