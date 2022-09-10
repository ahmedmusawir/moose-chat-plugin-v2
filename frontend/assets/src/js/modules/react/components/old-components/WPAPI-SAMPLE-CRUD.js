// DELETE CUSTOM POST TYPE: FLAG w/ ACF
const fetchedPosts = await wp.flag().id(1211).delete();
console.log(fetchedPosts);
setPosts(fetchedPosts);
setIsPending(false);
// UPDATE CUSTOM POST TYPE: FLAG w/ ACF
const fetchedPosts = await wp
  .flag()
  .id(1211)
  .update({
    title: 'EDITED --- A FLAG VIA WPAPI 7',
    content: 'This is FLAG CPT inserted via WPAPI 777 --- EDITED',
    acf: {
      name: 'moose is loose EDITED',
    },
    status: 'publish',
  });
// CREATE CUSTOM POST TYPE: FLAG w/ ACF
const fetchedPosts = await wp.flag().create({
  title: 'A FLAG VIA WPAPI 7',
  description: 'This is FLAG CPT inserted via WPAPI 777',
  acf: {
    name: 'moose is loose',
  },
  status: 'publish',
});

// CREATE USER
const fetchedPosts = await wp.users().create({
  username: 'keyabibo',
  name: 'Keya Bibo',
  first_name: 'Keya',
  last_name: 'Mony',
  email: 'keya@bibo.com',
  roles: ['editor'],
  description: 'This is a user being created via WPApi using WP App Password',
  password: 'pass1234',
});
// UPDATE USER
const fetchedPosts = await wp
  .users()
  .id(3)
  .update({
    username: 'keyabibo',
    name: 'Keya Mony',
    first_name: 'Keya',
    last_name: 'Bibo',
    email: 'keyabibo@gmail.com',
    roles: ['editor', 'author'],
    description:
      'EDITOR --- This is a user being created via WPApi using WP App Password',
    password: 'pass1234',
  });

// CREATE CATEGORY
const fetchedPosts = await wp.categories().create({
  name: 'WPAPI CAT TWO',
  description: 'This is category inserted via WPAPI',
  taxonomy: 'category',
});
// CREATE SUB CATEGORY
const fetchedPosts = await wp.categories().create({
  name: 'SUB WPAPI CAT TWO A',
  description: 'This is a sub-category inserted via WPAPI under WPAPI CAT TWO',
  taxonomy: 'category',
  parent: 372,
});
// CREATE UPDATE CATEGORY
const fetchedPosts = await wp.categories().id(373).update({
  name: 'UPDATED SUB WPAPI CAT TWO B',
  description:
    'UPDATED --- This sub-category has been UPDATED via WPAPI under WPAPI CAT TWO',
  taxonomy: 'category',
});
