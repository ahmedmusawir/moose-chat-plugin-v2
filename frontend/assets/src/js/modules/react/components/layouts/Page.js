import React, { useEffect } from 'react';

function Page({ wide, pageTitle, children }) {
  // Setting up mandatory Page Title in the browser
  useEffect(() => {
    document.title = `${pageTitle} | React Demo 1 `;
  }, [pageTitle]);

  // Checking for page width prop fluid to be true or false
  // fluid when true the layout will be full-width, when false
  // it is not full-width
  if (wide) {
    return (
      <div className="page">
        <div className="container-fluid">{children}</div>
      </div>
    );
  } else {
    return (
      <div className="page">
        <div className="container">{children}</div>
      </div>
    );
  }
}

export default Page;
