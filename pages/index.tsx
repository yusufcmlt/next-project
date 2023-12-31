// ProductsPage.js
import { FC } from "react";
import Product from "@/components/Product";
import { ProductData } from "@/models/Product";
import { useRouter } from "next/router";

type ProductProps = {
  searchText?: string;
  products: ProductData[];
};

const ProductsPage: FC<ProductProps> = ({ searchText = "", products }) => {
  const router = useRouter();

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
              router.push(`product/${id}`);
            }}
          />
        ))}
    </div>
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  return {
    props: {
      products: products,
    },
  };
}
