$(document).ready(function() {
  $("#form_thing").submit(function(event){
    event.preventDefault();
    $.post( "/grandma",$("#form_thing").serialize(), function(response){
      $("#grandma_says").html(response);
       });
    });
});
