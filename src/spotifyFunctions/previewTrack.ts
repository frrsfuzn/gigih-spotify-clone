/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const preview = new Audio();
export function startPreview(url: string | null) {
    preview.src = url as string
    preview.play()
  }

export function stopPreview() {
		preview.pause()
		preview.currentTime = 0
  }