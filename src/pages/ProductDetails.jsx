import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MYKEY, REST_HOST_API } from "../moviedb";

// http://www.omdbapi.com/?i=tt3896198&apikey=1f1cbf65

function ProductDetails() {
  const [moviedetail, setMovieDetail] = useState();
  const { omdId } = useParams();

  useEffect(() => {
   if(!omdId) return

    fetch(`${REST_HOST_API}/?i=${omdId}&apikey=${MYKEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieDetail(data);
      })
      .catch((err) => console.log(err));
  }, [omdId]);

  return <div className="text-amber-50">ProductDetails</div>;
}

export default ProductDetails;
