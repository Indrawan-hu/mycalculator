let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
var viewcal = '0';
let h_calOperator = '';
let h_prev = '';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
	calculatorScreen.value = number;
}

const proses = () =>{
	if(viewcal === '0'){
		viewcal = prevNumber+h_calOperator;
	}
	else{
		viewcal += h_prev+h_calOperator;
	}
}

const viewSC = () => {
	document.getElementById("view-screen").innerHTML = viewcal;
}

const inputNumber = (number) => {
	if(currentNumber === '0'){
		currentNumber = number;		
	}
	else{
		currentNumber += number;		
	}
	h_calOperator='';
}

const numbers = document.querySelectorAll(".number");
// console.log(numbers);

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});


const inputOperators = (operator) => {
	if(calculationOperator === ''){
		prevNumber = currentNumber;
	}
	

	if(h_calOperator === ''){
		h_prev = currentNumber;
		h_calOperator=operator;
		proses();
		viewSC();
	}

	calculationOperator = operator;
	currentNumber = '';
}


const operators = document.querySelectorAll(".operator");
// console.log(operators);

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperators(event.target.value);
	});
});


const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
	calculate();
	updateScreen(currentNumber);
});


const calculate = () => {
	let result = '';
	switch(calculationOperator){
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case '-':
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case '*':
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case '/':
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default :
			break;
	}
	// const hasil = result.toString();

	//menggunakan Eval
	if(h_calOperator == ''){
		viewcal += currentNumber;
	}
	else{
		alert("Tolong berikan nilai setelah operator hitungan");
	}
	const hasil = eval(viewcal).toString();

	if(hasil.includes('.')){
		currentNumber = parseFloat(hasil).toFixed(2);
	}
	else{
		currentNumber = hasil;
	}
	viewcal += ' = '+hasil;		
	viewSC();
	calculationOperator = '';
	h_calOperator='';
}

const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
	viewcal = '0';
	h_calOperator='';
}

const claerBtn = document.querySelector(".all-clear");

claerBtn.addEventListener("click", () => {
	clearAll();
	updateScreen(currentNumber);
	viewSC();
});

const inputDecimal = (dot) => {
	if(currentNumber.includes('.')){
		return
	}
	else{
		currentNumber += dot;
	}
	h_calOperator='';
}


const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});
