const SPOTIFY_API = "https://api.spotify.com";
export async function fetchUserProfile(token) {
  const userProfile = await fetch(`${SPOTIFY_API}/v1/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userProfileJson = await userProfile.json();

  return userProfileJson;
}

export async function searchTrack(trackName, token) {
  const tracks = await fetch(
    `${SPOTIFY_API}/v1/search?q=${trackName}&type=track`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const tracksJson = await tracks.json();
  return tracksJson;
}

export async function createPlaylist(
  playlistName,
  playlistDesc,
  userProfileId,
  token
) {
  const response = await fetch(
    `${SPOTIFY_API}/v1/users/${userProfileId}/playlists`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: playlistName,
        description: playlistDesc,
        public: false,
        collaborative: false,
      }),
    }
  );
  const responseJson = await response.json();
  return responseJson;
}

export async function addTracksToPlaylist(idPlaylist, tracks, token) {
  const response = await fetch(
    `${SPOTIFY_API}/v1/playlists/${idPlaylist}/tracks?uris=${tracks.join(",")}`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
	const responseJson = await response.json()
	return responseJson
}
