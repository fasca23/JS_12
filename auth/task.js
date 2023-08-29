const forma = document.querySelector("form");
const welcome = document.querySelector(".welcome");
const user_id = document.querySelector("#user_id");
const logout= document.querySelector("#logout");
const url = 'https://students.netoservices.ru/nestjs-backend/auth';

window.onload = () => {
    // Если в локальном хранилище уже есть ID авторизации - выводим велком и ID
    if (localStorage.getItem('user_id')){
        welcome.classList.add("welcome_active")
        user_id.textContent = localStorage.getItem('user_id')
    }
}    
// Подписываемся на нажатие отправки формы
    forma.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(forma)

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.send(formData)
        // ресетаем форму, которую отправили
        e.target.reset();
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 201) {
                // Преобразуем JSON в объект
                    resp = JSON.parse(xhr.response)
                    // console.log(xhr)
                    // console.log(resp)
                    // console.log(resp['success']);
                if (resp['success']){
                    welcome.classList.add("welcome_active")
                    user_id.textContent = resp['user_id']
                    localStorage.setItem('user_id', resp['user_id'])
                } else {
                    alert('«Неверный логин или пароль»')
                }
            }
        }
    })
    // Удаляем Сообщение и чистим хранилище
    logout.addEventListener('click', ()=> {
        welcome.classList.remove("welcome_active")
        localStorage.clear()
    })