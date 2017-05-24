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
<?php if (is_array($images)): ?>
  <?php foreach ($images as $key => $img): ?>
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
<?php else: ?>
  <?php print $images; ?>
<?php endif; ?>
</div>
