import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">
        <button onClick={handleNavigate}>Go to About</button>
      </Link>
    </div>
  );
}
