<?php
// RENAME THE FOLLOWING CONSTANTS WHEN STARTING A NEW PLUGIN
// MOOSE_CHAT_V2_URL
// MOOSE_CHAT_V2_BACKEND_SCRIPT_ID
// MOOSE_CHAT_V2_FRONTEND_SCRIPT_ID

// ALSO UPDATE THE FOLLOWING PREFIX WHEN STARTING A NEW PLUGIN
$PREFIX = 'MOOSE_CHAT_V2';
define('MOOSE_CHAT_V2_BACKEND_SCRIPT_ID', $PREFIX . '_backend');
define('MOOSE_CHAT_V2_FRONTEND_SCRIPT_ID', $PREFIX . '_frontend');

add_action('admin_enqueue_scripts',
// Conditionally load JS on plugin settings pages only
 function ($hook) {

  wp_register_script(
   MOOSE_CHAT_V2_BACKEND_SCRIPT_ID,
   MOOSE_CHAT_V2_URL . 'admin/assets/dist/js/admin.min.js',
   ['jquery'],
   time()
  );

  /* HOOK HERE IS THE NAME OF THE ADMIN PAGE URL. THIS WAY THE SCRIPT CAN BE LOADED WHEN
   * A SPECIFIC PAGE IS ACCESSED ON THE WP ADMIN SIDE THIS CAN BE USED TO LIMIT THE CSS ALSO
   */

  wp_localize_script(MOOSE_CHAT_V2_BACKEND_SCRIPT_ID, 'wpplugin', [
   'hook' => $hook
  ]);

  if ('toplevel_page_analytics-default-settings' == $hook) {
   wp_enqueue_script(MOOSE_CHAT_V2_BACKEND_SCRIPT_ID);
  }
 });

add_action('wp_enqueue_scripts',

// Conditionally load JS on single post pages
 function () {

  wp_register_script(
   MOOSE_CHAT_V2_FRONTEND_SCRIPT_ID,
   MOOSE_CHAT_V2_URL . 'frontend/assets/dist/js/frontend.min.js',
   [],
   time()
  );

  $current_user = wp_get_current_user();
  // $current_user_name  = $current_user->user_firstname . $current_user->user_lastname;
  // // $current_user_email = $current_user->user_email;
  // $current_user_name = $current_user->user_email;

  // wp_localize_script(, 'mooseData', array(
  //  'root_url'          => get_site_url(),
  //  'ajax_url'          => admin_url('admin-ajax.php'),
  //  'nonce'             => wp_create_nonce('wp_rest'),
  //  'currentWPUserName' => $current_user_name
  //   'currentWPUserEmail' => $current_user_email
  // ));

  // CHECKING IF CURRENT USER IS A SUBSCRIBER ONLY
  if (in_array('subscriber', $current_user->roles)) {

   $current_user_email     = $current_user->user_email;
   $current_user_firstname = $current_user->user_firstname;
   $current_user_lastname  = $current_user->user_lastname;
  }

  wp_localize_script(MOOSE_CHAT_V2_FRONTEND_SCRIPT_ID, 'mooseData', array(
   'root_url'               => get_site_url(),
   'ajax_url'               => admin_url('admin-ajax.php'),
   'nonce'                  => wp_create_nonce('wp_rest'),
   'currentWPUserEmail'     => $current_user_email,
   'currentWPUserFirstName' => $current_user_firstname,
   'currentWPUserLastName'  => $current_user_lastname
  ));

  /* THIS SCRIPT ONLY LOADS ON WP FRONTEND FOR SINGLE BLOG POST OR CPT SINGLE ONLY */
  if (!is_single()) {
   wp_enqueue_script(MOOSE_CHAT_V2_FRONTEND_SCRIPT_ID);
  }
 }, 100);