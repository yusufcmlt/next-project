// ProductsPage.js
import { FC } from "react";
import Product from "@/components/Product";
import { ProductData } from "@/models/Product";
import { useRouter } from "next/router";

// Mock data for products

type ProductProps = {
  searchText?: string;
  products: ProductData[];
};

const ProductsPageStatic: FC<ProductProps> = ({
  searchText = "",
  products,
}) => {
  const router = useRouter();
  //   const navigate = useNavigate();

  return (
    <div className="products-list">
      {products
        .filter((product) => {
          const searchString = searchText.trim().toLowerCase();
          if (searchString) {
            return (
              product.title.toLowerCase().includes(searchString) ||
              product.description.toLowerCase().includes(searchString)
            );
          }
          return true;
        })
        .map((product) => (
          <Product
            key={product.id}
            product={product}
            onClick={(id) => {
              router.push(`productStatic/${id}`);
            }}
          />
        ))}
    </div>
  );
};

export default ProductsPageStatic;

export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  //   console.log(data);
  return {
    props: {
      products: products,
    },
  };
}
