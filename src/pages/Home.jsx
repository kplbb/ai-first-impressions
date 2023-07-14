import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="banner-container">
        <div className="banner">
          <img src="https://www.sciencenews.org/wp-content/uploads/2019/11/110819_ts_ai_feat.jpg" />
          <Link to="/upload">
            <div className="btn">시작하기</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
