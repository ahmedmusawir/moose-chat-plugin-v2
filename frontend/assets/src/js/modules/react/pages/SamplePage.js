import React from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';

function SamplePage() {
  return (
    <Page wide={false} pageTitle="Home Page">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Content width="w-100" cssClassNames="bg-light mt-3">
            <h1>This is the Sample Page</h1>
            <h4>COPY ME ...</h4>
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default SamplePage;
