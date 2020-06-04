
// selecting which audio file to play

  var myFiles = new Array("Audio/01.mp3", "Audio/02.mp3", "Audio/03.mp3", "Audio/04.mp3", "Audio/05.mp3", "Audio/06.mp3", "Audio/07.mp3", "Audio/08.mp3", "Audio/09.mp3"); 
  function getRandomSound() {
  var randomNum = Math.floor(Math.random() * myFiles.length); 
  document.getElementById('myaudio').src = myFiles[randomNum];
  console.log(document.getElementById('myaudio').src);
}

// pressing listen button plays audio file and changes button text to 'MUTE' 
function A(event) { 
  const track = document.getElementById('myaudio');
  track.play();
  document.getElementById('listeningnotes').innerHTML = "Please comment in the chat window of this PRS presentation and let me know: What thoughts or feelings arise in your listenings?"
  document.getElementById('thankyou').innerHTML = "Thanks for listening."
  document.getElementById('sound').innerHTML = "Mute";
  document.getElementById('sound').onclick = B;


}

function B() {

  var track = document.getElementById('myaudio');
  var secondtrack = document.getElementById('secondsound');
  var fadeout = setInterval (function() {
    if (track.volume >= 0.05) {
      track.volume -= 0.05;
    }
   if (track.volume <= 0.05) {
        track.volume = 0; 
         clearInterval(fadeout);
    }}, 50);

    var nextfadeout = setInterval (function() {
      if (secondtrack.volume >= 0.05) {
        secondtrack.volume -= 0.05;
      }
     if (secondtrack.volume <= 0.05) {
          secondtrack.volume = 0; 
           clearInterval(nextfadeout);
      }}, 50);

  document.getElementById('sound').innerHTML = "<i>Listen</i>";
  document.getElementById('sound').onclick = C;
  
}

//unmute audio file 
function C() {
  var track = document.getElementById('myaudio');
  var secondtrack = document.getElementById('secondsound');

  var fadein = setInterval (function() {
    if (track.volume <= 0.95) {
      track.volume += 0.05;
    }
   if (track.volume >= 0.95) {
        track.volume = 1; 
         clearInterval(fadein);
    }}, 100);

    var nextfadein = setInterval (function() {
      if (secondtrack.volume <= 0.95) {
        secondtrack.volume += 0.05;
      }
     if (secondtrack.volume >= 0.95) {
      secondtrack.volume = 1; 
           clearInterval(nextfadein);
      }}, 100);

  document.getElementById('sound').innerHTML = "Mute";
  document.getElementById('sound').onclick = B;
}

// choose second audio file 

function D() {
  var myFiles = new Array("Audio/01.mp3", "Audio/02.mp3", "Audio/03.mp3", "Audio/04.mp3", "Audio/05.mp3", "Audio/06.mp3", "Audio/07.mp3", "Audio/08.mp3", "Audio/09.mp3"); 
  var randomNum = Math.floor(Math.random() * myFiles.length); 
  document.getElementById('secondsound').src = myFiles[randomNum];
  console.log(document.getElementById('secondsound').src);
  var ogSound = document.getElementById('myaudio');
  ogSound.addEventListener("playing", checkEnding);
  }

  // play second audio file 

  function checkEnding () {
    var ogSound = document.getElementById('myaudio');
    var newSound = document.getElementById('secondsound');
    var time = setTimeout(checkEnding,1000);
    if (ogSound.duration - ogSound.currentTime > 30) {
      console.log(ogSound.duration - ogSound.currentTime);
    } else {
      newSound.play();
      // console.log("playing second sound"); 
      clearInterval(time);
      
    }
    newSound.addEventListener("playing", switchSound);
  }

  // choose and play third audio file 
  function switchSound () {
    var newSound = document.getElementById('secondsound');
    var ogSound = document.getElementById('myaudio');
    console.log(newSound.duration - newSound.currentTime); 
    var myFiles = new Array("Audio/01.mp3", "Audio/02.mp3", "Audio/03.mp3", "Audio/04.mp3", "Audio/05.mp3", "Audio/06.mp3", "Audio/07.mp3", "Audio/08.mp3", "Audio/09.mp3"); 
    var randomNum = Math.floor(Math.random() * myFiles.length);
    var time = setTimeout(switchSound,1000);
    if (newSound.duration - newSound.currentTime <= 30) { 
      ogSound.src = myFiles[randomNum];
      console.log(ogSound.src);
      ogSound.play(); 
      // console.log("playing third sound"); 
      clearInterval(time);
    };
    ogSound.addEventListener("playing", fourthSound); 
    }

    function fourthSound () {
      var newSound = document.getElementById('secondsound');
      var ogSound = document.getElementById('myaudio');
      var myFiles = new Array("Audio/01.mp3", "Audio/02.mp3", "Audio/03.mp3", "Audio/04.mp3", "Audio/05.mp3", "Audio/06.mp3", "Audio/07.mp3", "Audio/08.mp3", "Audio/09.mp3"); 
      var randomNum = Math.floor(Math.random() * myFiles.length);
      // newSound.src = myFiles[randomNum];
      var time = setTimeout(fourthSound,1000);
      if (ogSound.duration - ogSound.currentTime <= 30) { 
        newSound.src = myFiles[randomNum];
        console.log(newSound.src);
        newSound.play(); 
        // console.log("playing fourth sound"); 
        clearInterval(time);
      };
    }
  

  




//get time from local Footscray time (using Melbourne timezone)
function clockZone() {
  var x = moment().tz('Australia/Melbourne').format('hh:mm a') // moment may be able to grab text time 
  document.getElementById('momento').innerHTML = x;

  var time = setTimeout(clockZone,1000);
}

// approximate clock
function textTime() {
  var m = moment().tz('Australia/Melbourne').format('mm');
  var h = moment().tz('Australia/Melbourne').format('HH');
  var numHrs = Number(h); 
  var textHrs = ['twelve ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ']; 
  var textMins = ['five ', 'ten ', 'quarter ', 'twenty ', 'twenty-five ', 'half ']; 

  if (m == 02 || m == 03 || m == 04 || m== 07 || m == 08 || m == 11 || m == 12 || m == 13 || m == 17 || m == 18 || m == 22 || m == 23 || m == 27 || m == 28 || m == 32 || m == 33 || m == 34 || m == 37 || m == 38 || m == 42 || m == 43 || m == 47 || m == 48 || m == 52 || m == 53) {
    document.getElementById('about').innerHTML = 'about ';
  } 
  
  if (m >= 34 && m <=56) {
    document.getElementById('past').innerHTML = 'to ';
    numHrs = numHrs + 1;
  } else if (m >= 57) {
    document.getElementById('about').innerHTML = 'almost ';
    numHrs = numHrs + 1;
  } else if (m > 03 && m < 34) {
    document.getElementById('past').innerHTML = 'past ';
  }

  document.getElementById('hour').innerHTML = textHrs[numHrs];

  if (m < 04 || m >= 57) {
    document.getElementById('oclock').innerHTML = "o'clock ";
  }

  if (m == 04 || m == 05 || m == 06 || m == 07 || m == 53 || m == 54 || m == 55 || m == 56) {
    document.getElementById('min').innerHTML = textMins[0];
  } else if (m == 08 || m == 09 || m == 10 || m == 11 || m == 12 || m == 48 || m == 49 || m == 50 || m == 51 || m == 52) {
    document.getElementById('min').innerHTML = textMins[1];
  } else if (m == 13 || m == 14 || m == 15 || m == 16 || m == 17 || m == 43 || m == 44 || m == 45 || m == 46 || m == 47) {
    document.getElementById('min').innerHTML = textMins[2];
  } else if (m == 18 || m == 19 || m == 20 || m == 21 || m == 22 || m == 38 || m == 39 || m == 40 || m == 41 || m == 42) {
    document.getElementById('min').innerHTML = textMins[3];
  } else if (m == 23 || m == 24 || m == 25 || m == 26 || m == 27 || m == 34 || m == 35 || m == 36 || m == 37) {
    document.getElementById('min').innerHTML = textMins[4];
  } else if (m == 28 || m == 29 || m == 30 || m == 31 || m == 32 || m == 33) {
    document.getElementById('min').innerHTML = textMins[5];
  }

  if (numHrs > 0 && numHrs <= 11) {
    document.getElementById('day').innerHTML = 'in the morning';
  } else if (numHrs >= 12 && numHrs <= 17) {
    document.getElementById('day').innerHTML = 'in the afternoon';
  } else if (numHrs >= 18 && numHrs <= 19) {
    document.getElementById('day').innerHTML = 'in the evening';
  } else if (numHrs >=20 && numHrs <= 24) {
    document.getElementById('day').innerHTML = 'at night';
  }

  if (numHrs == 0 && m >= 0 && m <=03) {
    document.getElementById('hour').innerHTML = 'midnight';
  }
 
  var time = setTimeout(textTime,1000);
    
}

  