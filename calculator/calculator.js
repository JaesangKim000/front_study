let monitor_array = []

const operands = document.querySelectorAll('button.operand')
const monitor = document.querySelector('.monitor_inner')
const resetBtn = document.getElementById('reset')
const operators = document.querySelectorAll('button.operator')
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const resultBtn = document.getElementById('equal')

resultBtn.addEventListener('click',() => {
    const currentInput = monitor_array.join('')
    const parts = currentInput.split(/[\+\-x÷]/)

    if (['+', '-', 'x', '÷'].includes(monitor_array[monitor_array.length-1]) || parts.length < 2) {
        return
    }
    const safeExpr = currentInput.replace(/x/g, '*').replace(/÷/g, '/');
    let result = eval(safeExpr)
    monitor.textContent = result
    monitor_array.splice(0)
    result = String(result)
    // console.log(result)
    // console.log(typeof(result))
    monitor_array = result.split('')
    console.log(monitor_array)
    }
)


resetBtn.addEventListener('click', () => {
    monitor_array = []
    monitor.textContent = ''
})

operators.forEach((button, index) => {
    button.addEventListener('click', () => {
        if(monitor_array.length != 0 && numbers.includes(monitor_array[monitor_array.length-1]) ) {
            monitor_array.push(button.textContent)
        }
        monitor.textContent = monitor_array.join('')
    })
})

operands.forEach( (button , index) => {
    button.addEventListener('click', () => {
        const currentInput = monitor_array.join('')
        const parts = currentInput.split(/[\+\-x÷]/)
        const lastNumber = parts[parts.length-1]

        if(button.id === 'zero') {
            if (monitor_array.length == 0) {
                monitor_array[0] = '0'
                monitor.textContent = monitor_array.join('')
                return
            }
            if (lastNumber.length == 0 && monitor_array.length == 0) {
                monitor_array[monitor_array.length-1] = '0' 
                monitor.textContent = monitor_array.join('')
                return
            }
            else if  (lastNumber.length == 1 && lastNumber[lastNumber.length-1] == '0') { 
                monitor.textContent = monitor_array.join('')
                return
            }
            else {
                monitor_array.push('0')
                monitor.textContent = monitor_array.join('')
            }
        }
        else{
            if(lastNumber.length == 1 && lastNumber[lastNumber.length-1] === '0') {
                monitor_array[monitor_array.length-1] = button.textContent
                monitor.textContent = monitor_array.join('') 
            }
            else {
                monitor_array.push(button.textContent)
                monitor.textContent = monitor_array.join('')
            }
        }
    })
} )