import Home from './rout/home/home.component'

import { Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './rout/navigation/navigation.component';

import SignIn from './rout/sign-in/sign-in.component';

import Shop from './rout/shop/shop.component';

import Checkout from './components/Checkout/Checkout';
const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
