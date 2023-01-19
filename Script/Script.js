const video = document.querySelector('video')
const btnA = document.getElementById('apagar')
const btnT = document.getElementById("tirar") 

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    const spec = {video:{width: 1920, height: 1080}}
    video.srcObject = stream
    video.play()
})
.catch(error => {
    console.log(error)
})

document.getElementById("tirar").addEventListener('click', () => {
    let canvas = document.querySelector('canvas')
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    
    let context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)
    
    let link = document.createElement('a')
    link.download = 'foto.png'
    link.href = canvas.toDataURL()
    link.textContent = 'Clique aqui para baixar a imagem'

    document.body.appendChild(link)

    btnA.classList.add('VisibilityButton')
    btnT.classList.add('HiddenButton')
})

document.getElementById("apagar").addEventListener('click', () => {
    window.location.reload() 
})