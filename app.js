const tbody = document.querySelector("tbody");
const addBtn = document.querySelector(".addBtn");
let allow = true;

const deleteData = (e) => {
    const row = e.target.parentElement.parentElement;
    row.remove();
    orderRow();
};

const orderRow = () => {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row, index) => {
        const noTd = row.querySelector("td:first-child");
        noTd.textContent = index + 1;
    });
};

const saveData = (e) => {
    const row = e.target.parentElement.parentElement;
    const inputs = row.querySelectorAll("input");
    inputs.forEach((input) => {
        input.parentElement.textContent = input.value;
    });
    e.target.textContent = "Duzelis et";
    e.target.classList.remove("saveBtn");
    e.target.classList.add("editBtn");
    allow = true;
};

addBtn.addEventListener("click", () => {
    if (!allow) {
        alert("Bos xanalari doldurun");
        return;
    }
    allow = false;

    const row = document.createElement("tr");
    const noTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Ad";
    nameTd.appendChild(nameInput);
    const surnameTd = document.createElement("td");
    const surnameInput = document.createElement("input");
    surnameInput.type = "text";
    surnameInput.placeholder = "Soyad";
    surnameTd.appendChild(surnameInput);
    const ageTd = document.createElement("td");
    const ageInput = document.createElement("input");
    ageInput.type = "number";
    ageInput.placeholder = "Yas";
    ageTd.appendChild(ageInput);
    const optionsTd = document.createElement("td");
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Yadda saxla";
    saveBtn.classList.add("saveBtn");
    saveBtn.addEventListener("click", saveData);
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Legv et";
    cancelBtn.classList.add("cancelBtn");
    cancelBtn.addEventListener("click", deleteData);
    optionsTd.append(saveBtn, cancelBtn);
    row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
    tbody.appendChild(row);
    orderRow();
});
