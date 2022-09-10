import React from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import DoAjax from '../components/DoAjax';

function AjaxOnePage() {
  return (
    <Page wide={false} pageTitle="Home Page">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Content width="w-100" cssClassNames="bg-light mt-3">
            <h1>JQuery Ajax One</h1>
            <h4>Trying to use WP Ajax with React</h4>
          </Content>
          <Content width="w-100" cssClassNames="mt-3">
            <DoAjax />
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default AjaxOnePage;
