const wp = new WPAPI({
  endpoint: 'http://localhost:10004/wp-json',
  username: 'cgteam',
  password: '8gLw rmzE hQhZ av4L 1ljg x119',
});

// FETCH MEDIA
const fetchedPosts = await wp.media().get();

{
  /* GET MEDIA */
}
{
  /* {posts.map((media) => (
          <li key={media.id} className="list-group-item">
            {parser(media.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {media.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {media.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              Media Link: {media.source_url}
              <a href={media.source_url} target="_blank">
                Image Link
              </a>
            </span>
          </li>
        ))} */
}

// FETCH POSTS BY CATEGORY ID - ACADEMIES & EVENTS - ID: 7 & 8 - RESULTS: 4
const fetchedPosts = await wp
  .posts()
  // BEFORE JAN 2021
  // .param('before', new Date('2021-01-01'))
  // AFTER OCT 2020 + AUTHOR ID 1 +
  .param('after', new Date('2020-10-01'))
  // AUTHOR CGTEAM ID: 1
  .param('author', 1)
  // CATEGORIES
  .param('categories', [121])
  // CUSTOM TAXONOMY STATE/CITY WORKS! City: Dekalb
  .param('states', [41])
  .get();

{
  /* POSTS BY PARAMS */
}
{
  /* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */
}

{
  /* POSTS BY CATEGORY SLUG */
}
{
  /* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */
}

// FETCH POSTS BY CATEGORY ID - ACADEMIES & EVENTS - ID: 7 & 8 - RESULTS: 4
const fetchedPosts = await wp.posts().categories([7, 8]).get();

{
  /* POSTS BY CATEGORY ID */
}
{
  /* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */
}

// FETCH SEARCH BY TEXT
const fetchedPosts = await wp.posts().search('moose');
const fetchedPosts = await wp.categories().search('app');

{
  /* SEARCH POSTS BY TEXT */
}
{
  /* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.title.rendered)}{' '}
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2 mr-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
            <div className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </div>
          </li>
        ))} */
}

// FETCH POSTS BY STATUS
const fetchedPosts = await wp.posts().status(['trash', 'pending']).get();

{
  /* POSTS BY PUBLISH STATUS */
}
{
  /* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              STATUS: {post.status}
            </span>
          </li>
        ))} */
}

{
  /* SETTINGS ONLY */
}
{
  /* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.content.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */
}

// FETCH USERS
const fetchedPosts = await wp.users().get();

{
  /* USERS ONLY */
}
{
  /* {posts.map((user) => (
          <li key={user.id} className="list-group-item">
            {parser(user.name)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {user.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {user.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              ROLE:{' '}
              {user.roles.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */
}

// FETCH CUSTOM POST TYPES
const fetchedPosts = await wp.flag().get();

// SETTING CPT ROUTE
wp.flag = wp.registerRoute('wp/v2', '/flag');

{
  /* CUSTOM POST TYPES ONLY */
}
{
  /* {posts.map((cpt) => (
          <li key={cpt.id} className="list-group-item">
            {parser(cpt.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {cpt.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {cpt.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              TYPE: {cpt.type}
            </span>
          </li>
        ))} */
}

// FETCH PAGES
const fetchedPosts = await wp.pages().get();

{
  /* PAGES ONLY */
}
{
  /* {posts.map((page) => (
          <li key={page.id} className="list-group-item">
            {parser(page.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {page.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {page.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              TYPE: {page.type}
            </span>
          </li>
        ))} */
}

// FETCH CATEGORIES
const fetchedPosts = await wp.categories().get();

{
  /* CATEGORIES ONLY */
}
{
  /* {posts.map((cat) => (
          <li key={cat.id} className="list-group-item">
            {parser(cat.name)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {cat.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {cat.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              Taxonomy: {cat.taxonomy}
            </span>
          </li>
        ))} */
}

// FETCH POSTS
const fetchedPosts = await wp.posts().get();

{
  /* POSTS ONLY */
}
{
  /* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */
}
