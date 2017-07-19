// //query selector
// const id = document.querySelector('#id-selector')
// console.log(id)

// const classNode = document.querySelector('.class-selector')
// console.log(classNode)

// const p = document.querySelector('p')
// console.log(p)

// const attrNode = document.querySelector('span')
// console.log(attrNode)

// //styling
// id.style.backgroundColor = 'green'
// id.style.padding = '3em'

// classNode.style.color = 'red'
// classNode.style.fontFamily = 'Helvetica'
// classNode.style.fontWeight = '600'
// classNode.style.marginTop = '2em'


// p.style.fontSize = '2em'


// //add classes = node.classList.add('class1', class2 class3)
// // remove classes = node.classList.remove(class1 class2 class3)
// id.classList.add('yellow','fontWeight')

//for dropdownanimation etc node.addEventListener('eventname', functionToDoSomething)

const button = document.querySelector('.button')
console.log(button)

const menu= document.querySelector('.menu')
console.log(menu)

button.addEventListener('click', function (){
	console.log('button clicked!')
	if (menu.classList.contains('is-open')) {
		menu.classList.remove('is-open')
	} 
	else{
		menu.classList.add('is-open')
	}
})




// const sayClick = function () {
// 	console.log('clicked!')
// }

// button.addEventListener('click', sayClick)




