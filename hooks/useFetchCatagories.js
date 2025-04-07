import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/ApiEndpoints';

const useFetchCategories = (shop_id) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);
    const handleFetchCategories = useCallback(async () => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching weather data...",
            });
            const response = await axios.get(
                `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CATEGORY.GET_CATEGORIES}`,
                {
                    headers: {
                        "shop-id": shop_id,
                    },
                }
            );
            if (!response?.status === 200) {
                const errorMessage = `Fetching Categories data failed: ${response.status}`;
                throw new Error(errorMessage);
            } else if (response?.status === 200) {
                setCategories(response?.data?.data);
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    }, [shop_id]);

    useEffect(() => {
        if (shop_id) {
            handleFetchCategories();
        }
    }, [shop_id]);

    return { loading, error, categories };
};

export default useFetchCategories;