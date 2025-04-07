import React, { useState } from "react";
import useFetchProductsApi from "../../../../hooks/useFetchProductsApi";
import { ProductCard } from "../productCard/productCard";
import { Title } from "../title/title";
import { LoadMore } from "../loadMore/loadMore";

const Products = ({ domainInfo }) => {
  const {
    allProducts,
    isLoading: isProductLoading,
    error: productError,
    hasMore,
    loadMore: loadMoreProduct,
  } = useFetchProductsApi(domainInfo?.shop_id);

  if (productError) {
    return <div>Error: {productError.message}</div>;
  }
  return (
    <section className="ne-py-6 container ne-mt-2">
      <Title>All Products</Title>

      <div className="ne-grid md:ne-grid-cols-3 lg:ne-grid-cols-5 ne-my-4 ne-gap-4 ne-mt-4">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="ne-mt-6 ne-flex ne-items-center ne-justify-center">
        {hasMore === true && (
          <LoadMore isLoading={isProductLoading} onClick={loadMoreProduct} />
        )}
      </div>
    </section>
  );
};

export default Products;
