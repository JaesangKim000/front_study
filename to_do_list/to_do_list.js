
const plusButtons = document.querySelector('.plus')
const toDoList = document.getElementById('to_do_list')
const addDeleteContainer = document.getElementById('add_delete_container')
const minusButtons = document.querySelector('.minus')
const aboutInput = document.querySelector('.about_input')
const itemAbout = document.querySelector('.item.about')


toDoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('about') && e.target.closest('.item')) {
        const about = e.target
        const displayDiv = about.querySelector('.display_div')
        const item = about.parentElement
        const checkbox = item.querySelector('.check .checkbox') 

        if (about.querySelector('.about_input')) return;

        const input = document.createElement('input')
        input.type = '.text'
        input.classList.add('about_input')
        input.value = displayDiv ? displayDiv.textContent : ''

        if (displayDiv) {
            displayDiv.style.display = 'none'
        }
        about.appendChild(input)
        input.focus()

        function finalizeInput() {
            const value = input.value.trim()

            if(!displayDiv) {
                const newDisplay = document.createElement('div')
                newDisplay.classList.add('display_div')
                newDisplay.textContent = value || ''
                about.appendChild(newDisplay)
                if(checkbox && checkbox.checked && value !== '') {
                    newDisplay.style.textDecoration = 'line-through'
                    newDisplay.style.color = 'gray'
                }
            }
            else {
                displayDiv.textContent = value || ''
                displayDiv.style.display = 'flex'
                if (checkbox && checkbox.checked && value !== '') {
                    displayDiv.style.textDecoration = 'line-through';
                    displayDiv.style.color = 'gray';
                }
            }

            input.remove()
        }
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') finalizeInput()
        })

        input.addEventListener('blur', finalizeInput)
    }
})


toDoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deadline') && e.target.closest('.item')) {
        const deadline = e.target
        const displayDiv = deadline.querySelector('.display_div')

        if (deadline.querySelector('.deadline_input')) return;

        const input = document.createElement('input')
        input.type = '.text'
        input.classList.add('deadline_input')
        input.value = displayDiv ? displayDiv.textContent : ''

        if (displayDiv) {
            displayDiv.style.display = 'none'
        }
        deadline.appendChild(input)
        input.focus()

        function finalizeInput() {
            const value = input.value.trim()

            if(!displayDiv) {
                const newDisplay = document.createElement('div')
                newDisplay.classList.add('display_div')
                newDisplay.textContent = value || ''
                deadline.appendChild(newDisplay)
            }
            else {
                displayDiv.textContent = value || ''
                displayDiv.style.display = 'flex'
            }

            input.remove()
        }
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') finalizeInput()
        })

        input.addEventListener('blur', finalizeInput)
    }
})


addDeleteContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('plus')) {
        const newToDo = document.createElement('div');
        newToDo.classList.add('item');

        const check = document.createElement('div');
        check.classList.add('check');

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('checkbox')

        check.appendChild(checkbox)

        const about = document.createElement('div');
        about.classList.add('about');

        const display_div = document.createElement('div')
        display_div.classList.add('display_div')

        about.appendChild(display_div)

        const deadline = document.createElement('div');
        deadline.classList.add('deadline');

        const display_div2 = document.createElement('div')
        display_div2.classList.add('display_div')

        deadline.appendChild(display_div2)

        newToDo.appendChild(check);
        newToDo.appendChild(about);
        newToDo.appendChild(deadline);

        toDoList.appendChild(newToDo);

        const newAddDelete = document.createElement('div');
        newAddDelete.classList.add('add_delete');

        const newAddBtn = document.createElement('button');
        newAddBtn.classList.add('plus');
        newAddBtn.textContent = 'ADD';

        const newMinusBtn = document.createElement('button');
        newMinusBtn.classList.add('minus');
        newMinusBtn.textContent = 'DEL';

        newAddDelete.appendChild(newAddBtn);
        newAddDelete.appendChild(newMinusBtn);

        addDeleteContainer.appendChild(newAddDelete);
        
        const remaingItems = document.querySelectorAll('.item')
        const remainingDeleteBtns = document.querySelectorAll('.minus')
        if (remaingItems.length > 1) {
            remainingDeleteBtns[0].style.display = 'flex'
        }
    }
    }
)

addDeleteContainer.addEventListener('click',(e) => {
    if (e.target.classList.contains('minus')) {
        const clickedDeleteBox = e.target.closest('.add_delete'); 
        const deleteBoxes = Array.from(document.querySelectorAll('.add_delete'));
        const deleteIndex = deleteBoxes.indexOf(clickedDeleteBox); 
        const items = document.querySelectorAll('.item');
        if (items.length > 1) {
            const itemToRemove = items[deleteIndex ];
            itemToRemove.remove()
            clickedDeleteBox.remove();
            const remainingDeleteBtns = document.querySelectorAll('.minus');
            if (remainingDeleteBtns.length === 1) {
                remainingDeleteBtns[0].style.display = 'none';
              }
        }
    }
})

toDoList.addEventListener('change', (e) => {
    if (e.target.classList.contains('checkbox')) {
        const item = e.target.closest('.item')
        const about = item.querySelector('.about .display_div')
        const deadline = item.querySelector('.deadline .display_div')

        if (e.target.checked ) {
            if(about && about.textContent.trim() !== '') {
                about.style.textDecoration = 'line-through'
                about.style.color = 'gray'
            }
            if(deadline && deadline.textContent.trim !== '') {
                deadline.style.textDecoration = 'line-through'
                deadline.style.color = 'gray'
            }
        }
        else {
            if(about) {
                about.style.textDecoration = 'none'
                about.style.color = ''
            }
            if(deadline) {
                deadline.style.textDecoration = 'none'
                deadline.style.color = ''
            }
        }

    }
})
