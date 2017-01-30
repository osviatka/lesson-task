/**
 * Created by Oleg on 1/9/2017.
 */


$(function ($) {
    var table = $('#example').DataTable();

    $('#i3').on( 'click', function () {
        table.page.len( 3 ).draw();
    } );

    $('#i6').on( 'click', function () {
        table.page.len( 6 ).draw();
    } );
    $('#i9').on( 'click', function () {
        table.page.len( 9 ).draw();
    } );
});