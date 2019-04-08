let spinner = document.querySelector('.spinner')
let video = document.querySelector('#video')
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
}
let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let i = new Image()
i.src = '1.png'

let bodypix

bodyPix.load().then(net => {
  bodypix = net
  console.log(bodypix)
})

setInterval(() => {
  ctx.drawImage(video, 0, 0, 800, 800)
  if(bodypix){
    bodypix.estimatePersonSegmentation(video, 16, 0.6).then(pix=>{
      let data = ctx.getImageData(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < pix.data.length; i++) {
        let p = pix.data[i]
        if (p == 0) {
          data.data[((4 * i) - 4)] -= 100
          data.data[((4 * i) - 4) + 1] -= 100
          data.data[((4 * i) - 4) + 2] -= 100
        }
      }
      ctx.putImageData(data, 0, 0)
    })

  }
}, 1)
