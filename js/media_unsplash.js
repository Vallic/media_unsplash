(function ($) {
  'use strict';
  Drupal.behaviors.media_unsplash = {
    attach: function (context, settings) {

      // Hide next button.
      $('form#media-unsplash-external .form-actions .form-submit').hide();

      $('img.unsplash').once().bind('click', function (e) {
        var unsplash_url = $(this).attr('data-image');

        $('input[name="unsplash_code"]').val(unsplash_url);

        // Autosubmit form.
        $('#media-unsplash-external').submit();
      });
    }
  };
}(jQuery));
