import React, { useContext } from 'react';
import Page from '../components/layouts/Page';
import { Link } from 'react-router-dom';
import Content from '../components/layouts/Content';
import { BlogContext } from '../contexts/BlogContext';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import parser from 'react-html-parser';
import _ from 'lodash';

function SinglePostPage() {
  const { id } = useParams();
  const numaricPostId = Number(id);
  const { posts, isPending } = useContext(BlogContext);

  let singlePost;
  singlePost = _.find(posts, (post) => post.id === numaricPostId);

  return (
    <Page wide={false} pageTitle="Movie Form">
      {isPending && (
        <Content width="w-100" cssClassNames="h-100 align-items-center">
          <div className="text-center mt-5">
            <Loader type="Bars" color="red" height={100} width={100} />
          </div>
        </Content>
      )}
      <div className="row text-right">
        <div className="col-sm-12">
          <Link to={`/edit-post/${id}`} className="btn btn-info">
            Edit Post
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12">
          {singlePost && (
            <Content width="w-100 pt-3" cssClassNames="bg-light p-5">
              <h1>{parser(singlePost.title.rendered)}</h1>
              <h4>Post ID: {id}</h4>
              {parser(singlePost.content.rendered)}
            </Content>
          )}
        </div>
      </div>
      <div className="row text-right">
        <div className="col-sm-12">
          <Link to={`/edit-post/${id}`} className="btn btn-info">
            Edit Post
          </Link>
        </div>
      </div>
    </Page>
  );
}

export default SinglePostPage;
