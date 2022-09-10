<?php
 /*
 PROPERTY LIST DISPLAY SHORTCODE
  */

 // If this file is called directly, abort.
 if (!defined('WPINC')) {
  die;
 }

 /**
  *
  * Adding Custom Shortcode for Property or any CPT list
  *
  */

 function show_moose_chat_v2($atts)
 {
  // $current_user = wp_get_current_user();
  // echo '<pre>';
  // print_r($current_user);
  // echo '</pre>';

  $atts = shortcode_atts(

   array(

    // ANY VARIABLE TO BE USED IN THE SHORTCODE AS AN ATTRIBUTE & CAN BE SHOWN ON THE PAGE
    'any_var_1' => 'text or variable as value',
    'any_var_2' => 'text or variable as value'

   ),

   $atts
  );

  extract($atts);

  ob_start(); // OUTPUT BUFFERING

 ?>

<main class="MOOSE-CHAT-SHORTCODE">

  <?php
   include plugin_dir_path(__FILE__) . 'views/moose-chat-v1-view.php';
   ?>

</main>


<?php

  $module_contents = ob_get_contents();

  ob_end_clean();

  return $module_contents;
 }

add_shortcode('moose_chat_v2', 'show_moose_chat_v2');