import { Link } from "react-router-dom";
import "./categoryCard.styles.scss";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <div className="category-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Link to={`shop`} className="card-title">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
