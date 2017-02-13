$(document).ready(function(){
  // Generate random article and redirect to page
  /*$("#random-btn").click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });*/
  
  $("#search-btn").click(function(){
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + $("#search").val();
    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data) {
        var res = data.query.pages;
        var html = "";        
        $.each(res, function(k, v) {
          html += '<a href="' + "https://en.wikipedia.org/?curid=" + v.pageid + '"target="_blank"><article class="article">'
            + '<header><h2>&#x2022; ' + v.title + '</h2><header>'
            + '<p class="extract">'+ v.extract + '</p>'            
            + '</article></a>';          
        });        
        $('.results').append(html);
        $('.results').show();
      },
      error: function(err) {
        alert(err);
      }
    });
  });
});