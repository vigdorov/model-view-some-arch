import React from "react";
import { useParams } from "react-router-dom";

export const Video = () => {
  const params = useParams();

  return <div>Current video {params.id}</div>;
};
