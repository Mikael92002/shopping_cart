import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Page from "./Page";

const routes = [
  {
    path: "/:currPage?",
    element: <Page></Page>,
    errorElement: <ErrorPage></ErrorPage>,
  },
];

export default routes;
