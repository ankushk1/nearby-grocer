import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import categories from './components/categories';
import cart from './components/cart';

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={categories} />
          <Route path="/cart" exact component={cart} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;
  