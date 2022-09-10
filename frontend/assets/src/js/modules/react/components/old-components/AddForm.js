import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormikControl from './formik/FormikControl';
import * as Yup from 'yup';
import WPAPI from 'wpapi';
import { BlogContext } from '../contexts/BlogContext';

function AddForm() {
  const { posts, setPosts, isPending } = useContext(BlogContext);
  const history = useHistory();

  // WPAPI SITE - LOCAL
  // const wp = new WPAPI({
  //   endpoint: 'http://localhost:10028/wp-json',
  //   username: 'cgteam',
  //   password: 'tKvp ScaM Jnig 2RTp huMK iwp0',
  // });

  const wp = new WPAPI({
    endpoint: 'http://localhost:10004/wp-json',
    username: 'cgteam',
    password: '55s9 uEmr OiAA Jxm3 Bhu1 JOkn',
  });

  // const wp = new WPAPI({
  //   endpoint: 'https://digitalsupportstaff.com/wp-json',
  //   username: 'cgteam',
  //   password: 'hUoV 8WCW Dllz 4rP4 BlEo Ip27',
  // });

  const createPost = async (post) => {
    await wp
      .posts()
      .create({
        // "title" and "content" are the only required properties
        title: post.title,
        content: post.content,
        // Post will be created as a draft by default if a specific "status"
        // is not specified
        status: 'publish',
      })
      .then((response) => {
        // "response" will hold all properties of your newly-created post,
        // including the unique `id` the post was assigned on creation
        console.log(response.id);
        // DATA ALTERED FOR LOCAL INSTANT FEEDBACK
        const createdSinglePost = {
          id: response.id,
          title: {
            rendered: response.title.rendered,
          },
          content: {
            rendered: response.content.rendered,
          },
        };

        // UPDATING THE CURRENT POSTS STATE
        setPosts([...posts, createdSinglePost]);
        // dispatch({ type: 'ADD_POST', payload: createdSinglePost });
        history.push('/');
      });
  };

  //   FORMIK INFO
  const initialValues = {
    title: '',
    content: '',
  };
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: initialValues });

    const singlePost = {
      ...values,
    };
    createPost(singlePost);
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is Required!'),
    content: Yup.string().required('Content is Required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className="p-3 bg-light formik-comp">
          {/* BOOK TITLE */}
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
      )}
    </Formik>
  );
}

export default AddForm;
