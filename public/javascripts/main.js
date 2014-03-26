//
jQuery(document).ready(function($) {

    $('.btnCommentSubmit').on('click', function (event) {
        event.preventDefault();

        var path = $(this).closest('form').attr('action');
        var comment = $('textarea[name="comment"]');

        if ( !comment.val() ) {
            return false;
        }

        $.ajax({
            url: path,
            type: 'PUT',
            dataType: 'json',
            data: {
                comment: comment.val()
            },
        })
        .done(function() {
            window.location.reload();
        })
        .fail(function() {
            console.log("error");
        });
    });

});
