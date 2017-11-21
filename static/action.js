$(document).ready( function() {
  
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 10,
    columnWidth: 180
  });

  $grid.on( 'click', '.sztaki', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante sztaki--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.studies', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante studies--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.praudit', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante praudit--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.prog_lang', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante prog_lang--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'layoutComplete', function( event, laidOutItems ) {
    console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
  });
  
});