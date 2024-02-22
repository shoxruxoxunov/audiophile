import { useEffect, useState } from "react";

function useFetch(url) {
  const [slug, setSlug] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(url);
      const data = await req.json();
      setData(data);
    };
    fetchData();
  }, [url]);
  return { slug };
}

export { useFetch };
