import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import CategoryPreview from "../../components/molecules/CategoryPreview/CategoryPreview";

import "../CategoriesPreview/categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="categories-preview">
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </div>
  );
};

export default CategoriesPreview;
