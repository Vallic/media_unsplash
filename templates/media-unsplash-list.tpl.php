<?php

/**
 * @file
 * Default theme implementation for displaying thumbnails.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>

<div class="media-list-thumbnails">
<?php if (is_array($content)): ?>
  <?php foreach ($content['images'] as $key => $img): ?>
    <li>
      <div class="media-item">
        <div class="media-thumbnail">
          <img class="unsplash"
               data-image="<?php print $img['download']; ?>"
               src="<?php print $img['thumb']; ?>"/>
          <div class="label-wrapper">
            <?php print $img['link']; ?>
          </div>
        </div>
      </div>
    </li>
  <?php endforeach; ?>

  <?php if ($content['pages'] > 1): ?>
  <ul id="pager">
    <?php for ($x = 1; $x <= $content['pages']; $x++): ?>
      <li class="pager-item">
        <a href="#" data-page="<?php print $x; ?>" class="<?php print ($x == $page ? 'active' : 'normal'); ?>"><?php print $x; ?></a>
      </li>
    <?php endfor; ?>
  </ul>
  <?php endif; ?>

<?php else: ?>
  <?php print $content; ?>
<?php endif; ?>
</div>
