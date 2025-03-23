
const phrases = [
    "삶이 있는 한 희망은 있다.",
    "포기하지 마라. 위대한 일은 시간이 걸린다.",
    "오늘 걷지 않으면 내일 뛰어야 한다.",
    "인생은 선택의 연속이다."
]

const phraseBtn = document.getElementById('btn')
const phraseBox = document.querySelector('.phrase p')

phraseBtn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * phrases.length);
    phraseBox.textContent = phrases[random];
}
)

