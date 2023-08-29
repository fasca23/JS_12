const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');

window.onload = () => {
    if (getCookie() !== 'true') {
        modal.classList.add('modal_active')
    }
}
// При нажатии на крест - удаляем активность окна и записываем куку
closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_active')
    document.cookie = 'subscribe=true'
})

function getCookie() {
    // Если нет кук ничего не делаем
    if (document.cookie.length == 0) {
        return
        // Иначе ищем правильную куку
    } else {
        const pairs = document.cookie.split('; ')
        // console.log(pairs)
        // Ищем первый элемент массива начинающийся с 'subscribe'
        const cookie = pairs.find(el => el.startsWith('subscribe'))
        // Вырезаем все лишнее c 10ого символа не включительно и до конца строки
        // console.log(cookie.substring(10))
        return cookie.substring(10)
    }
}
// document.cookie.length = 0
// console.log(document.cookie)