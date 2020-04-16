
class Myconsole{
	
  constructor(argument) {
    this.argument = argument;
	//this.status=status;
   }
  
 log(amount){
	 this.argument=amount;
     var argumentString='"'+this.argument+'"';
	 return argumentString;
 }
 history(...param1, ...param2){
	 //return option;
	 
 }
 clearHistory(){
	 
	 
 }
 
}
let myConsoleNew =new Myconsole(123);
let myConsoleNew1 =new Myconsole(true);
//let myConsoleNew2 =new Myconsole({name : Ram});
console.log(myConsoleNew.log(1234));
console.log(myConsoleNew1.log(true));
//console.log(myConsoleNew2.log({name : Ram}));
//console.log(myConsoleNew.history(1234));


