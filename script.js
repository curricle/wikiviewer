$(document).ready(function() {
			
    function search(term) {
    
        let url = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&list=search&srsearch=" + term + "&format=json&callback=?";

        $.getJSON(url, function(data){
            let searchResults = data.query.search;
            let html = "<div id='showing-results'>Showing " + searchResults.length + " results for <span id='search-term'>" + term + "</span>:</div>"; 
            console.log(data.query);
            //create divs for each search result entry featuring article title and description
            $.each(searchResults, function(index, val){
                //console.log(data);
                html += "<a href=https://en.wikipedia.org/wiki/Special:Redirect/page/" + searchResults[index].pageid  + "><div class='search-item'>" + "<h2 class='search-item__title'>" + (index+1) + ". " + searchResults[index].title + "</h2><p class='search-item__description'>" + searchResults[index].snippet + "...</p></div></a>";
            });		
    
            //place search results into document html
            $(".results").html(html);
        });

    }

    // button click function
    $("#searchButton").on("click", function() {			
        //conduct search when button is clicked
        search(document.getElementById("searchBar").value);
    });
    
});