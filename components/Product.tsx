import { ProductData } from "@/models/Product";
import { FC } from "react";

type ProductProps = {
  product: ProductData;
  onClick: (id: number) => void;
};

const Product: FC<ProductProps> = ({ product, onClick }) => {
  return (
    <div
      className="product"
      onClick={() => {
        onClick(product.id);
      }}
    >
      <div className="product-image">
        <img alt="thumb" src={product.thumbnail} />
      </div>
      <div className="product-info">
        <strong className="product-name">{product.title}</strong>
        <strong className="product-price">{product.price} TL</strong>
      </div>
      {/* <span className="product-desc">{product.description}</span> */}
    </div>
  );
};

export default Product;
