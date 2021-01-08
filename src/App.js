import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/index.scss';
import Navbar from './globals/Navbar/Navbar';
import Footer from './globals/Footer/Footer';
import Home from './pages/IndexPage';
import AddCurrency from './pages/AddCurrency';

export default function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={AddCurrency} />
      <Footer />
    </div>
  );
}
