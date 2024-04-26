import { useNavigate } from "react-router-dom";
import "./CategoryList.scss";

const CategoryList = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                item.attributes.img.data.attributes.url
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
