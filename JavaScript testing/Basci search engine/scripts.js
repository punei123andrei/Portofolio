//Intr-o zi de [] asteptam duios in bataia vantuluisa mi se deschida usa, in spatele acesteia statea [] care mi-a cerut []


// function title(a, b, c){
//   document.write('<h1>Intr-o zi de ' + a + ' asteptam duios in bataia vantului sa se deschide usa, in spatele acesteia statea ' + 
//   	b + ' care mi-a cerut sa ' + c + '</h1>');
// }
// var question = 3;
// var questionsLeft = '[' + question + ' questions left]';
// var ziSaptamana = prompt('Spune o zi a saptamanii ' + questionsLeft);
// question -= 1;
// var questionsLeft = '[' + question + ' questions left]';
// var nume = prompt('Cum te numesti? ' + questionsLeft);
// question -= 1;
// var questionsLeft = '[' + question + ' questions left]';
// var verb = prompt('Spune un verb! ' + questionsLeft);
// title(ziSaptamana, nume, verb);


// var randomNo = Math.floor(Math.random() * 6) + 1;
// var raspuns = parseInt(prompt('Ma gandesc la un numar de la 1 la 6 care e acela?'));

// if (randomNo === raspuns){
// 	document.write('<h1>Hey ai ghicit!</h1>')
// } else {
// 	document.write('<h1>Mai incearca!</h1>')
// }


// var lowerNo = prompt('input');
// var upperNo = prompt('input');


// function getRandom(lower, upper) {

// 	if(isNaN(lower) || isNaN(upper)){
// 		throw new Error('ce pula mea?');
// 	}

//  return Math.floor(Math.random() * (upper - lower + 1)) + lower;

// }

// document.write(getRandom('mam nascut' ,15 ));


// var promptIt;
// var functionRo = getRandomNo(promptIt);
// var attempts = 0;

// function getRandomNo(){
// 	return Math.floor(Math.random() * 4) + 1;
// }

// while (promptIt !== functionRo){
// 	promptIt = prompt("Ce mai faci?");
// 	promptIt = getRandomNo();
// 	attempts += 1;
// }

// document.write("The random number was " + functionRo);
// document.write(" You have attempted " +  attempts + " times!");




// function write(e) {
// 	document.write("<h1>" + e + "</h1>");
// }

// var randomNo = random(10);
// var guess;
// var counter = 0;
// var correctGuess;


// function write(e) {
// 	document.write("<h1>" + e + "</h1>");
// }

// function random(e){
// 	var num = Math.floor(Math.random() * e) + 1;
// 	return num
// }

// do {
// 	guess = prompt('Tasteaza un numar intre 1 si 10!');
// 	counter += 1;

// 	if(parseInt(guess) === randomNo){
// 		correctGuess = true
// 	}

// } while(!correctGuess)

// write("You guessed the number");
// var tries = "You have tried " + counter + " times";
// write(tries);


//For loops



// for(var i = 1; i <= 73; i++){
// 	document.write("<div>" + i + "</div>")
// }

// var html = '';
// var rgbColor;
// function randomRgb(){
// 	return Math.floor(Math.random() * 256) + 1;
// }
// function randomColor() {
// 	var color = 'rgb(';
// 		color += randomRgb() + ',';
// 		color += randomRgb() + ',';
// 		color += randomRgb() + ')';
// return color;
// }
// function print(message){
// 	document.write(message);
// }
// for (var i = 0; i <= 100; i += 1 ) {
//   red = randomRgb();
// green = randomRgb();
// blue = randomRgb();
                                    
// rgbColor = randomColor();
// html += '<div style="background-color:' + rgbColor + '"></div>';
// print(html);
//    }

var shopping = ['laptop', 'tableta', 'iphone', 'DSLR'];

shopping.unshift('terminator', 'psg');
shopping.push('uscator', 'playstation');

// for(var i = 0; i < shopping.length; i++){
// 	console.log(shopping[i]);
// }


/*
Usetfull functions --------------------------->
*/

// var playList = ['Marvel', 'Scite', 'Grunding', 'Mellbrow'];

// playList.push('I did it my way');
// playList.push('Victorious push');
// playList.unshift('Burn them');

// //----------------------------------------->

// var firstSong = playList.shift(); //removes an item from the beggining of the array
// var lastSong = playList.pop(); // removes an item from the end of a an array

// console.log(firstSong);
// console.log(lastSong);

// //------------------------------------------>


// var playString = playList.join(', ')
// print(playString);

// var newSongs = ['Heydan', 'Moralbrow', 'Crowfunding']
// var allSongs = playList.concat(newSongs); // combines arrays
// var position = newSongs.indexOf('Moralbrow');
// console.log(position);


// function printList( list ) {
//   var listHTML = '<ol>';
//   for (var i = 0; i < list.length; i += 1) {
//     listHTML += '<li>' + list[i] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// function print(html) {
//   document.write(html);
// }

// printList(playList);

// Search engine
//----------------------------------->


// var groceryStore = ['mere', 'banane', 'chivi', 'pepene', 'gutui']
// var search;

// while(true){
// 	search = prompt('Comands: quit, list, name of product;');
// 	if(search.toLowerCase() === 'quit'){
// 		break
// 	} else if(search.toLowerCase() === 'list'){ 
// 		// printList(groceryStore);
// 		print(groceryStore.join(', '))
// 	} else {
     
//      if(groceryStore.indexOf(search.toLowerCase()) > -1 ){
//      	print('<div style="width: 200px; float:left;">Da avem ' + search + '</div>');
//      } else {
//      	print('<div style="width: 200px; float:left;">Nu avem ' + search + '</div>');
//      }

// 	}
// }

// function searchProgram(){
// search = prompt('Please search for an item');
// if (search === groceryStore.indexOf())
// }


//---------------------> Automatic search in arrays

// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// // [0, 2, 4]


//---------------------> Two dimensional arrays

// var playList = [ 
// ['Don\'t cry ', ' Michel Jackson'],
// ['Mixed up', 'Cindy Crowford'],
// ['Candy bon', 'Fifty Miles']
// ];



// function print(html) {
//   document.write(html);
// }

// function print(message) {
// 	 var outputDiv = document.getElementById('output');
// 	 outputDiv.innerHTML = message;
// }

// printSongs(playList);



//----------> Two dimensional Arrays question game


// var questions = [
// ['De cine a fost facut tankul?', 'porche'],
// ['Cine a castigat al doilea razboi mondial', 'rusia'],
// ['Cine a descoperit America', 'cristofor columb'],
// ['Care este cel mai mare sport international', 'fotbal']
// ];

// var correctAnswer = 0;
// var wrongAnswer = 0;

// var question;
// var answer;
// var response;
// var correct = [];
// var wrong = [];


 

// function print(message) {
//  	 var outputDiv = document.getElementById('output');
//  	 outputDiv.innerHTML = message;
//  }

// function listOfAnswers(arr) {
//  var listHtml = '<ol>';
//   for(var i = 0; i < arr.length; i++){
//   listHtml += '<li>' + arr[i] + '</li>';
//   }
//   listHtml += '</ol>';
//   return listHtml;
// }


// function printSongs( list ) {
//   var listHTML = '<ol>';
//   for (var i = 0; i < list.length; i += 1) {
//     listHTML += '<li>' + list[i][0] + ' by ' + list[i][1] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// for(var i = 0; i < questions.length; i++){
// question = questions[i][0];
//   answer = questions[i][1];
//   response = prompt(question).toLowerCase();
  
//   if(response === answer){
//   correctAnswer += 1;
//   correct.push(question);
//   } else {
//   wrongAnswer += 1;
//   wrong.push(question)
//   }
// }

// function searchProgram(){
// search = prompt('Please search for an item');
// if (search === groceryStore.indexOf())
// }

// function randomColor() {
// 	var color = 'rgb(';
// 		color += randomRgb() + ',';
// 		color += randomRgb() + ',';
// 		color += randomRgb() + ')';
// return color;
// }

// function print(message){
// 	document.write(message);
// }

// for (var i = 0; i <= 100; i += 1 ) {
//   red = randomRgb();
// green = randomRgb();
// blue = randomRgb();
                                    
// rgbColor = randomColor();
// html += '<div style="background-color:' + rgbColor + '"></div>';
// print(html);
//    }






//--------------> Objects

// var student = {
// 	nume: 'Andrei',
// 	nationalitate: 'Romana',
// 	varsta: 27,
// 	student: true,
// 	skills: ['HTML5', ' CSS3', ' Javascript']
// };


// student.nume = [
// ['Stefan', 'Marian', 'Ionita'],
// ['Bianca', 'Maria', 'Cleopatra']
// ];



// var message = '<h3>Hi, my name is ' + student.nume[0][1] + '</h3>';
// message += '<h3>And my nationality is ' + student.nationalitate + '</h3>';
// student.nationalitate = 'American';
// message += '<h3>I wish I could be ' + student.nationalitate + '</h3>';
// message += '<h3>My age is ' + student.varsta + '</h3>';
// student.varsta += 20;
// message += '<h3>I can\'t imagine how I would look like at ' + student.varsta + '</h3>';
// message += '<h3>So far I have only ' + student.skills.length + ' skills</h3>';
// message += '<h3>Am un prieten care il chiama ' + student.skills.join(', ') + '</h3>';
// print(message);

// for(var prop in student){
// console.log(prop, ': ', student[prop]);

// }


// var questions = [
// { intrebare: 'De cine a fost facut tankul?', 
//   raspuns: 'porche'},
// {  intrebare: 'Cine a castigat al doilea razboi mondial',
//   raspuns: 'rusia'},
// { intrebare:'Cine a descoperit America',
//   raspuns: 'cristofor columb'},
// { intrebare: 'Care este cel mai mare sport international',
//   raspuns: 'fotbal'}
// ];


// for(var i = 0; i < questions.length; i++){
// question = questions[i].intrebare;
//   answer = questions[i].raspuns;
//   response = prompt(question).toLowerCase();
  
//   if(response === answer){
//   correctAnswer += 1;
//   correct.push(question);
//   } else {
//   wrongAnswer += 1;
//   wrong.push(question)
//   }
// }


// var html = '<h1>Ai raspuns la ' + correctAnswer + ' intrebari corect</h1>';
// html +=  '<h2>Ai raspuns la urmatoarele intrebari correct: </h2>';
// html +=  listOfAnswers(correct);
// html += '<h2>Ai raspuns la urmatoarele intrebari gresit: </h2>';
// html += listOfAnswers(wrong);

// print(html);


//------------------------> Search for student Objects







var message = '';
var student;
var search;

function print(message) {
   var outputDiv = document.getElementById('output');
   outputDiv.innerHTML = message;
}

function getStudentReport(student){
var report = '<h2>Student: ' +  student.name + '</h2>'; 
report += '<p>Track: ' +  student.track + '</p>'; 
report += '<p>Achievements: ' +  student.achievements + '</p>'; 
report += '<p>Points: ' +  student.points + '</p>'; 
report += '<p>Langauges: ' +  student.langauges + '</p>';
return report;
}

// for(var i = 0; i < students.length; i++){ 
// student = students[i];
// message += '<h2>Student: ' +  student.name + '</h2>'; 
// message += '<p>Track: ' +  student.track + '</p>'; 
// message += '<p>Achievements: ' +  student.achievements + '</p>'; 
// message += '<p>Points: ' +  student.points + '</p>'; 
// message += '<p>Langauges: ' +  student.langauges + '</p>'; 

// }
// print(message);

while(true){
  search = prompt('Pelase search for a student by typyng the name or type quit to quit the search!');
  if(search === null || search.toLowerCase() === 'quit' ){
    break
  } else if (search.toLowerCase() === 'list' ){
    for(var i = 0; i < students.length; i++){ 
student = students[i];
message += '<h2>Student: ' +  student.name + '</h2>'; 
message += '<p>Track: ' +  student.track + '</p>'; 
message += '<p>Achievements: ' +  student.achievements + '</p>'; 
message += '<p>Points: ' +  student.points + '</p>'; 
message += '<p>Langauges: ' +  student.langauges + '</p>'; 

}
print(message);
  }

for(var i = 0; i < students.length; i++){ 
student = students[i];
if (student.name === search) {
  message = getStudentReport(student);
  print(message);
}
}

}

// function getStudentReport(student){
// var report = '<h2>Student: ' +  student.name + '</h2>'; 
// report += '<p>Track: ' +  student.track + '</p>'; 
// report += '<p>Achievements: ' +  student.achievements + '</p>'; 
// report += '<p>Points: ' +  student.points + '</p>'; 
// report += '<p>Langauges: ' +  student.langauges + '</p>';
// return report;
// }