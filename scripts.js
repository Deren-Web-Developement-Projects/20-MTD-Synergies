
// Clear checkbox selections
document.getElementById('clear').onclick = function() {
    var checkboxes = document.getElementsByName('selection-item');
    for(var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}

// Gets all of the checkbox elements
let pyro1 = document.getElementById('item-5-1');
let pyro2 = document.getElementById('item-2-5');
let power1 = document.getElementById('item-6-1');
let power2 = document.getElementById('item-7-3');
let rapid1 = document.getElementById('item-6-5');
let rapid2 = document.getElementById('item-7-4');
let rapid3 = document.getElementById('item-4-1');
let light1 = document.getElementById('item-6-6');
let light2 = document.getElementById('item-4-2');
let quick1 = document.getElementById('item-7-1');
let quick2 = document.getElementById('item-2-3');
let double1 = document.getElementById('item-2-1');
let double2 = document.getElementById('item-4-5');
let fan1 = document.getElementById('item-2-2');
let fan2 = document.getElementById('item-4-6');

// Function that flips the checkboxes that have a pair
function ToggleBoxes(name) {
    switch(name) {
        case "pyro1":
            pyro2.checked = !pyro2.checked;
            break;
        case "pyro2":
            pyro1.checked = !pyro1.checked;
            break;
        case "power1":
            power2.checked = !power2.checked;
            break;  
        case "power2":
            power1.checked = !power1.checked;
            break;
        case "rapid1":
            rapid2.checked = !rapid2.checked;
            rapid3.checked = !rapid3.checked;
            break;
        case "rapid2":
            rapid1.checked = !rapid1.checked;
            rapid3.checked = !rapid3.checked;
            break;
        case "rapid3":
            rapid1.checked = !rapid1.checked;
            rapid2.checked = !rapid2.checked;
            break;
        case "light1":
            light2.checked = !light2.checked;
            break;
        case "light2":
            light1.checked = !light1.checked;
            break;
        case "quick1":
            quick2.checked = !quick2.checked;
            break;
        case "quick2":
            quick1.checked = !quick1.checked;
            break;
        case "double1":
            double2.checked = !double2.checked;
            break;
        case "double2":
            double1.checked = !double1.checked;
            break;
        case "fan1":
            fan2.checked = !fan2.checked;
            break;
        case "fan2":
            fan1.checked = !fan1.checked;
            break;     
    }
}