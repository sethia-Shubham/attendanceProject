const inputBox = document.getElementById("check");
const inputDate = document.getElementById("day");
const listCont = document.getElementById("listContainer");

function addDay() {
  if (inputBox.value.trim() === "" || inputDate.value === "") {
    alert("Please enter both a task and a date!");
    return;
  }

  let li = document.createElement("li");
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let removeBtn = document.createElement("button");

  p1.textContent = inputBox.value;
  p2.textContent = inputDate.value;
  removeBtn.textContent = "Remove";

  div.style.display = "flex";
  div.style.justifyContent = "space-between";
  div.style.alignItems = "center";
  div.style.gap = "15px";

  p1.style.marginRight = "10px";
  p2.style.marginRight = "10px";
  removeBtn.style.marginLeft = "10px";

  removeBtn.style.background = "#ff5945";
  removeBtn.style.color = "white";
  removeBtn.style.border = "none";
  removeBtn.style.borderRadius = "20px";
  removeBtn.style.padding = "5px 10px";
  removeBtn.style.cursor = "pointer";

  removeBtn.addEventListener("click", function () {
    li.remove();
    saveData();
  });

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(removeBtn);

  li.appendChild(div);
  listCont.appendChild(li);

  if (inputBox.value.toLowerCase() === "present") {
    li.style.backgroundColor = "green";
  }
  if (inputBox.value.toLowerCase() === "absent") {
    li.style.backgroundColor = "red";
  }
  if (inputBox.value.toLowerCase() === "cancelled") {
    li.style.backgroundColor = "grey";
  }

  inputBox.value = "";
  inputDate.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("cn", listCont.innerHTML);
}

function showTask() {
  listCont.innerHTML = localStorage.getItem("cn");
}

showTask();
