import React from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import AddForm from '../components/AddForm';

function AddPostPage() {
  return (
    <Page wide={false} pageTitle="Movie Form">
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <Content width="w-100" cssClassNames="bg-light mt-3">
            <h1>Add Post</h1>
            <AddForm />
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default AddPostPage;
