import { Routes, Route } from "react-router-dom";
import PageContact from "./components/PageContact";
import PageHome from "./components/PageHome";
import PageIntroduction from "./components/PageIntroduction";
import PageNews from "./components/PageNews";
import PagePhone from "./components/PagePhone";
import PageProduct from "./components/PageProduct";
import PageLaptop from "./components/PageLaptop";
import PageIpad from "./components/PageIpad";
import PageBase from "./components/PageBase";
import ProductDetails from "./components/ProductDetails";
import './App.css'
import PageSearch from "./components/PageSearch";
import Cart from "./components/Cart";
import PagePay from "./components/PagePay";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<PageHome />} />
          <Route path="/pageproduct" element={<PageProduct />} />
          <Route path="/pagesearch" element={<PageSearch />} />
          <Route path="/pageintroduction" element={<PageIntroduction />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shopping-card" element={<Cart />}></Route>
          <Route path="/pay" element={<PagePay />}></Route>
          <Route path="/thank-you" element={<ThankYouPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
