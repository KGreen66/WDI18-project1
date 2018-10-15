const panel = document.querySelector('#panel');
const points = document.querySelector('#playerPoints')

// Daily double
// pick a random tile that would be worth double value.
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// const dailyCat = getRandomInt(5)
// const dailyQuest = getRandomInt(5)

const submit = (answerIndex, key, value) => {
    let newPoints = +points.innerHTML;
    //if run out of time, pass -number
    //display ran out of time
    if (answerIndex === key) {
        panel.appendChild(document.createTextNode(`You are correct!`));
        newPoints += value;
    } else {
        panel.appendChild(document.createTextNode(`You are incorrect!`));
    }
    setTimeout(() => panel.classList.toggle('open'), 2000);
    points.innerHTML = newPoints
}

const togglePanel = q => {
    panel.innerHTML = '';
    panel.appendChild(document.createTextNode(q.question));
    const div = document.createElement('div')
    div.classList.add('buttonContainer')
    panel.appendChild(div)
    q.answers.forEach((a, index) => {
        const button = document.createElement('button');
        button.appendChild(document.createTextNode(a));
        button.addEventListener('click', () => submit(index, q.key, q.value));
        div.appendChild(button)
    });
    panel.classList.toggle('open')
    //create div (30)
    //const timer = document.createElement('div')
    //setinterval(1000)
    //create a function that if i !== 0 to subtract 1
    //else if i === 0, display out of time, clearInterval, close window function
    
};

const populateColumn = (columnId, questions) => {
    questions.forEach(question => {
        const q = document.createElement('button');
        q.appendChild(document.createTextNode(question.value));
        q.classList.add('card');
        q.addEventListener('click', () => {
            togglePanel(question);
            q.classList.add('answered');
        });
        document.querySelector(`#${columnId}`).appendChild(q);
    });
}

populateColumn('science', scienceQs);
populateColumn('gaming', gamingQs);
populateColumn('cities', capitalsQs);
populateColumn('history', historyQs);
populateColumn('sports', sportsQs);

