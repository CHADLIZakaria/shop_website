import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import FormCategory from './components/category/FormCategory';
import Layout from './components/Layout';
import ListProducts from './components/ListProducts';
import Categories from './pages/categories/categories';
import Comments from './pages/comments/comments';
import Home from './pages/Home/Home';
import Products from './pages/products/products';
import Users from './pages/users/users';


function App() {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path="/"  exact element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id/edit" element={<FormCategory />} />
            <Route path="categories/:name" element={<ListProducts />} key={window.location.pathname} />
            <Route path="/users" element={<Users />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/products" element={<Products />} />

          
          </Routes>
        </Layout>
    </Router>
  );
}

export default App;
