// Here we created the Api request to METEO Weather API
// const url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';
const url = 'https://www.googleapis.com/books/v1/volumes?q=physics'
const xhr = new XMLHttpRequest();
const weatherCon = document.getElementById('weather')
xhr.open('GEt',`${url}`)
xhr.onload = function() {
  const response = JSON.parse(xhr.responseText);
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(response)
    console.log(response.items)
    console.log(response.items[0].volumeInfo.title)
    let valTest = document.getElementById('valTest')
    valTest.innerText = response.items[0].volumeInfo.title
    
  } else {
    console.log('Request failed!');
  } 
};  

xhr.send();
