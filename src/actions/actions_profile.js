export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';
export function fetchProfile() {
    return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", 
    "Authorization": "token 191596deefef2bed2089d0e945379ea944a7d656"}) 
    return fetch("https://api.github.com/users/solitytv",{
    method: "GET",headers: header})
    .then(response => response.json())
    .then(json => { 
        console.log(json)
        dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
}
 }

 export function saveProfile(profile) {
    return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", 
    "Authorization": "token 191596deefef2bed2089d0e945379ea944a7d656"}) 
    return fetch("https://api.github.com/user",{
    method: "PATCH",
    headers: header,
    body: JSON.stringify(profile)})
    .then(response => response.json())
    .then(json => { 
        console.log(json)
        dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
}
 }
export function loadProfile(results) {
    return {
        type: PROFILE_FETCHED,
        payload: results
    }
} 