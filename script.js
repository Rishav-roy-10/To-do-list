const inputBox = document.getElementById("text-add");
const listContaner = document.getElementById("list-contaner");

function addTask() {
    if (inputBox.value === '') {
        alert("write something lemo!🤦‍♂️");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContaner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}
listContaner.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

inputBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
})

function saveData() {
    localStorage.setItem("Data", listContaner.innerHTML)
}
function showTask() {
    listContaner.innerHTML = localStorage.getItem("Data")
}
showTask();

