var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';q
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

var roomReqeust = new XMLHttpRequest();
roomReqeust.onreadystatechange = function () {
  
  if(roomReqeust.readyState === 4 && roomReqeust.status === 200) {
    
    var rooms = JSON.parse(roomReqeust.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomReqeust.open('GET', '../data/rooms.json');
roomReqeust.send();

// Expliced jque content

// function sendAJAX() {
//     $('#ajax').load('sidebar.html');
//     $('#load').hide();
//   }
    
//     var url = '/employees.php';
//     var data = {
//     firstName: "Andrei",
//       lastName: "Punei"
//     };
//     var callback = function(response){
//     //do something with the call back
//     }
//     $.get(url, data, callback);