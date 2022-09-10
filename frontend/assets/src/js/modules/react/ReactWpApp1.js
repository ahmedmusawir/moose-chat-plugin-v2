import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/general/MainNavbar';
import NotFound from './pages/NotFound';
import ReactAppThemOne from './pages/ReactAppThemeOne';
import ReactAppThemeTwo from './pages/ReactAppThemeTwo';
import HomePage from './pages/HomePage';
import BlogContextProvider from './contexts/BlogContext';
import SinglePostPage from './pages/SinglePostPage';
import EditPostPage from './pages/EditPostPage';
import AddPostPage from './pages/AddPostPage';
import AjaxOnePage from './pages/AjaxOnePage';
import WpapiOnePage from './pages/WpapiOnePage';
import WpapiCrudPage from './pages/WpapiCrudPage';
import AddImagePostPage from './pages/AddImagePostPage';

function ReactWpApp1() {
  return (
    <BlogContextProvider>
      <HashRouter>
        <MainNavbar />
        <main>
          <Switch>
            <Route exact path="/">
              {/* <WpapiOnePage /> */}
              <WpapiCrudPage />
            </Route>
            {/* <Route exact path="/">
              <HomePage />
            </Route> */}
            <Route exact path="/add-post">
              <AddPostPage />
            </Route>
            <Route exact path="/post/:id">
              <SinglePostPage />
            </Route>
            <Route exact path="/edit-post/:id">
              <EditPostPage />
            </Route>
            <Route exact path="/ajax-one">
              <AjaxOnePage />
            </Route>
            <Route exact path="/wpapi-one">
              <WpapiOnePage />
            </Route>
            <Route exact path="/wpapi-crud">
              <WpapiCrudPage />
            </Route>
            <Route exact path="/image-form">
              <AddImagePostPage />
            </Route>
            {/* <Route exact path="/page2">
              <ReactAppThemeTwo />
            </Route> */}
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </BlogContextProvider>
  );
}

export default ReactWpApp1;
