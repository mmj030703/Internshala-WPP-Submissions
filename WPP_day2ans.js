// Write a Javascript program to print the current window contents

const p = document.createElement('p');
p.textContent = "Hello World !!!";
document.body.append(p);

window.print();