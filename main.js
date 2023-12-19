// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(obj){
  if(obj.userRole === 'ADMIN'){
    return true
  } else{
    return false
  }
}

function getEmail(obj){
    return obj.firstName[0].toLowerCase() + obj.lastName.toLowerCase() + ".prsvr@gmail.com"
}

function getPlaylistLength(obj){
    return obj.songs.length
}

function getHardestHomework(obj){
    if(obj.length === 0){
        return ""
    }
    let arrOfHomework = obj[0].name
    let score = obj[0].averageScore
    for(let i = 0; i < obj.length; i ++){
let finish = obj[i]
finish.averageScore
if(finish.averageScore < score){
    arrOfHomework = finish.name
    score = finish.averageScore
}
    } return arrOfHomework

}

function createPhonebook(arr1, arr2){
const phoneBook = {}
for(let i = 0; i < arr1.length; i++){
    phoneBook[arr1[i]] = arr2[i]
}
return phoneBook
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};