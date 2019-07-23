<?php
/*
Plugin Name: Collapse Admin Bar
Plugin URI: https://damienstewart.me/
Description: Allows you to collapse the admin bar on your websites front-end
Version: 1.1
Author: Damien Stewart
Author URI: https://damienstewart.me/
Text Domain: collapse-admin=bar
*/
function collapse_admin_bar() {   
    wp_enqueue_script( 'collapse_admin_bar_js', plugin_dir_url( __FILE__ ) . 'js/main.js' );
}
add_action('wp_enqueue_scripts', 'collapse_admin_bar', 99999);