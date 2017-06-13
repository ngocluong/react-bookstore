import React from 'react';
import Products from './Products'
import NotFound from '../components/NotFound'
import Header from '../components/Header'
import ProductDetail from './ProductDetail'
import ProductUpdate from './ProductUpdate'
import NewProduct from './NewProduct'

import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' component={Products}/>
        <Route exact path='/products' component={Products}/>
        <Route path='/products/new' component={NewProduct}/>
        <Route path='/products/:id/edit' component={ProductUpdate}/>
        <Route path='/products/:id' component={ProductDetail}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>  
);

export default App;
