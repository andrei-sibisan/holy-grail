import { useLocation } from "react-router-dom";

import Article from "../components/Main/Article";
import eldenRing from "../img/banner.png";

export default function Articles(props) {
  //apelam functia useLocation care ne returneaza varibila searchParams care contine
  //informatii legate de query string
  //tot ce se scrie cu use, in react este un Hook
  console.log(props);
  const searchParams = useLocation();
  const categoryId = searchParams.pathname.split("/")[1];
  const { allCategories } = props;
  const category = allCategories.find(
    (category) => category.id.toString() === categoryId
    //categort.id este tip number si trebuie convertit in tip string pentru a fi egal cu CategoryId
    //care este de tip string
  );
  const categoryName = category?.name;
  const articles = [
    {
      title: "Books What is Lorem Ipsum?",
      thumb: eldenRing,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "books",
    },
    {
      title: "Film What is Lorem Ipsum?",
      thumb: eldenRing,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "films",
    },
    {
      title: "Games What is Lorem Ipsum?",
      thumb: eldenRing,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "games",
    },
    {
      title: "Books What is Lorem Ipsum?",
      thumb: eldenRing,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "books",
    },
  ];
  const filteredArticles = articles.filter(
    (article) => article.category === categoryName?.toLowerCase()
  );
  return Boolean(category) ? (
    <div>
      {filteredArticles.map((article) => (
        <Article
          title={article.title}
          thumb={article.thumb}
          content={article.content}
        />
      ))}
    </div>
  ) : (
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
