class HashStorageClass {
    obj
    constructor() {
        this.obj = {};
    }

    addValue(key, value) {
        this.obj[key] = value;
    }

    getValue(key) {
        if (key) {
            return this.obj[key];
        } else {
            return undefined;
        }
    }

    deleteValue(key) {
        for (let elem in this.obj) {
            if (elem === key) {
                delete this.obj[key];
                return alert("Напиток удален из списка");
            } else {
                return alert("Вы не удалили напиток");
            }
        }
    }

    getKeys() {
        return Object.keys(this.obj);
    }

}

let drinkStorage = new HashStorageClass();

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');

let drink = "";
let alcohol = "";
let description = "";
let result = [];

btn1.addEventListener('click', function () {
    drink = prompt("Введите название напитка", "Маргарита");
    alcohol = prompt("Введите, напиток алкогольный или безалкогольный", "алкогольный напиток");
    description = prompt("Введите рецепт приготовления", "необходимо смешать водку с томатным соком");
    result = [alcohol, description];
    drinkStorage.addValue(drink, result);
})

btn2.addEventListener('click', function () {
    let nameInfo = prompt("Введите название напитка", "Маргарита");
    alert(drinkStorage.getValue(nameInfo));
})

btn3.addEventListener('click', function () {
    var keysN = prompt("Какой удалить напиток?", "Маргарита");
    drinkStorage.deleteValue(keysN);
})

btn4.addEventListener('click', function () {
    alert(drinkStorage.getKeys());
})