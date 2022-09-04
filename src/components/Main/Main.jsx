import Aside from "./Aside";
import Nav from "./Nav";
import Articles from "../../views/Articles";

export default function Main(props) {
  const { allCategories } = props;
  return (
    <>
      <Nav />
      <Articles allCategories={allCategories} />
      <Aside />
    </>
  );
}
