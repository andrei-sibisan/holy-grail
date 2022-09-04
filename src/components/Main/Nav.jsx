function Nav() {
  const categories = [
    "Film & Cinema",
    "Books & Reading",
    "Games & Consoles",
    "Food & Drink",
    "World News",
    "Outdoor Living",
  ];
  return (
    <nav>
      <p>Categories</p>
      {categories.map((category) => (
        <li>{category}</li>
      ))}
    </nav>
  );
}

export default Nav;
