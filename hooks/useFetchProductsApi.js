import { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../config/ApiEndpoints";
const useFetchProductsApi = (shopId) => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (pageNumber = 1) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS}?page=${pageNumber}`,
        {
          headers: {
            "shop-id": shopId,
          },
        }
      );

      if (response.data.success) {
        if (!response.data.next_page_url) {
          setHasMore(false);
        }
        setAllProducts((prevData) => [
          ...prevData,
          ...(response.data.data || []),
        ]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    if (hasMore && !isLoading) {
      fetchData(page);
    }
  };

  useEffect(() => {
    fetchData();
  }, [shopId]);

  return {
    allProducts,
    isLoading,
    error,
    hasMore,
    loadMore,
  };
};

export default useFetchProductsApi;
