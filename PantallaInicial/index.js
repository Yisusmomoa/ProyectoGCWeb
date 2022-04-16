
window.onload=function(){
  const audio = new Audio("/assets/Music/PantallaInicio.mp3");
  audio.play();
  debugger;
  audio.volume=localStorage.getItem("RangeMusic")/10;
  audio.loop=true;
  // const btnMusic = document.getElementById("btnMusic");
  
  // btn.addEventListener("click", function () {
    
  // });
  
    // Get the video
    var video = document.getElementById("myVideo");
  
    // Get the button
    var btn = document.getElementById("myBtn");
  
    // Pause and play the video, and change the button text
    function myFunction() {
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    }
  
  const btnPlayerSolo=document.getElementById('PlayerSolo');
  const btnMultiPlayer=document.getElementById('MultiPlayer');
  var nivelSeleccionado1=document.getElementById('inlineCheckbox1')
  var nivelSeleccionado2=document.getElementById('inlineCheckbox2');
  var nivelSeleccionado3=document.getElementById('inlineCheckbox3');
  
  var dificultad;
  var modoJuego;
  btnPlayerSolo.addEventListener('click',()=>{
    debugger;
    if(document.getElementById('flexRadioDefault1').checked){
      dificultad=document.getElementById('flexRadioDefault1').value;
      localStorage.setItem("Dificultad", dificultad);
    }
    else if(document.getElementById('flexRadioDefault2').checked){
      dificultad=document.getElementById('flexRadioDefault2').value;
      localStorage.setItem("Dificultad", dificultad);
    }
    // debugger;
    // console.log(dificultad)s
    if(nivelSeleccionado1.checked){
      opcion=nivelSeleccionado1.checked;
      localStorage.setItem("Nivel",nivelSeleccionado1.value);
    }
    else if(nivelSeleccionado2.checked){
      opcion=nivelSeleccionado2.checked;
      localStorage.setItem("Nivel",nivelSeleccionado2.value);
    }
    else if(nivelSeleccionado3.checked){
      opcion=nivelSeleccionado3.checked;
      localStorage.setItem("Nivel",nivelSeleccionado3.value);
    }
    else {
      alert("Selecciona una opción");
    }
    debugger;
  });
  
  btnMultiPlayer.addEventListener('click',()=>{
    debugger;
    //Dificultad
    if(document.getElementById('flexRadioDefault1').checked){
      dificultad=document.getElementById('flexRadioDefault1').value;
      localStorage.setItem("Dificultad", dificultad);
    }
    else if(document.getElementById('flexRadioDefault2').checked){
      dificultad=document.getElementById('flexRadioDefault2').value;
      localStorage.setItem("Dificultad", dificultad);
    }
    //Dificultad

    //Modo de juego
    if(document.getElementById('flexRadioDefault3').checked){
      modoJuego=document.getElementById('flexRadioDefault3').value;
      localStorage.setItem("ModoJuego", modoJuego);
    }
    if(document.getElementById('flexRadioDefault4').checked){
      modoJuego=document.getElementById('flexRadioDefault4').value;
      localStorage.setItem("ModoJuego", modoJuego);
    }
    //Modo de juego

    // debugger;
    // console.log(dificultad)s
    if(nivelSeleccionado1.checked){
      opcion=nivelSeleccionado1.checked;
      localStorage.setItem("Nivel",nivelSeleccionado1.value);
    }
    else if(nivelSeleccionado2.checked){
      opcion=nivelSeleccionado2.checked;
      localStorage.setItem("Nivel",nivelSeleccionado2.value);
    }
    else if(nivelSeleccionado3.checked){
      opcion=nivelSeleccionado3.checked;
      localStorage.setItem("Nivel",nivelSeleccionado3.value);
    }
    else {
      alert("Selecciona una opción");
    }
    debugger;
  });
  
  var inputRangeMusic=document.getElementById('customRange1');
  var inputRangeEfects=document.getElementById('customRange2');
  var storageMusicLevel,storageEfectsLevel;

  inputRangeMusic.addEventListener("input", function() {
    audio.play();
    document.getElementById("ValorMusica").innerText = inputRangeMusic.value;
    localStorage.setItem("RangeMusic",inputRangeMusic.value);
    audio.volume=localStorage.getItem("RangeMusic")/10;
  }, false);
  
  inputRangeEfects.addEventListener("input", function() {
    audio.play();
    document.getElementById("ValorEfectos").innerText = inputRangeEfects.value;
    localStorage.setItem("RangeEfects",inputRangeEfects.value);

  }, false);

  
  //localStorage
  storageMusicLevel=localStorage.getItem("RangeMusic");
  document.getElementById("ValorMusica").innerText=storageMusicLevel;
  inputRangeMusic.value=storageMusicLevel;

  storageEfectsLevel=localStorage.getItem("RangeEfects");
  document.getElementById("ValorEfectos").innerText=storageEfectsLevel;
  inputRangeEfects.value=storageEfectsLevel;
}
