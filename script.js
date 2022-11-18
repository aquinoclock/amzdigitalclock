<<<<<<< HEAD
function atualizarTempo (){

var display = document.querySelector('.display');

var agora = new Date();

var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds());



display.textContent = horario;

}
function corrigirHorario(numero){
  if (numero < 10){
    numero = '0' + numero;
  }
  return numero;
}

setInterval(atualizarTempo, 1000);

console.log(horario)
=======

const TimeZoneData = {
  UTC: -3,
};
let timezone = document.getElementById("TimeZone");
for (key in TimeZoneData) {
    timezone.innerHTML += `<option value="${key}"</option>`;
}

setInterval(() => {
    const time = document.querySelector(".display #time");
    let TZ = timezone.value;
  let date = new Date();
    let hours = date.getUTCHours();
    console.log(hours);
    if (hours > 12) {
        hours +1;
    }
   
    hours += Math.floor(TimeZoneData[TZ]);
    let minutes = date.getUTCMinutes();
    let minutestoadd = (TimeZoneData[TZ] - Math.floor(TimeZoneData[TZ]));
    if (minutestoadd > 0) {
        minutestoadd = 30;
    }
    minutes += minutestoadd;
    if (minutes > 60) {
        hours += 1;
        minutes -= 60;
    }
    let seconds = date.getUTCSeconds();
    
    let millisec = Math.floor(date.getUTCMilliseconds() / 10).toFixed(0);
    
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (millisec < 10) {
    millisec = "0" + millisec;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + Math.abs( hours);
  }
  time.textContent =
    hours + ":" + minutes + ":" + seconds;
});
>>>>>>> bec7a169fcc7c330d2a2a94eaf08c801eeba2ef9



