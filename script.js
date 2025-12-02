const TimeZoneData = {
  ET: -5,  // Eastern Time
  CT: -6,  // Central Time
  MT: -7,  // Mountain Time
  PT: -8,  // Pacific Time
  AKT: -9, // Alaska Time
  HST: -10 // Hawaii Standard Time
};

let timezone = document.getElementById("TimeZone");

// Preenche o select
for (let key in TimeZoneData) {
  timezone.innerHTML += `<option value="${key}">${key}</option>`;
}

setInterval(() => {
  const time = document.querySelector(".display #time");
  let TZ = timezone.value;

  let date = new Date();

  // Conversão do UTC para o fuso selecionado
  let hours = date.getUTCHours() + TimeZoneData[TZ];
  let minutes = date.getUTCMinutes();

  // Ajuste de faixa 0–23
  if (hours < 0) hours += 24;
  if (hours >= 24) hours -= 24;

  // Define am/pm
  let period = hours >= 12 ? "pm" : "am";

  // Converte para formato 12 horas
  let hours12 = hours % 12;
  if (hours12 === 0) hours12 = 12;

  // Formatação
  hours12 = hours12.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");

  // Exibe HH:MM am/pm
  time.textContent = `${hours12}:${minutes}${period}`;
});
