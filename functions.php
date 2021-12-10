<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );

// END ENQUEUE PARENT ACTION

//----------------------CUSTOM PHP - MANTZIUS ------------------------------------------

// ADD COSTUM JS
/**
 * Enqueue a script with jQuery as a dependency.
 */
function wpdocs_scripts_method() {
    wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/min-js.js', array(), true, true );
}
add_action( 'wp_enqueue_scripts', 'wpdocs_scripts_method' );



