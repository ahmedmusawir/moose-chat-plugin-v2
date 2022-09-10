import React from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import AddImageForm from '../components/AddImageForm';

function AddImagePostPage() {
  return (
    <Page wide={false} pageTitle="Movie Form">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Content width="w-100" cssClassNames="bg-light mt-3 p-5">
            <h1 className="text-center">Add Post w/ Featured Image</h1>
            <AddImageForm />
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default AddImagePostPage;
