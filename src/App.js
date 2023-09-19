import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles
import AnimatedRoutes from './components/AnimatedRoutes';

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <AnimatedRoutes />
    </Suspense>
  </BrowserRouter>
);

export default App;
