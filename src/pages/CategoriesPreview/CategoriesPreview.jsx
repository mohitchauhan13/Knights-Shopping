import { useSelector } from "react-redux";
import CategoryPreview from "../../components/molecules/CategoryPreview/CategoryPreview";
import { selectCategories } from "../../store/categories/category.selector";
import "../CategoriesPreview/categories-preview.styles.scss";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

  return (
    <div className="categories-preview">
      {!!categories.length &&
        categories.map((each) => {
          const { items, title } = each;
          return <CategoryPreview key={title} title={title} products={items} />;
        })}
    </div>
  );
};

export default CategoriesPreview;
