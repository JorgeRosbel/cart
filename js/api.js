//Forma uno
//Funcion para enviar mensaje a un grupo de telegram media un bot$
//https://unprogramador.com/crear-bot-con-telegram-y-python-parte-1/
var token = "5698810751:AAHgHB_dnM9HLNIzHWzhcj3IijFDbDqg3YM";//token del bot
var chat_id = -797402909;//id del chat del grupo
var message = "*ESTO%20ES%20UNA%20PRUEBA*";
var parse_mode = "markdown"

function botTelegram(token,chat_id,message,parse_mode)
{
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=${parse_mode}`;
  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
}

botTelegram(token,chat_id,message,parse_mode);


//Forma 2
//const bot = new Bot("5698810751:AAHgHB_dnM9HLNIzHWzhcj3IijFDbDqg3YM", -797402909);
//bot.sendMessage("Holaaaaaaaaaaaaaa%20lalalala%0AEstolalalaa");
//bot.sendPhoto("image/aperitivo_1.jpg");
