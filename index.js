function shout(string){
    return "hello".toUpperCase()
}
function whisper(string){
    return "HELLO".toLowerCase()
}
function logShout(string){
    console.log("HELLO");
}
function logWhisper(string){
    console.log("hello")
}
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
      const lowerCase = string.toLowerCase();
      return ("I can\'t hear you!");
    }
    else if (string === string.toUpperCase()){
      const upperCase ="YES INDEED!";
      return ("YES INDEED!");
      }
      else{
        const string  = "let's have dinner ";
        return("I would love to!");
      }
    }


 