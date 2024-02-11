import "./categoryCard.styles.scss";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <div className="category-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="card-title">
        <h1>{title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryCard;
