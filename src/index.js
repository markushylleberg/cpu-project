// import "./styles.css";

let inputOutput = document.getElementById('InputOutput');

inputOutput.addEventListener('mouseover', (e) => {
    document.querySelector('#inputText').classList.remove('hidden');
})

inputOutput.addEventListener('mouseout', () => {
    document.querySelector('#inputText').classList.add('hidden');
})


let socket = document.getElementById('socket');

socket.addEventListener('mouseover', (e) => {
    document.querySelector('#socketText').classList.remove('hidden');
})

socket.addEventListener('mouseout', () => {
    document.querySelector('#socketText').classList.add('hidden');
})


let cores = document.getElementById('cores');

cores.addEventListener('mouseover', (e) => {
    document.querySelector('#coreText').classList.remove('hidden');
})

cores.addEventListener('mouseout', () => {
    document.querySelector('#coreText').classList.add('hidden');
})


let cache = document.getElementById('cache');

cache.addEventListener('mouseover', (e) => {
    document.querySelector('#cacheText').classList.remove('hidden');
})

cache.addEventListener('mouseout', () => {
    document.querySelector('#cacheText').classList.add('hidden');
})



let clock = document.getElementById('clock');

clock.addEventListener('mouseover', (e) => {
    document.querySelector('#clockText').classList.remove('hidden');
})

clock.addEventListener('mouseout', () => {
    document.querySelector('#clockText').classList.add('hidden');
})



let memory = document.getElementById('memory');

memory.addEventListener('mouseover', (e) => {
    document.querySelector('#memoryText').classList.remove('hidden');
})

memory.addEventListener('mouseout', () => {
    document.querySelector('#memoryText').classList.add('hidden');
})