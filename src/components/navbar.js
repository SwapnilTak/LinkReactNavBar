import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li class="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="box">box</Link>
        </li>
        <li>
          <Link to="contact">contact</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
      </ul>
    </>
  );
}
export default NavBar;
