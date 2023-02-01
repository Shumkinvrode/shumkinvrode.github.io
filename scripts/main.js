var myImage = document.querySelector('img') // мы сохраняем ссылку на наш элемент <img> в переменной myImage

myImage.onclick = function() {                                /*мы создаём этой переменной обработчик события onclick с анонимной функцией*/
    var mySrc = myImage.getAttribute('src');                 /*Мы получаем значение из атрибута src изображения.*/
    if (mySrc === 'images/imagedoto.jpg') {                  /*Мы используем условие для проверки значения src, равен ли путь к исходному изображению*/
        myImage.setAttribute ('src', 'images/imagedoto2.jpg') 
    } else {
        myImage.setAttribute ('src', 'images/imagedoto.jpg')
    }
}
var myButton = document.querySelector ('button');
var myHeading = document.querySelector ('h1');
function setUserName() {
    var myName = prompt('Please enter your name.'); // prompt() просит пользователя ввести некоторые данные, и сохраняет эти данные в переменной, после того как пользователь нажимает OK
    localStorage.setItem('name', myName);        //Мы используем функцию setItem() из localStorage для создания и хранения данных в свойстве под названием 'name', и устанавливаем это значение в переменную myName, которая содержит имя введённое пользователем
    myHeading.textContent = 'Dota is cool,' + myName; //конце мы устанавливаем textContent заголовку в виде строки и имени пользователя
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dota is cool' + storedName;
}
myButton.onclick = function() {
    setUserName();
  }
