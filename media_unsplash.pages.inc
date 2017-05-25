<?php

/**
 * @file
 * Provides definition for unsplash media pages.
 */

/**
 * Return search results as html. Use in ajax fetching.
 */
function media_unsplash_ajax_content() {

  $output = t('Response was not initialized');

  $param = drupal_get_query_parameters();

  // Let's take a minute to prey.
  $_GET['q'] = 'callback/unsplash';

  if (!empty($param)) {
    if (isset($param['term'])) {
      $search_term = $param['term'];

      $page = 1;

      if (isset($param['page'])) {
        $page = $param['page'] + 1;
      }

      // Receive content.
      $content = media_unsplash_search($search_term, $page);

      $pager = '';

      if (is_array($content)) {
        $total = intval($content['total']);
        $pager = media_unsplash_render_pager($total);
      }

      $output = theme('media_unsplash_list', array(
        'content' => $content,
        'pager' => $pager,
      ));
    }
  }

  // Print content + JS.
  print drupal_get_js() . $output;

  exit;
}
