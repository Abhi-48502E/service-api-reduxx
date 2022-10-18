import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Product from './components/Product';
import { Page1Api, Page2Api, Page3Api, ProductApi } from './Service/Service';


export const CoffeRoutes = {
  home: "/",
  page1: "/page1",
  page2: "/page2",
  page3: "/page3",
}

function App() {
  useEffect(() => {
    Page1Api()
    ProductApi()
    Page2Api()
    Page3Api()
  
   
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={CoffeRoutes.home} element={<Product />} />
          <Route path={CoffeRoutes.page1} element={<Page1 />} />
          <Route path={CoffeRoutes.page2} element={<Page2 />} />
          <Route path={CoffeRoutes.page3} element={<Page3 />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
