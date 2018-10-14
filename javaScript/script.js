const submit = (answerIndex, key) => {
    console.log(`You are ${answerIndex === key ? 'correct!' : 'an idiot'}`);
    panel.classList.toggle('open')
}

const togglePanel = q => {
    const panel = document.querySelector('#panel')
    panel.innerHTML = ''
    panel.appendChild(document.createTextNode(q.question))
    q.answers.forEach((a, index) => {
        const button = document.createElement('button')
        button.appendChild(document.createTextNode(a))
        button.addEventListener('click', () => submit(index, q.key))
        panel.appendChild(button)
    })
    panel.classList.toggle('open')
}

const populateColumn = (columnId, questions) => {
    questions.forEach(question => {
        const q = document.createElement('button')
        q.appendChild(document.createTextNode(question.value))
        q.classList.add('card')
        q.addEventListener('click', () => togglePanel(question))
        document.querySelector(`#${columnId}`).appendChild(q)
    })
}

populateColumn('science', scienceQs)
populateColumn('gaming', gamingQs)
populateColumn('cities', capitalsQs)
populateColumn('history', historyQs)
populateColumn('sports', sportsQs)