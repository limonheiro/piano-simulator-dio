const PianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input ')
const keysCheck = document.querySelector('.key-check input[type="checkbox"]')

let mapedKeys = [];
let audio = new Audio()

const playTune = (key) => {

    audio.src = `./src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 100)
}

PianoKeys.forEach((key) => {
    key.addEventListener('click', () => {
        playTune(key.dataset.key)
        console.log(mapedKeys)
    })
    mapedKeys.push(key.dataset.key)
})

document.addEventListener('keydown', (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key)
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value
    console.log(e.target.value)
}

const showHideKeys = () => {
    console.log('a')
    PianoKeys.forEach(key => 
        key.classList.toggle("hide"))
}

volumeSlider.addEventListener('input', handleVolume)

keysCheck.addEventListener('click', showHideKeys);