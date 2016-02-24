//It doesn't addapt in small devices
//Solution: hide text links and swap them with more apropriate navigation


//On small screens add a select box
var $select = $("<select></select>");
$("#menu").append($select);


   //Cycle over each list items links
   $("#menu a").each(function(){
    var $anchor = $(this);

    //Create an option
    var $option = $("<option></option>");

     //Change the selected text
    if($anchor.parent().hasClass("selected")){
       $option.prop("selected", true);
    }

   //option's value is the href
    $option.val($anchor.attr("href"));

   //option text is the text of links
    $option.text($anchor.text());

   //append the option to the select menu
    $select.append($option);

    //folow the select value on change
    $select.change(function(){
     window.location = $select.val();
     });

   });
   

//Create button to click to select location
var $button = $("<button>Go!</button>");
$("#menu").append($button);

     //Bind click to button
     $button.click(function(){
      window.location = $select.val();
     });
     

//Modify css on small resolution
//Modify css to hide links and buttons on small resolution

//Add class selected to the selected link