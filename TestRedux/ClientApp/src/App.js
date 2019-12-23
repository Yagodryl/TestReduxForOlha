import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import ListCookPage from './components/cookBookList'

export default () => (
  <Layout>
     <Route exact path='/' component={ListCookPage} />
   {/* <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
  </Layout>
);
