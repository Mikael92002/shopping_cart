import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <div>
        This page doesn't exist! Click <Link to="/">Here</Link> to go back to
        home
      </div>
    </>
  );
};

export default ErrorPage;
