import React from "react";

const About = ({ location }) => {
  const query = new URLSearchParams(location.search);
  const showDetail = query.get("detail") === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 프로젝트</p>

      {showDetail && <p>detail 쿼리가 true입니다</p>}
    </div>
  );
};

export default About;
