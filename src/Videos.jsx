import React, { useMemo } from "react";
import { Outlet } from "react-router";
import { useNavigate, useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  const memoizedQueryParams = useMemo(() => {
    let params = {};
    for (let [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    return params;
  }, [searchParams]);

  return memoizedQueryParams;
};
export const Videos = () => {
  const navigate = useNavigate();
  const queryParams = useQueryParams();

  return (
    <div>
      <div>VIDEOS!</div>
      {queryParams.videoId ? <div>Video id {queryParams.videoId}</div> : null}
      <button onClick={() => navigate("/videos/?videoId=123")}>go to 1</button>
    </div>
  );
};
