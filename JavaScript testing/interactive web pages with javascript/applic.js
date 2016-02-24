//Problem: User interaction doesn't provide desired tasks
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task'); 
var addButton = document.getElementsByTagName('button')[0]; //first-button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //ul id incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks

//New task List item
var createNewTaskElement = function(taskString){

  //Create list item
  var listItem = document.createElement("li");
      //input checkbox
  var checkbox = document.createElement("input");    
      //label in completeTasks
  var label =document.createElement("label");    
      //input (text) 
  var editInput = document.createElement("input");    
      //button.edit
  var editButton = document.createElement("button");    
      //button.delete
  var deleteButton = document.createElement("button");    

      //Elements need modified

      checkbox.type = "checkbox";
      editInput.type = "text";

      editButton.innerText = "Edit";
      editButton.className = "edit";
      deleteButton.innerText = "Delete";
      deleteButton.className = "delete";

      label.innerText = taskString; 

      //Each element needs appending
listItem.appendChild(checkbox);
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);
      return listItem;
}

//Add a new task
var addTask = function() {
     
    //Create a new list item from the text from the #newTask
    var listItem = createNewTaskElement(taskInput.value);
      
      //Append listItem to the incompleteTaskHolder
      incompleteTasksHolder.appendChild(listItem);

      bindTaskEvents(listItem, taskCompleted);

taskInput.value = "";
}


//Edit an existing task
var editTask = function() {
 

 var listItem = this.parentNode;
 var editInput = listItem.querySelector("input[type=text]");
 var label = listItem.querySelector("label");
 var containsClass = listItem.classList.contains("editMode");
        //if the class of the parent is .editMode
        if(containsClass)  {
             //switch from editMode
             //label text becomes the input value
             label.innerText = editInput.value;
        } else {
        
            //switch to editMode
            //input becomes labels text
            editInput.value = label.innerText;
            
          }

          //Toggle editMode on the parrent
          listItem.classList.toggle("editMode");
}


//Delete an existing task
var deleteTask = function() {

 var listItem = this.parentNode;
 var ul = listItem.parentNode;

  //we want to remove the parent list item
  ul.removeChild(listItem);

}


//Mark a task as complete
var taskCompleted = function() {
  
  //append task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(this.parentNode);
  bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
  
  //Append the complete task to the #completed-task
    var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(this.parentNode);
  bindTaskEvents(listItem, taskCompleted);
}


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  

  //select its children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to the the delete button
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
  console.log("Ajax request");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


//cycle over incompleteTasksHolder ul li 
for(var i = 0; i < incompleteTasksHolder.children.length; i++){
 
     //Bind events to list items children (taskCompleted)
     bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completeTasksHolder ul li
for(var i = 0; i < completedTasksHolder.children.length; i++){
      //Bind events to list items children (taskIncompleted)
bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
