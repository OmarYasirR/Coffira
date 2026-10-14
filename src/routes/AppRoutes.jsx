import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import AccountLayout from '../layouts/AccountLayout'
import ProtectedRoute from './ProtectedRoute'

import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import ShopTea from '../pages/Tea/ShopTea'
import ProductDetails from '../pages/Product/ProductDetails'
import CategoryProducts from '../pages/Category/CategoryProducts'
import Cart from '../pages/Cart/Cart'
import Checkout from '../pages/Checkout/Checkout'
import OrderSuccess from '../pages/Checkout/OrderSuccess'
import Wishlist from '../pages/Wishlist/Wishlist'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import ForgotPassword from '../pages/Auth/ForgotPassword'
import ResetPassword from '../pages/Auth/ResetPassword'
import Account from '../pages/Account/Account'
import Profile from '../pages/Account/Profile'
import Orders from '../pages/Account/Orders'
import OrderDetails from '../pages/Account/OrderDetails'
import Addresses from '../pages/Account/Addresses'
import Settings from '../pages/Account/Settings'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import NotFound from '../pages/NotFound/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/tea" element={<ShopTea />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/category/:categoryId" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AccountLayout />}>
            <Route path="/account" element={<Account />} />
            <Route path="/account/profile" element={<Profile />} />
            <Route path="/account/orders" element={<Orders />} />
            <Route path="/account/orders/:orderId" element={<OrderDetails />} />
            <Route path="/account/addresses" element={<Addresses />} />
            <Route path="/account/settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  )
}
