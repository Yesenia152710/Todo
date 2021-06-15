import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Welcome</a>
        </li>
        <li>
          <a href="/random-thing-here">Other</a>
        </li>
        <li>
          <a href="/completed">Completed</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
