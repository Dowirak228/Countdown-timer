const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')

const yearsFormat = '1 Jan 2023'

function countdown() {
   const currentTime = new Date();
   const newYearTime = new Date(yearsFormat)

   const timeTillEve = Math.floor(newYearTime - currentTime)

   const remainingTime = Math.floor(timeTillEve / 1000)

   const days = Math.floor(remainingTime / 3600 / 24)
   const hours = Math.floor(remainingTime / 3600) % 24
   const minutes = Math.floor(remainingTime / 60) % 60
   const seconds = Math.floor(remainingTime) % 60

   daysEl.innerHTML = days
   hoursEl.innerHTML = hours
   minutesEl.innerHTML = minutes
   secondsEl.innerHTML = seconds
}

countdown()

setInterval(countdown, 1000)