jQuery(function ($) { // Document Ready (important!)

  // Listen for the ready event for any vimeo video players on the page
  var vimeoPlayers = document.querySelectorAll('iframe'),
    player;

  for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
    player = vimeoPlayers[i];
    $f(player).addEvent('ready', ready);
  }

  /**
   * Utility function for adding an event. Handles the inconsistencies
   * between the W3C method for adding events (addEventListener) and
   * IE's (attachEvent).
   */
  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false);
    }
    else {
      element.attachEvent(eventName, callback, false);
    }
  }

  /**
   * Called once a vimeo player is loaded and ready to receive
   * commands. You can add events and make api calls only after this
   * function has been called.
   */
  function ready(player_id) {
    // Keep a reference to Froogaloop for this player
    var container = document.getElementById(player_id).parentNode.parentNode,
      froogaloop = $f(player_id),
      apiConsole = container.querySelector('.console .output');
  }

  // Activate the .timecode links in chapter navigation
  $('body').delegate('.timecode', 'click', function (e) {
    // Was this bound to a null link? Prevent the default in case
    e.preventDefault();
    // Get the location value from the HTML5 data parameter
    var seekVal = $(this).attr('data-seek');
    var thisID = $(this).attr('data-id');
    // Using Froogaloop, trigger the SeekTo method using the captured value
    $f(thisID).api('seekTo', seekVal);
  });

});