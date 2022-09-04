import Article from "../components/Main/Article";
import eldenRing from "../img/banner.png";

function Articles() {
  const articles = [
    {
      title: "What is Lorem Ipsum?",
      thumb: eldenRing,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "books",
    },
    {
      title: "What is Lorem Ipsum?",
      thumb: eldenRing,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "film",
    },
  ];
  return (
    <div>
      {articles.map((article) => (
        <Article
          title={article.title}
          thumb={article.thumb}
          content={article.content}
        />
      ))}
    </div>
  );
}

export default Articles;
