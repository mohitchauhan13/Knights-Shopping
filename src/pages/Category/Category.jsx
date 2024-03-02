import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./category.styles.scss";

import { ProductCard } from "../../components/molecules";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const relatedProducts = categories
      .filter((each) => each.title === category)
      .reduce((_, each) => each.items, []);
    setProducts(relatedProducts);
  }, [category, categories]);

  return (
    <div className="category-container">
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-products-container">
        {!!products.length &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
