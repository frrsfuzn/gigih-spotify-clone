# Spotifai (Spotify Clone)
> This is a Final Project of Fontend Engineer Generation Gigih

## Problems
- Focus problems of this app is how to make a playlist in Spotify using Spotify API
## Features
- User profile picture at top right corner
- User profile name beside profile picture
- Listening to preview track
- Responsive
- Dark mode toggle
- Login with spotify account
- Search song
- Create playlist

## How to Run
- Rename file .env to .env.local
- Open file .env.local and change `yourSpotifyClientId` with your spotify client id
- Then do the following commands
```sh
cd gigih-spotify-clone
npm i
yarn start
```
- Verify the deployment by navigating to your server address in
your preferred browser.

```sh
localhost:3000
```

## How to test
- Within project directory, enter this following command in terminal
```sh
yarn test
```

## Try live version
- Open following link address in your browser
```sh
https://gigih-spotify-clone.vercel.app/
```

## Requirement check
|Requirement|Check|Location|
|-----------|-----|-----------|
|Hooks|✔|createPlaylist, searchTrack|
|Flex|✔|appBar, searchTrack|
|Grid|✔|track, dashboard, login|
|Typescript|✔| most files are typescript|
|Redux|✔|src/features/|
|Test element in document|✔|track.test.js|
|Test using MSW & user Event|✔|SearchTrack.test.js|
