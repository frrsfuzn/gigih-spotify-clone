const SPOTIFY_URL = "https://accounts.spotify.com";
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SCOPE = "playlist-modify-private";

export function Authentication() {
  window.open(
    `${SPOTIFY_URL}/authorize?response_type=token
				&client_id=${CLIENT_ID}
				&scope=${SCOPE}
				&redirect_uri=${window.location.origin}`,
    	"_self"
  );
}
