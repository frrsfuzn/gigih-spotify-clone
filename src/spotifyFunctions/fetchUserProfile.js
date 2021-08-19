const SPOTIFY_API = 'https://api.spotify.com/v1/me'
export async function fetchUserProfile(token){

	const userProfile = await fetch(SPOTIFY_API, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	const userProfileJson = await userProfile.json()

	return userProfileJson
}