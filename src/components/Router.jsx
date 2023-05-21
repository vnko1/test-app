import { Route, Routes } from "react-router-dom";
import Page404 from "../pages/Page404";
import SharedLayout from "./sharedLayout/SharedLayout";
import TweetsPage from "../pages/TweetsPage";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default Router;
