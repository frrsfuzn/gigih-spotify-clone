# Spotifai (Spotify Clone)
> This is a Final Project of Fontend Engineer Generation Gigih

## Problems
- Based on my understanding, there's no major problems in this project and all requirements are fullfilled
## Features
- User profile picture at top right corner
- User profile name beside profile picture
- Listening to preview track
- Responsive
- Dark mode toggle
- Login with spotify account
- Search song
- Able to create playlist

## How to Run
- Rename file .env and to .env.local
- Open file .env.local and change client-id with your spotify client id
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
|Typescript|✔|track|
|Redux|✔|src/features/|
|Test element in document|✔|track.test.js|
|Test useing MSW & user Event|✔|SearchTrack.test.js|
