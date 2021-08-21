/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function getTokenFromHash(hash: string){
	const token = hash ? hash.split("=")[1].split("&")[0] : ""
	return token
}