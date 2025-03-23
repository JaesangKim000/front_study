let fortunes = [
    "오늘은 행운이 당신을 향해 달려옵니다!",
    "조용히 쉬는 하루가 되길 추천드려요.",
    "작은 선택이 큰 결과로 이어집니다.",
    "마음의 소리에 귀 기울이세요.",
    "뜻밖의 연락이 찾아올 수 있어요!"
];
const buttons = document.querySelectorAll('.boxes button')
const luckyBox = document.querySelector('.lucky')
const refresh_button = document.querySelector('.refresh')
const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal_overlay')
const modalClose = document.querySelector('.modal_close')

window.addEventListener('DOMContentLoaded' , () => {
    fortunes = shuffle(fortunes)
})

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
buttons.forEach((button,index) => {
    button.addEventListener('click', () => {
        luckyBox.textContent = fortunes[index]
    })
})

refresh_button.addEventListener( 'click', () => {
    modalOverlay.classList.add('on')
    modal.classList.add('on')
    luckyBox.textContent = ''
    fortunes = shuffle(fortunes)
})
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('on')
    modal.classList.remove('on')
} )

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('on');
        modal.classList.remove('on');
    }
})