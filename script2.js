const getHours = () => {
  const relogio = document.getElementsByClassName('relogio')[0]
  console.log(relogio)
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const hour      = hours   < 10 ? `0${hours}`   : hours
  const minute    = minutes < 10 ? `0${minutes}` : minutes
  const second    = seconds < 10 ? `0${seconds}` : seconds
  relogio.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
  getHours()
}, 1000)