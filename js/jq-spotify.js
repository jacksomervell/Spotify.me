$(document).ready(function() {
  
  var getMusicButton = $('#search-button')
  
  var searchQuery =  $('#searcher')
  var searchType =  $('#select-type')
  var results = $(".results");

  getMusicButton.on('click', getMusic);

  function getMusic(e) {
    $.get('https://api.spotify.com/v1/search?q=' + searchQuery.val() + '&type=' + searchType.val(), function(response){
      results.empty()
    
      var alteredType = searchType.val() + "s"

      $.each(response[alteredType].items, function(index, alteredType) {
            var result = $("<div class = 'results'>" + alteredType.name + "</div>");
            results.append(result);
          });
        })
      }
    });
