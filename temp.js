// Создаём объект запроса
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
console.log('засылаем запрос серверу ');
 // Указываем тип запроса (GET) и адрес, к которому будет выполнятся запрос
var url = "http://localhost:8000/notes/my";
request.open("GET", url, true);
request.send();
// Задаём функцию, которая будет вызываться при изменении состояния готовности запроса
request.onreadystatechange = function () { 
    // Проверяем состояние готовности и статус запроса
    if (request.readyState === 4 && request.status === 200) { 
        // Десериализуем полученную JSON строку в объект JavaScript
       // var response = JSON.parse(request.responseText); 
        console.log('ответ сервера '+ JSON.stringify(request.responseText));
    }
}


