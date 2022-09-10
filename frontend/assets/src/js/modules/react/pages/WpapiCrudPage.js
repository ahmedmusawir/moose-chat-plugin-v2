import React from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import DoWpapiCrud from '../components/DoWpapiCrud';

function WpapiCrudPage() {
  return (
    <Page wide={true} pageTitle="Home Page">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Content width="w-100" cssClassNames="bg-light mt-3">
            <h3>WPAPI CRUD (CREATE, READ, UPDATE & DELETE)</h3>
            <h4 className="text-info">
              POSTS, CUSTOM POST TYPE, CATEGORY & USER
            </h4>
          </Content>
          <Content width="w-100" cssClassNames="bg-light mt-3">
            <pre>
              <DoWpapiCrud />
            </pre>
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default WpapiCrudPage;
