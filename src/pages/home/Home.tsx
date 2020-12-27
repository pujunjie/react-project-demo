import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTestAction, getSagaTestAction } from "../../store/action/action";

export default memo(function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSagaTestAction());
    // dispatch(getTestAction());
  }, [dispatch]);
  return <div>home</div>;
});
