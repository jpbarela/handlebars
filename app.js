

// $.get('http://daretoexplore.herokuapp.com/books', renderBookData )
window.onload = function(){
var source = $('#books-template').html();
var template = Handlebars.compile(source);

	var $results = $("#results")

function renderBookData(data) {
  console.log(data);

  // ...
  // pass in data to render in the template
  var trackHtml = template({ book: data });

	$results.append(trackHtml);
}

	$.get('http://daretoexplore.herokuapp.com/books', renderBookData)
}
