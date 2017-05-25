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

      // Pager for media browser
      $('div#unsplash-output ul.pager li a').once().bind('click', function (e) {
        e.preventDefault();

        var search_term = Drupal.settings.media_unsplash.term;

        var page_number = media_unsplash_parse_url('page', $(this).attr('href'));

        var unsplash_page = parseInt(page_number);

        $.ajax({
          url: Drupal.settings.basePath + 'callback/unsplash/?page=' + unsplash_page + '&term=' + search_term,
          method: 'GET',
          data: {},
          dataType: 'html',
          success: function (data) {
            $('#unsplash-output').html(data);
          }
        });

        $('html, body').animate({
          scrollTop: $('#unsplash-output').offset().top
        }, 0);

      });

    }
  };
}(jQuery));

function media_unsplash_parse_url(field, url) {
  'use strict';
  var href = url ? url : window.location.href;
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
  var string = reg.exec(href);
  return string ? string[1] : null;
}
