Question 4
Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result.


Solution:-

var apiUrl = 'http://www.example.com/api/get/1';
    fetch(apiUrl).then(response => {
      return response.json();
    }).then(data => {
      // Work with JSON data here
      console.log(data);
    }).catch(err => {
      // Do something for an error here
    });


