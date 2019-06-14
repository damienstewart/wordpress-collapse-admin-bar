<?php
/*
Plugin Name: Collapse Admin Bar
Plugin URI:  http://damienstewart.me/
Description: Allows you to show and hide the admin menu bar from the front end of the website
Version:     1.0
Author:      Damien Stewart
Author URI:  http://damienstewart.me/
License:     GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.en.html
*/
function collapse_admin_bar_script() {   
    wp_enqueue_script( 'collapse_admin_bar_js', plugin_dir_url( __FILE__ ) . 'js/main.js' );
}
add_action('wp_enqueue_scripts', 'collapse_admin_bar_script', 99999);