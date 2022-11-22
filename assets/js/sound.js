//volume control
const $musica = document.getElementById("bg-musica");
const $barra = document.querySelector('#barra-volumen')

$barra.addEventListener("change",function(ev){  
    $musica.volume = ev.currentTarget.value;    
  },true);

  var audio = document.getElementById('bg-musica');
  var playPauseBTN = document.getElementById('playPauseBTN');
  var count = 0;
  
    function playPause(){
      if(count == 0){  
          count = 1;
          audio.play();
      }else{
          count = 0;
          audio.pause();
      }
    }



