
class ManagePeople {}

let listOfPeople = []
let d = document;
let newArray;

function addClient() {
    let client = {}
    client.name = d.getElementById('name').value
    client.week = d.getElementById('week').value
    client.visitedAll = d.getElementById('gr_1').value
    client.buyAnything = d.getElementById('phone').value
    client.comeOtherTime = d.getElementById('gr_2').value
    client.amountFriends = d.getElementById('friends').value
    client.colorPhone = d.getElementById('color').value
    listOfPeople.push(client);
    console.log(client)
    console.log(listOfPeople);
}

function saveArray() {
    var a = d.getElementById('questions').style.display;
    d.getElementById('questions').style.display = (a == 'none')?'block':'none';
    setTableFromArray();
}

function setTableFromArray() {
    var a = d.getElementById('tab_1').style.display;
    d.getElementById('tab_1').style.display = (a == 'flex')?'none':'flex';



    // localStorage.getItem("array").forEach(i =>{
    //     newArray.push(i)
    // })
    
    const table = document.getElementById('tbody');
    for (let i = 0; i < listOfPeople.length; i++) {
      let row = document.createElement('tr');
      row.innerHTML = `<td>${listOfPeople[i].name}</td><td>${listOfPeople[i].week}</td><td>${listOfPeople[i].visitedAll}</td><td>${listOfPeople[i].buyAnything}</td><td>${listOfPeople[i].comeOtherTime}</td><td>${listOfPeople[i].amountFriends}</td><td>${listOfPeople[i].colorPhone}</td>`;
      table.appendChild(row);
    }

}

let slider = d.getElementById('friends');
let output = d.getElementById('demo');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

function fun1() {
    var rng=document.getElementById('r1'); //rng - это Input
    var p=document.getElementById('one'); // p - абзац
    p.innerHTML=rng.value;
}


// var d = document;

// var name;
// var initials;
// var posada;

// function addRow()
// {
//     // Считываем значения с формы
//     name = d.getElementById('name').value;
//     initials = d.getElementById('initials').value;
//     posada = d.getElementById('posada').value;

    // // Находим нужную таблицу
    // var tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0];

    // // Создаем строку таблицы и добавляем ее
    // var row = d.createElement("TR");
    // tbody.appendChild(row);

    // // Создаем ячейки в вышесозданной строке
    // // и добавляем тх
    // var td1 = d.createElement("TD");
    // var td2 = d.createElement("TD");

    // row.appendChild(td1);
    // row.appendChild(td2);

    // // Наполняем ячейки
    // td1.innerHTML = name+' '+initials;
    // td2.innerHTML = posada;
//}