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

      $('li.pager-item a').once().bind('click', function (e) {
        e.preventDefault();

        var search_term = Drupal.settings.media_unsplash.term;
        var unsplash_page = $(this).attr('data-page');

        $.ajax({
          url: Drupal.settings.basePath + 'callback/unsplash/' + unsplash_page + '/' + search_term,
          method: 'GET',
          data: {},
          dataType: 'html',
          success: function (data) {
            $('#unsplash-output').html(data);
          }
        });

      });

    }
  };
}(jQuery));
