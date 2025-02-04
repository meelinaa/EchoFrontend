import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useNavigate } from "react-router-dom";
import Header from "./pages/header/header";
import Home from "./pages/home/Home";
import Konto from "./pages/konto/Konto";
import Start from "./pages/start/Start";
import { useEffect } from "react";
import DatenAnalyse from "./pages/analyse/DatenAnalyse";

function StartWithRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
      const timer = setTimeout(() => {
          navigate('/home'); 
      }, 3000);

      return () => clearTimeout(timer); 
  }, [navigate]);

  return <Start />;
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<StartWithRedirect />} />

      <Route path="/" element={<Header/>}>
        <Route path="home" element={<Home/>} />
        <Route path="konto" element={<Konto/>} />
        <Route path="analyse" element={<DatenAnalyse/>} />
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

