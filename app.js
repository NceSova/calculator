const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num2 != 0 ? num1 / num2 : 'Делить на ноль нельзя'

const firstNumber = +prompt('first number')
const operator = prompt('operator')
const secondNumber = +prompt('second number')

function operate(num1, num2, oper) {
  switch (oper) {
    case '+':
      return add(num1, num2)
      break
    case '-':
      return subtract(num1, num2)
      break
    case '*':
      return multiply(num1, num2)
      break
    case '/':
      return divide(num1, num2)
      break
    default: return
  }
}

alert(operate(firstNumber, secondNumber, operator))
