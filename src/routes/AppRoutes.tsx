import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const AppRoutes = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <PacmanLoader color="#FFA938" />
          </div>
        }
      >
        <div className="mx-12 lg:mx-64 mt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
};

export default AppRoutes;
