export function getTokenFromHash(hash){
	const token = hash ? hash.split("=")[1].split("&")[0] : ""
	return token
}