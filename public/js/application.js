// This is called after the document has loaded in its entirety
$(document).ready(function() {
// Bind a callback to be triggered when your form is submitted
  $("form").submit(function(event){
    // Prevent the form to be submitted from submitting in the default way
    event.preventDefault();
    // Use jQuery's AJAX API to make a POST request to the server
    $.post( "/grandma",
                        // Serialize the data in the form to be submitted
                        $("form").serialize(), function(response){
                                                                  // When the server responds, update the page accordingly (this is the asynchronous part — you don't know when the server will respond)
                                                                  $("#grandma_says").html(response);

    });


  });


});



  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()



// .submit()
// .serialize()
// jQuery.post()
// Read up on how to bind to events with jQuery if you need to.

// You'll need to do five things:




