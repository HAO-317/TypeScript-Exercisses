fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())  // 
  .then((data) => {
    console.log(data)})    // 
  .catch((err) => console.log(err));  // 

  //-

  fetch('https://picsum.photos/v2/list')
  .then(response => response.json())  
  .then(data => console.log(data))    
  .catch(error => console.error('Error:', error));  