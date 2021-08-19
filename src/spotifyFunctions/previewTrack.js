let preview = new Audio();
export function startPreview(url) {
    preview.src = url
    preview.play()
  }

export function stopPreview() {
		preview.pause()
		preview.currentTime = 0
  }