let p1= ''
let p2 = ''

function scissorspaperstone (p1,p2){
	if (p1 === p2){
		return 'draw'
	}else if (p1===paper && p2===stone){
		return 'p1 wins'
	}else if (p1===stone && p2===scissors){
		return 'p1 wins'
	}else if (p1===scissors && p2===paper){
		return 'p1 wins'
	}else if (p1===stone && p2===paper){
		return 'p2 wins'
	}else if (p1===scissors && p2===stone){
		return 'p2 wins'
	}else if (p1===paper && p2===scissors){
		return 'p1 wins'
	}
} 

const p1s = document.querySelector('.p1s')
const p1r = document.querySelector('.p1r')
const p1p = document.querySelector('.p1p')
const p2s =document.querySelector('.p2s')
const p2r = document.querySelector('.p2r')
const p2p = document.querySelector('.p2p')

p1s.addEventListener('click'function() {
	p1 = scissors
}
p1r.addEventListener('click'function() {
	p1 = stone
}
p1p.addEventListener('click'function() {
	p1 = paper
}
p2s.addEventListener('click'function() {
	p2 = scissors
}
p2r.addEventListener('click'function() {
	p2 = stone
}
p2p.addEventListener('click'function() {
	p2 = paper
}

function check (p1,p2){
	if(p1!== '' && p2!=='')
	scissorspaperstone()
}
