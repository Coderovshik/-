const comments = [
    {
        user: 'ноунейм какой-то',
        score: 5,
        text: 'Смотрите название. Вы только посмотрите на Название?! Ну каак тут пройти мимо и дышать спокойно?!?!😳',
        date: '21 мая 2022'
    },
    {
        user: 'ноунейм какой-то',
        score: 5,
        text: 'Смотрите название. Вы только посмотрите на Название?! Ну каак тут пройти мимо и дышать спокойно?!?!😳',
        date: '21 мая 2022'
    },
    {
        user: 'ноунейм какой-то',
        score: 5,
        text: 'Смотрите название. Вы только посмотрите на Название?! Ну каак тут пройти мимо и дышать спокойно?!?!😳',
        date: '21 мая 2022'
    },
];

const commentsEl = document.querySelector('.comments');

for (let comment of comments) {
    let commentEl = `
        <div class="comment">
            <div class="row1">
                <div class="box">
                    <div class="circle"></div>
                </div>
                <span>${comment.user}</span>
            </div>
            <div class="row2">
                <p>Оценил книгу <span class="user-score">${"⭐".repeat(comment.score)}</span></p>
            </div>
            <div class="row3">
                <p>${comment.text}</p>
            </div>
            <div class="row4">
                <p>
                    <span class="date">${comment.date}</span>
                    <span class="share">Поделиться</span>
                </p>
            </div>
        </div>
    `;

    commentsEl.innerHTML += commentEl;
}

const quotes = [
    {
        text: 'Поведенческие характеристики жестких переговоров: низкий уровень доверия; превалирование финансовых интересов; безграничное использование своей власти (в том числе демонстрация силы посредством высокомерия, непримиримости и бескомпромиссности) без оглядки на реакцию другой стороны; открытие позиций, последующие шаги и достижение компромисса по менее острым вопросам могут принести чувство морального удовлетворения от сделки.',
        date: '29 сентября 2022'
    },
    {
        text: 'Поведенческие характеристики жестких переговоров: низкий уровень доверия; превалирование финансовых интересов; безграничное использование своей власти (в том числе демонстрация силы посредством высокомерия, непримиримости и бескомпромиссности) без оглядки на реакцию другой стороны; открытие позиций, последующие шаги и достижение компромисса по менее острым вопросам могут принести чувство морального удовлетворения от сделки.',
        date: '29 сентября 2022'
    },
    {
        text: 'Поведенческие характеристики жестких переговоров: низкий уровень доверия; превалирование финансовых интересов; безграничное использование своей власти (в том числе демонстрация силы посредством высокомерия, непримиримости и бескомпромиссности) без оглядки на реакцию другой стороны; открытие позиций, последующие шаги и достижение компромисса по менее острым вопросам могут принести чувство морального удовлетворения от сделки.',
        date: '29 сентября 2022'
    },
];

const quotesEl = document.querySelector('.quotes');

for (let quote of quotes) {
    let quoteEl = `
    <div class="quote">
        <div class="row3">
            <div class="row3">
            <p>${quote.text}</p>
        </div>
        <div class="row4">
            <p>
                <span class="date">${quote.date}</span>
                <span class="share">Поделиться</span>
            </p>
        </div>
    </div>
    `;

    quotesEl.innerHTML += quoteEl;
}

let stars = document.querySelectorAll('.star');
stars.forEach((star, id) => {
    star.onmouseover = () => {
        for (let i = 0; i <= id; i++) {
            stars[i].textContent = '⭐';
        }
    }

    star.onmouseout = () => {
        for (let i = 0; i <= id; i++) {
            stars[i].textContent = '🌙';
        }
    }

    star.onclick = () => {
        for (let i = 0; i <= id; i++) {
            stars[i].textContent = '⭐';
        }
        
        for (let i = 0; i < stars.length; i++) {
            stars[i].onmouseout = null;
            stars[i].onmouseover = null;
            stars[i].onclick = null;
        }
    }
});

let collapseControl = document.querySelector('.collapse-control');
let buttonCollapse = document.querySelector('.button-collapse');
let collapsed = document.querySelector('.collapsed');
let expanded = document.querySelector('.expanded');
let collapsable = document.querySelector('.collapsable');

expanded.style.display = 'none';
collapsable.style.display = 'none';

collapseControl.onclick = () => {
    buttonCollapse.checked = !buttonCollapse.checked;
    if (buttonCollapse.checked) {
        collapsed.style.display = 'none';
        expanded.style.display = '';
        collapsable.style.display = '';
    } else {
        collapsed.style.display = '';
        expanded.style.display = 'none';
        collapsable.style.display = 'none';
    }
}