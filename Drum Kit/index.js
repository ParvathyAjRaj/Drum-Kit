let username = localStorage.getItem("name")

if(username){
    alert(`welcome back ${username}`);
} else{
    localStorage.setItem("name", "paaru")
}

// Giving switch case statements for getting audio track
function check(value){
    switch(value){
        case "w": 
            var audio_name = "sounds/tom-1.mp3";
            return audio_name;
        case "a":
            var audio_name = "sounds/tom-2.mp3";
            return audio_name;
           
        case "s":
            var audio_name = "sounds/tom-3.mp3";
            return audio_name;
           
        case "d":
            var audio_name = "sounds/tom-4.mp3";
            return audio_name;
           
        case "j":
            var audio_name = "sounds/snare.mp3";
            return audio_name;
            
        case "k":
            var audio_name = "sounds/crash.mp3";
            return audio_name;
            
        case "l":
            var audio_name = "sounds/kick-bass.mp3";
            return audio_name;
            
        default :
            console.log(value);
    }
}

// Function to play music
function play_audio(audio_name){
     // create audio object to play
     var audio = new Audio(audio_name);
     audio.play();
}

// Checking the clicking inputs
for (var i = 0; i< document.querySelectorAll(".drum").length ; i++){ 
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
        //Here we have given ears to each of the drums.
        //Now we want the particular ear to hear(play audio) when its clicked 
        // Consider each drums
        var drum_name = this.innerText;
        var audio_name = check(drum_name);
        play_audio(audio_name);
        animation(drum_name);
    }); 
}

// Checking keyboard entries
document.addEventListener("keydown",function(event){
    var audio_name = check(event.key);
    play_audio(audio_name);
    animation(event.key);
});

// Animation to the pressed key
function animation(value){
    document.querySelector("."+value).classList.add("pressed");
    // setTimeout(function to be executed , wait time in millisec)
    setTimeout(function (){
        document.querySelector("."+value).classList.remove("pressed");
    },100);
}