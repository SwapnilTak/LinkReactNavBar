function StyleComp() {
  const styles = {
    backgroundColor: "red",
    textAlign: "center",
    backgroundImage: "linear-gradient(to top right, #00C9FF, #92FE9D)"
  };

  return (
    <>
      <div style={styles} className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
export default StyleComp;
