import { Link } from "react-router-dom";

export default function Nav() {
  const categories = [
    { id: 1, name: "Books" },
    { id: 2, name: "Films" },
    { id: 3, name: "Games" },
  ];
  return (
    <nav>
      <p>Categories</p>
      {categories.map((category) => (
        <Link to={category.id.toString()}>
          <li>{category.name}</li>
        </Link>
      ))}
    </nav>
  );
}
