let btnElement= document.getElementById('click-btn');
let counterElement=document.getElementById('counter-container');

btnElement.addEventListener('click',e=>{
	console.log('Event triged')
})

const timer= document.createElement('p')

const date= new Date()
const time= date.toLocaleTimeString ()

timer.textContent=`current time is : ${time}`

counterElement.appendChild(timer)
