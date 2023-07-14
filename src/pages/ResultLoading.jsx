import { useNavigate } from "react-router-dom";

const ResultLoading = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="title">
        <h1>Loading page</h1>
      </div>
      <div className="about-container">animation</div>
    </div>
  );
};

export default ResultLoading;
