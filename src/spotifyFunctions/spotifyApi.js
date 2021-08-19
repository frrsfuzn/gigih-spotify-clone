const SPOTIFY_API = 'https://api.spotify.com'
export async function fetchUserProfile(token){

	const userProfile = await fetch(`${SPOTIFY_API}/v1/me`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	const userProfileJson = await userProfile.json()

	return userProfileJson
}

export async function searchTrack(trackName, token){
	const tracks = await fetch(`${SPOTIFY_API}/v1/search?q=${trackName}&type=track`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	const tracksJson = await tracks.json()
	return tracksJson
}