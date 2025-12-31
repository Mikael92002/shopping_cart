import { Link } from "react-router";

const ErrorPage = () => {
  const linkStyle = {
    
  };
  return (
    <>
      <div>
        This page doesn't exist! Click{" "}
        <Link to="/" style={linkStyle}>
          Here
        </Link>{" "}
        to go back to home
      </div>
    </>
  );
};

export default ErrorPage;
