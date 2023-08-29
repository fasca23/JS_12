const textArea = document.getElementById("editor");
const clearArea = document.querySelector(".clear");

// запись в хранилище и поведение кнопки
if (localStorage.text !== null) {
    textArea.textContent = localStorage.arrtext
    clearArea.innerHTML = "Очистить содержимое"
    clearArea.removeAttribute('disabled', '');
} else {
    clearArea.innerHTML = "Пусто";
    clearArea.setAttribute('disabled', '');
}

// Поведение кнопки при первой загрузке
if (textArea.value !== "") {
    clearArea.innerHTML = "Очистить содержимое";
    clearArea.removeAttribute('disabled', '');
} else {
    clearArea.innerHTML = "Пусто";
    clearArea.setAttribute('disabled', '');
}

// При введениии текста запись в хранилище и поведение кнопки
textArea.addEventListener("keyup", () => {
    localStorage.setItem('arrtext', textArea.value);
    clearArea.innerHTML = "Очистить содержимое";
    clearArea.removeAttribute('disabled', '');
})

// При нажатии кнопки удаление записи всей и очистка хранилища, а также поведение кнопки
clearArea.addEventListener("click", (e) => {
    e.preventDefault();
    textArea.value = "";
    localStorage.clear();
    clearArea.innerHTML = "Пусто";
    clearArea.setAttribute('disabled', '');
})