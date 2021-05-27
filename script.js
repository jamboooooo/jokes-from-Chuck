const yBtn = document.getElementById('yes-btn')
const nBtn = document.getElementById('no-btn')
const pJoke = document.querySelector('.joke')


const getJoke = () => {
    const joke = fetch('https://api.chucknorris.io/jokes/random')

    joke.then((res) => {
        const text = res.json()
        text.then((txt) => {
            pJoke.textContent = txt.value
        })
    })
}

yBtn.addEventListener('click', () => {
    alert('Perfect choise!')
    getJoke()
})


nBtn.addEventListener('click', () => {
    alert('I don`t care!')
    getJoke()
})