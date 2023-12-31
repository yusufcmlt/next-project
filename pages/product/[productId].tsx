import { ProductData } from "@/models/Product";
import { useRouter } from "next/router";
import { FC } from "react";

type ProductDetailProps = {
  product: ProductData;
};

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const router = useRouter();

  if (!product) {
    router.replace("/");
    return null;
  }

  return (
    <div className="productPage-container">
      <div className="productPage-image">
        <img src={product?.images[0]} />
      </div>
      <div className="productPage-info">
        <strong className="productPage-productName">{product?.title}</strong>
        <p className="productPage-productDesc">{product?.description}</p>
        <div className="productPage-priceSection">
          <span className="productPage-price">{product?.price} TL</span>
          <div>
            <button className="productPage-cartButton">SATIN AL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export async function getServerSideProps({
  params,
}: {
  params: { productId: string };
}) {
  const response = await fetch(
    `https://dummyjson.com/products/${params.productId}`
  );
  const product = await response.json();

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
}
