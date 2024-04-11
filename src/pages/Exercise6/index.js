import React from 'react';
import { Link } from 'react-router-dom';
// remove big chunk import
// import Details from './Details';
import './styles.css';

// make sure componenets that are large are loaded outside of the main bundle
const Details = React.lazy(() => import('./Details'));

export const Exercise6 = () => {
  return (
    <div className='container'>
      <Link to='/'>← Back to Home</Link>
      <h1>Exercise 6: Code Splitting Components</h1>
      <div className='e6-container'>
        <div className='e6-content-container'>
          <img src={require('./logo.png')} alt='Restaurant logo' />
          <h1>Your reservation is confirmed.</h1>
        </div>
        <Details />
      </div>
    </div>
  );
};
