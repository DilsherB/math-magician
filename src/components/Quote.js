import React, { useEffect, useState } from "react";

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=inspirational",
          {
            headers: {
              "X-Api-Key": "eqaKx38o0Fg1f/rZqOA/sg==epV9zWMwWAegkqnF",
            },
          }
        );
        const res = await apiData.json();
        setData(res[0]);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="quotes">
      {loading && <div className="center">Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <p>{data.quote}</p>
          <h3 className="right">~{data.author}</h3>
        </div>
      )}
    </div>
  );
};

export default Quote;
