import { Outlet } from "react-router-dom";
import Home from "../../Home";
import { Footer } from "./Footer";
import { Header } from "./Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

export default AppLayout;
