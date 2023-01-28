import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const ScrollToTopWrapper = props => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.children);
};
export default ScrollToTopWrapper;