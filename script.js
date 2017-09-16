$(document).ready(function(){
$('#random').on('click',function(){
window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
})
$('#sumbit').on('click',function(){
var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+$('#sent').val()+"&format=json&callback=wikiCallbackFunction";

            $.ajax(wikiUrl, {
                dataType: "jsonp",
                success: function( wikiResponse ) {
                    for(var i =0;i<wikiResponse[1].length;i++){
                    $('.main').append("<a target='_blank' href="+wikiResponse[3][i]+"><div class='item' >"+wikiResponse[1][i]+"<br>"+wikiResponse[2][i]+"</div></a>");
                    }
                }
            });
});

            });
