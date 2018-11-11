import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import favicon from './favicon.ico';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <div className='default-body'>
    <Helmet>
      <title>Tim Chepeleff | Software Engineer, Full Stack Software Developer, DevOps Engineer</title>
      <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
    </Helmet>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
