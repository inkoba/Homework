function HashStorageFunc(key, value) {
    let obj = {};
    this.key = key;
    this.value = value;
    
    this.addValue = function(key,value) {
        obj[key] = value;
    }
    
    this.getValue = function(key) {
        if(key) {
            return obj[key];
        } else {
            return undefined;
        }
    }
     
    this.deleteValue = function(key){
        if(delete obj[key]) {
            return true;
        } return false;
    }
        
    this.getKeys = function() {
       for(var key in obj)
       return Object.keys(obj);
    }
}

var drinkStorage = new HashStorageFunc();

var drink = "";
var alcohol = "";
var description = "";
var result = "";

function isDrink() {
    drink = prompt("Введите название напитка", "Маргарита");
    alcohol = prompt("Введите, напиток алкогольный или безалкогольный", "да");
    description = prompt("Введите рецепт приготовления", "смешать ");
    result = [alcohol, description];
    drinkStorage.addValue(drink, result)
}

function getInfo() {
    var nameInfo = prompt("Введите название напитка", "Маргарита");
    console.log(drinkStorage.getValue(nameInfo));
    // здесь не выполняется условие задачи , выдать на страницу информацию в определенном формате или информацию о том что такокго напитка нет
    //это необходимо сделать через if если функция равна ??? или как
   
}

function deleteDrink() {
    var keysN = prompt("Какой удалить напиток?")
    drinkStorage.deleteValue(keysN)
}

function getAllKeys(){
    console.log(drinkStorage.getKeys());
}
