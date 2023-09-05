function ChildComp(props) {
  console.log(props);
  return (
    <>
      <div class="card">
        <div class="container">
          <h1>{props.name}</h1>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
        </div>
      </div>
    </>
  );
}
export default ChildComp;
