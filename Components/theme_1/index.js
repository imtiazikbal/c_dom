import { Button } from "react-bootstrap";
import AllProduct from "./HomePage/AllProduct";
import Banner from "./HomePage/Banner";
import Category from "./HomePage/Category";
import MiddleBanner from "./HomePage/MiddleBanner";
import ThemeOneLayout from "./ThemeOneLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../config/ApiEndpoints";

const index = ({ domainInfo}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]=useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = async (pageNumber = 1) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS}?page=${pageNumber}`, {
        headers: {
          'shop-id': domainInfo?.shop_id,
        },
      });
     
      if (response.data.success) {
        if (response.data.next_page_url === null) {
          setHasMore(false);
        }
        setAllProducts(prevData => [...prevData, ...(response.data.data || [])]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      setError("Error fetching data")
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    fetchData(page);
  };
  useEffect(()=>{
    fetchData()
  }, [])



  return (
    <>
      <main>
        <ThemeOneLayout domainInfo={domainInfo}>
          <Banner domainInfo={domainInfo} />
          <Category shop_id={domainInfo?.shop_id} />
          <MiddleBanner domainInfo={domainInfo} />
          <AllProduct domainInfo={domainInfo} allProducts={allProducts} isLoading={isLoading}/>
          {
            hasMore === true && 
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button   disabled={isLoading} onClick={loadMore} 
                style={{ backgroundColor: domainInfo?.multipage_color || "#3bb77e", border:"0"}}
                >{isLoading?"Loading...":"Load more"}</Button>
            </div>
          }
        </ThemeOneLayout>
      </main>
    </>
  );
};


export default index;
