const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoises = document.querySelectorAll('button')

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoice = e.target.iduserChoiceDisplay. innerHTML = userChoice
}))