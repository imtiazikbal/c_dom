import { useEffect, useState } from "react";

const useHandleVariationSelection = (data, productFetchByVariants, router) => {
  const [selectedVariation, setSelectedVariation] = useState([]);

  useEffect(() => {
    if (
      data?.attributes?.length &&
      selectedVariation.length === data.attributes.length
    ) {
      const attributes = selectedVariation
        .map((item) => item.attribute_value)
        .join("-");
      const postBody = {
        variant: attributes,
        product_id: parseInt(router.query.id),
      };
      productFetchByVariants(postBody);
    }
  }, [selectedVariation]);

  return { selectedVariation, setSelectedVariation };
};

export default useHandleVariationSelection;
