import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main/Main";

function Home(props) {
  const { allCategories } = props;
  return (
    <div className="grid-container">
      <Header />
      <Main allCategories={allCategories} />
      <Footer />
    </div>
  );
}

export default Home;
