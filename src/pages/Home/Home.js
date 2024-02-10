import { CATEGORIES } from "../../constants";
import "./home.styles.scss";
import { CategoryCard } from "../../components/molecules";

const Home = () => {
  return (
    <div className="home">
      {CATEGORIES.map((each) => (
        <CategoryCard
          key={each.id}
          title={each.title}
          imageUrl={each.imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
