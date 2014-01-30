###Describing an AJAX call
Here is some AJAX code
```
$(document).ready(function() {
  $("#form_thing").submit(function(event){
    event.preventDefault();
    $.post( "/grandma",$("#form_thing").serialize(), function(response){
      $("#grandma_says").html(response);
       });
    });
});
```

Lets try to describe it:
- We need to tell **where** the action has to take place.
`$(document).ready(function() {`
- We need to tell **when**  the action has to take place.

- We need to tell **what** action has to take place.
$.post( "/grandma",$("form").serialize(), function(response){
- We need to tell **where** the action will be **applied**
`$("#grandma_says").html(response);`
- Also we need to tell the elemants not to behave like usual.
`event.preventDefault();`
