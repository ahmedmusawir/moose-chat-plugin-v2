import React, { useContext } from 'react';
import Page from '../components/layouts/Page';
import { useParams } from 'react-router-dom';
import Content from '../components/layouts/Content';
import EditForm from '../components/EditForm';
import { BlogContext } from '../contexts/BlogContext';
import Loader from 'react-loader-spinner';
import _ from 'lodash';

function EditPostPage() {
  const { id } = useParams();
  const { posts, isPending } = useContext(BlogContext);
  const postId = Number(id);

  let singlePost;
  singlePost = _.find(posts, (post) => post.id === Number(id));

  return (
    <Page wide={false} pageTitle="Post Edit Form">
      {isPending && (
        <Content width="w-100" cssClassNames="h-100 row align-items-center">
          <div className="text-center mt-5">
            <Loader type="Bars" color="red" height={100} width={100} />
          </div>
        </Content>
      )}
      <div className="row justify-content-center">
        <div className="col-sm-12">
          {singlePost && (
            <Content width="w-100" cssClassNames="bg-light mt-3">
              <h1>Edit Post</h1>
              <h4>Post ID: {id}</h4>
              <EditForm singlePost={singlePost} postId={postId} />
            </Content>
          )}
        </div>
      </div>
    </Page>
  );
}

export default EditPostPage;
