let opencard = document.getElementById("container1");
let closecard = document.getElementById("container");
btnsubmit.onclick = function(){
    
    closecard.style.display = 'none';
    opencard.classList.replace('close','container1');
    
    
}

// Get all the buttons with the class "my-button"
let buttons = document.querySelectorAll('.btn-rating');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the clicked button
    let i = button.value;
    
    // Do something with the chosen value
    document.getElementById("selectedrating").innerHTML = `You selected  ${i} out of 5`;
  });
});

