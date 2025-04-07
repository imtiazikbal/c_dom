import { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../config/ApiEndpoints";
import { useRouter } from "next/router";

const useFilter = (shop_id) => {
  const router = useRouter();
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (pageNumber = 1) => {
    setIsLoading(true);
    let url = "";

    if (router.query.id) {
      url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.CATEGORY_PRODUCTS}/${router.query.id}?page=${pageNumber}`;
    } else if (router.query.search) {
      url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.PRODUCT_SEARCH}?search=${router.query.search}&page=${pageNumber}`;
    } else {
      url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS}?page=${pageNumber}`;
    }

    try {
      const response = await axios.get(url, {
        headers: { "shop-id": shop_id },
      });

      if (response.data.success) {
        setAllProducts((prev) =>
          pageNumber === 1
            ? response.data.data
            : [...prev, ...response.data.data]
        );
        setHasMore(response.data.next_page_url !== null);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1); // Fetch on component mount or when router query changes
  }, [router.query]);

  return { allProducts, isLoading, error, hasMore, fetchData };
};

export default useFilter;
