


//-------------------------> Write a sentence!
function title(a, b, c){
   document.write('<h1>Intr-o zi de ' + a + ' asteptam duios in bataia vantului sa se deschide usa, in spatele acesteia statea ' + 
   	b + ' care mi-a cerut sa ' + c + '</h1>');
 }

 function write(e) {
	document.write("<h1>" + e + "</h1>");
}

//-------------------------> Random number generator!

 function randomNo(a){
 	return Math.floor(Math.random() * a) + 1;
 }


//-------------------------> Random number generator 2 parameters!

 function getRandom(lower, upper) {

	if(isNaN(lower) || isNaN(upper)){
		throw new Error('ce pula mea?');
	}

 return Math.floor(Math.random() * (upper - lower + 1)) + lower;

}

//-------------------------> Random color generator

function randomRgb(){
	return Math.floor(Math.random() * 256) + 1;
}
function randomColor() {
	var color = 'rgb(';
		color += randomRgb() + ',';
		color += randomRgb() + ',';
		color += randomRgb() + ')';
return color;
}

// for (var i = 0; i <= 100; i += 1 ) {
//   red = randomRgb();
// green = randomRgb();
// blue = randomRgb();
                                    
// rgbColor = randomColor();
// html += '<div style="background-color:' + rgbColor + '"></div>';
// print(html);
//    }

//----------------------------------> Print list function!

function printList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

//----------------------------->Print to div function!

function print(message) {
	 var outputDiv = document.getElementById('output');
	 outputDiv.innerHTML = message;
}


//----------------------> Do while loops!

do {
	guess = prompt('Tasteaza un numar intre 1 si 10!');
	counter += 1;

	if(parseInt(guess) === randomNo){
		correctGuess = true
	}

} while(!correctGuess)


//-----------------------> for loops! with arrays of objects!!!!!!!!

for(var i = 0; i < questions.length; i++){
question = questions[i].intrebare;
  answer = questions[i].raspuns;
  response = prompt(question).toLowerCase();
  
  if(response === answer){
  correctAnswer += 1;
  correct.push(question);
  } else {
  wrongAnswer += 1;
  wrong.push(question)
  }
}

//---------------------------------->search function!
function search(){while(true){
	search = prompt('Comands: quit, list, name of product;');
	if(search.toLowerCase() === 'quit'){
		break
	} else if(search.toLowerCase() === 'list'){ 
		// printList(groceryStore);
		print(groceryStore.join(', '))
	} else {
     
     if(groceryStore.indexOf(search.toLowerCase()) > -1 ){
     	print('<div style="width: 200px; float:left;">Da avem ' + search + '</div>');
     } else {
     	print('<div style="width: 200px; float:left;">Nu avem ' + search + '</div>');
     }

	}
}};


// function searchProgram(){
// search = prompt('Please search for an item');
// if (search === groceryStore.indexOf())
// }
