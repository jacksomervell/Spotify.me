$(document).ready(function() {
  
  var getMusicButton = $('#search-button')
  
  var searchQuery =  $('#searcher')
  var searchType =  $('#select-type')

  getMusicButton.on('click', getMusic);

  function getMusic(e) {
    $.get('https://api.spotify.com/v1/search?q=' + searchQuery.val() + '&type=' + searchType.val(), function(response){
      console.log(response)
    }
  )}
    

});