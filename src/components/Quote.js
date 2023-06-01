import React, { useEffect } from "react";

const Quote = () => {
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch("https://api.api-ninjas.com/v1/quotes?category=education");
      const data = await apiData.json();
      console.log(data);
    };
    fetchData();
  });
  return <div><h1>Hi</h1></div>;
};

export default Quote;
