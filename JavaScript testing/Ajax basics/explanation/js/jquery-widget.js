$(document).ready(function(){

  var url = "../data/employees.json";
  
  $.getJSON(url, function(response){
    var statusHTML = '<ul class="bulleted">';
    
    $.each(response  ,function(index, employee){
      
    if (employee.inoffice === true) {
    statusHTML += '<li class="in">';
    } else {statusHTML += '<li class="out">';}
      statusHTML += employee.name + '</li>';
    
     }); // end Each --- for loop
  
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
    
   }); // end getJSON 
  
}); // end ready