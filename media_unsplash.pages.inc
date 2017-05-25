<?php

/**
 * @file
 * Provides definition for unsplash media pages.
 */

/**
 * Return search results as html. Use in ajax fetching.
 *
 * @param int $page
 *   Request page of results.
 * @param string $search_term
 *   String upon which we call unsplash api.
 */
function media_unsplash_ajax_content($page, $search_term) {

  // Receive content.
  $content = media_unsplash_search($search_term, $page);

  $output = theme('media_unsplash_list', array(
    'content' => $content,
    'page' => $page,
  ));

  // Print content + JS.
  print drupal_get_js() . $output;

  exit;
}
