
let myLabel = document.querySelectorAll('label');

myLabel.forEach(myLabel => {
    myLabel.innerHTML = myLabel.innerText.split('').map((letters, i) => `<span style = "transition-delay: ${i * 45}ms">${letters}</span>`).join('');
});