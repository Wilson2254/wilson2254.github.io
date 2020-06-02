const ol = document.querySelector('ol'); // С помощью querySelector возвращает первый попавшийся заданный селекторы
const button = document.querySelector('button'); // С помощью querySelector возвращает первый попавшийся заданный селекторы
const input = document.getElementById('item'); // С помощью querySelector возвращает первый попавшийся заданный селекторы  (В нашем случае это будет ID)
const input2 = document.getElementById('item2'); // С помощью querySelector возвращает первый попавшийся заданный селекторы  (В нашем случае это будет ID)
let items; //Создаю переменную в которую позже помещу мое хранилище
if (localStorage.getItem('items')) { //Проверяем, есть ли в хранилище значения по ключу
  items = JSON.parse(localStorage.getItem('items')) //Если есть, то записываем в переменную items с помощью JSON (возвращаем объекты которые были преобразованы в строку) значения по ключю items
} else {
  items = [] //Если нет, то items будет пустой
}

localStorage.setItem('items', JSON.stringify(items)); //Добавляем значение по ключу в хранилище, преобразуя в Json строку
const data = JSON.parse(localStorage.getItem('items')); //Записываем в переменную data с помощью JSON (возвращаем объекты которые были преобразованы в строку) значения по ключю items

const liMaker = text => { //Создаем функцию liMaker с параметром text
  const li = document.createElement('li'); //Создаем объект элемента li (пункт списка)
  li.textContent = text; //В этот пункт списка помещаем наш параметр text
  ol.appendChild(li); //В конец списка вставляем этот ul
}

input.addEventListener("keyup", function(e) { //Создаем событие по нажатии кнопки Enter
    if (event.keyCode === 13) {
      if(input.value.replace(/\s/g,'')==''){//Если все заменные символы (только с пробелами) это пустота, то
        input.value = ''; //Очищаем инпут
        alert('Поле не может быть пустым'); //Выводим сообщение
      }
      if (input.value != '') {
        items.push(input.value); //Записываем в массив введенное значение
        localStorage.setItem('items', JSON.stringify(items)); //Добавляем значение по ключу в хранилище, преобразуя в Json строку
        liMaker(input.value); //Вызываем метод создания пункта и введенного значения
        input.value = ''; //Очищаем инпут
      }
    }
})

data.forEach(item => { //Пробегаем по нашему хранилищу переменной data (цикл кароче)
    liMaker(item); //И столько раз вызываем создание наших пунктов с текстом
})

button.addEventListener('click', function() { //Создаем событие по нажатии кнопки button
  localStorage.clear(); //Очищаем хранилище
  while (ol.firstChild) { //Цикл "пока есть 1ый потомок у списка"
  ol.removeChild(ol.firstChild); //Очищаем потомков у списка (начиная с первого)
  }
  items = [];
})

input2.addEventListener("keyup", function(e) { //Создаем событие по нажатии кнопки Enter
    if (event.keyCode === 13) {
      if(input2.value.replace(/\s/g,'')==''){//Если все заменные символы (только с пробелами) это пустота, то
        input2.value = ''; //Очищаем инпут
        alert('Поле не может быть пустым'); //Выводим сообщение
      }
      if (input2.value != '') {
        items.splice(input2.value-1, 1); //Записываем в массив введенное значение
        localStorage.clear(); //Очищаем хранилище
        for (var i = 0; i < items.length; i++) {
          localStorage.setItem('items', JSON.stringify(items)); //Добавляем значение по ключу в хранилище, преобразуя в Json строку
        }
        while (ol.firstChild) { //Цикл "пока есть 1ый потомок у списка"
          ol.removeChild(ol.firstChild); //Очищаем потомков у списка (начиная с первого)
        }
        items.forEach(item => { //Пробегаем по нашему хранилищу переменной data (цикл кароче)
            liMaker(item); //И столько раз вызываем создание наших пунктов с текстом
        })
        input2.value = ''; //Очищаем инпут
      }
    }
})
