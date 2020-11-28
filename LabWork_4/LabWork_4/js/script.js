let d = document;

function tab(field, event) {
    if (event.which == 13 /* IE9/Firefox/Chrome/Opera/Safari */ || event.keyCode == 13 /* IE8 and earlier */ ) {
        for (i = 0; i < field.form.elements.length; i++) {
            console.log(field.form.elements.length)
            if (field.form.elements[i].tabIndex == field.tabIndex + 1) {
                field.form.elements[i].focus();
                // if (field.form.elements[i].type == "text") {
                //     field.form.elements[i].select();
                //     break;
                // }
            }
        }
        return false;
    }
    return true;
}

let indexInput = 4;
let arrayForOtherElements = [];

function reset() {
    defaultParam();
    d.getElementById('field_1').value = '';
    d.getElementById('field_2').value = '';
    d.getElementById('field_3').value = '';
    let element_h = d.getElementById('element_h').style.display;
    d.getElementById('element_h').style.display = (element_h == 'none')?'block':'none';

    let color = d.getElementById('color').value;
    let inputSize =  d.getElementById('size').value;
    d.getElementById('element_h').style  = "color:" + color +";";
    d.getElementById('field_1').style = "width:" + inputSize + ";";
    d.getElementById('field_2').style = "width:" + inputSize + ";";
    d.getElementById('field_3').style = "width:" + inputSize + ";";
}


function defaultParam() {
    let inputSize =  200;
    d.getElementById('field_1').style = "width:" + inputSize + "px;";
    d.getElementById('field_2').style = "width:" + inputSize + "px;";
    d.getElementById('field_3').style = "width:" + inputSize + "px;";
    d.getElementById('element_h').style = 'display: none;';
}

function removeLiElements(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
  }
  
// for second button
function secondButton() {
    defaultParam();
    nodeItemsList = d.getElementById('items_list')
    d.getElementById('for_modal').style  = 'display: block;';
    removeLiElements(nodeItemsList);
    let color = d.getElementById('color').value;
    let field_1 = d.getElementById('field_1').value;
    let field_2 = d.getElementById('field_2').value;
    let field_3 = d.getElementById('field_3').value;
    let fields = [field_1, field_2, field_3];
    fields.forEach(el => {
        if(el != '') {
        let htmlCode = "<li style='color:" + color + ";'>" + el + "</li>";
        nodeItemsList.insertAdjacentHTML('beforeEnd', htmlCode);
        }
    })

    if(arrayForOtherElements.length > 0){
        arrayForOtherElements.forEach(el => {
            let str = 'field_'+ el;
            let value = d.getElementById(str).value;
            if(value != '') {
                let htmlCode = "<li style='color:" + color + ";'>" + value + "</li>";
                nodeItemsList.insertAdjacentHTML('beforeEnd', htmlCode);
                }
        })
    }
}

function thirdButton() {
    defaultParam();
    nodeForm = d.getElementById('form');
    let htmlCode = "<label for='"+ field_3 + "'>Field " + indexInput + "</label><input id='field_" + indexInput + "' tabIndex='" + indexInput + "'></input>"
    nodeForm.insertAdjacentHTML('beforeEnd', htmlCode);
     arrayForOtherElements.push(indexInput);
    indexInput = indexInput + 1;
}

var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");
openButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});
closeButton.addEventListener("click", function () {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});
