import { useNavigate } from "react-router-dom";
import "./BrandList.scss";

const BrandList = ({ brands }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-brand">
      <div className="brands">
        {brands?.data?.map((item) => (
          <div
            key={item.id}
            className="brand"
            onClick={() => navigate(`/brand/${item.id}`)}
          >
            <img
              src={
                item.attributes.logo.data.attributes.url
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
