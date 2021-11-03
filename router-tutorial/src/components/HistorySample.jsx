import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const HistorySample = () => {
  const history = useHistory();

  useEffect(() => {
    const unBlock = history.block("정말 떠나실 건가요?");
    return () => {
      if (unBlock) unBlock();
    };
  }, [history]);

  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
