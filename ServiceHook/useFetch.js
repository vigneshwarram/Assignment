import { useState } from "react";
import { getCall } from "../Utils/service";

const useFetch = () => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, serError] = useState(undefined);

  const fetch = async (url, methodName = "GET") => {
    setloading(true)
    try {
      let response;
      switch (methodName) {
      
        case "GET":
          response = await getCall(url);
          break;  
      }

      if ((response && response?.status === 201) || response?.status === 200) {
        const JsonResponse = await response.json();
      
        setData(JsonResponse);
      } else {
        const JsonResponse = await response.json();

        throw new Error(JsonResponse?.message);
      }
    } catch (error) {

      serError(error);
    }
    setloading(false);
  };

  return {
    data,
    loading,
    error,
    fetch,
    setData
  };
};

export { useFetch };
