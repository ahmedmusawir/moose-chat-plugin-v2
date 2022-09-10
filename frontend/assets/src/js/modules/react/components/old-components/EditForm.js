import React, { useContext } from 'react';
import WPAPI from 'wpapi';
import Content from '../components/layouts/Content';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormikControl from './formik/FormikControl';
import * as Yup from 'yup';
import parse from 'react-html-parser';
import Loader from 'react-loader-spinner';
import { BlogContext } from '../contexts/BlogContext';

function EditForm({ singlePost, postId }) {
  const { posts, setPosts, isPending } = useContext(BlogContext);
  const history = useHistory();

  const wp = new WPAPI({
    endpoint: 'http://localhost:10004/wp-json',
    username: 'cgteam',
    password: '8gLw rmzE hQhZ av4L 1ljg x119',
  });

  const editPost = async (post) => {
    await wp
      .posts()
      .id(post.id)
      .update({
        // Update the title
        title: post.title,
        content: post.content,
        // Set the post live (assuming it was "draft" before)
        status: 'publish',
      })
      .then(function (response) {
        console.log('RESPONSE FROM WP:', response);
      });
  };

  // HTML PARSED TITLE & CONTENT
  const htmlTitle = parse(singlePost.title.rendered);

  //   FORMIK INFO
  const initialValues = {
    id: postId,
    title: htmlTitle,
    content: singlePost.content.rendered,
  };
  const onSubmit = (values, { resetForm }) => {
    resetForm({ values: initialValues });

    const editedSinglePost = {
      ...values,
    };
    console.log('EDITED SINGLE POST:', editedSinglePost);
    editPost(editedSinglePost);

    setPosts(
      posts.map((post) => {
        return post.id === editedSinglePost.id
          ? {
              ...post,
              title: {
                rendered: editedSinglePost.title,
              },
              content: {
                rendered: editedSinglePost.content,
              },
            }
          : post;
      })
    );

    history.push('/');
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is Required!'),
    content: Yup.string().required('Content is Required!'),
  });

  return (
    <React.Fragment>
      {isPending && (
        <Content width="w-100" cssClassNames="h-100 row align-items-center">
          <div className="text-center mt-5">
            <Loader type="Bars" color="red" height={100} width={100} />
          </div>
        </Content>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {singlePost &&
          ((formik) => (
            <Form className="p-3 bg-light formik-comp">
              {/* POST TITLE */}
              <div className="mb-2">
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="Post Title"
                  placeholder="Title of the Post"
                  className={
                    formik.touched.title && formik.errors.title
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                />
              </div>

              {/* TEXT AREA */}
              <div className="mb-3">
                <FormikControl
                  control="textarea"
                  name="content"
                  label="Post Content"
                  placeholder="Content"
                  rows={4}
                  className={
                    formik.touched.content && formik.errors.content
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                />
              </div>
              <hr className="bg-primary" />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <button className="btn btn-warning ml-1" type="reset">
                Reset
              </button>
            </Form>
          ))}
      </Formik>
    </React.Fragment>
  );
}

export default EditForm;
