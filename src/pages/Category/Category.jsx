import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import "./category.styles.scss";
import { CategoriesContext } from "../../context/CategoriesContext";
import { ProductCard } from "../../components/molecules";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
