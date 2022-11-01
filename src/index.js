import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Service from './components/services';
import Industry from './components/industy';
import Technology from './components/technology';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Error404 from './components/404error';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './components/context/themeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route exact path='/home' element={<App />} />
          <Route exact path='/services' element={<Service />} />
          <Route exact path='/services/:name' element={<Service />} />
          <Route exact path='/industries' element={<Industry />} />
          <Route exact path='/technologies' element={<Technology />} />
          <Route exact path='/industries/:name' element={<Industry />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/blog/search' element={<Blog />} />
          <Route exact path='/blog/:blogid' element={<Blog />} />
          <Route exact path='/blog/categories/:blogcategory' element={<Blog />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
