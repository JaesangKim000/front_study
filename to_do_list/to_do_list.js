

const plusButtons = document.querySelectorAll('.plus')
const toDoList = document.getElementById('to_do_list')
const addDeleteContainer = document.getElementById('add_delete_container')

// plusButton.addEventListener('click', () => {
//     const newToDo = document.createElement('div')
//     newToDo.classList.add('item')

//     const check = document.createElement('div')
//     check.classList.add('check')
    
//     const about = document.createElement('div')
//     about.classList.add('about')

//     const deadline = document.createElement('div')
//     deadline.classList.add('deadline')

//     newToDo.appendChild(check)
//     newToDo.appendChild(about)
//     newToDo.appendChild(deadline)

//     toDoList.appendChild(newToDo)

//     const newAddDelete = document.createElement('div')
//     newAddDelete.classList.add('add_delete')

//     const newAddBtn = document.createElement('button')
//     newAddBtn.classList.add('plus')
//     newAddBtn.textContent = 'ADD'

//     const newMinusBtn = document.createElement('button')
//     newMinusBtn.classList.add('minus')
//     newMinusBtn.textContent = 'DEL'

//     newAddDelete.appendChild(newAddBtn)
//     newAddDelete.appendChild(newMinusBtn)

//     addDeleteContainer.appendChild(newAddDelete)


// })

// plusButtons.forEach( plusButton => {
//     plusButton.addEventListener('click', () => {
//         const newToDo = document.createElement('div')
//         newToDo.classList.add('item')
    
//         const check = document.createElement('div')
//         check.classList.add('check')
        
//         const about = document.createElement('div')
//         about.classList.add('about')
    
//         const deadline = document.createElement('div')
//         deadline.classList.add('deadline')
    
//         newToDo.appendChild(check)
//         newToDo.appendChild(about)
//         newToDo.appendChild(deadline)
    
//         toDoList.appendChild(newToDo)
    
//         const newAddDelete = document.createElement('div')
//         newAddDelete.classList.add('add_delete')
    
//         const newAddBtn = document.createElement('button')
//         newAddBtn.classList.add('plus')
//         newAddBtn.textContent = 'ADD'
    
//         const newMinusBtn = document.createElement('button')
//         newMinusBtn.classList.add('minus')
//         newMinusBtn.textContent = 'DEL'
    
//         newAddDelete.appendChild(newAddBtn)
//         newAddDelete.appendChild(newMinusBtn)
    
//         addDeleteContainer.appendChild(newAddDelete)
    
    
//     })
// });


addDeleteContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('plus')) {
        const newToDo = document.createElement('div');
    newToDo.classList.add('item');

    const check = document.createElement('div');
    check.classList.add('check');

    const about = document.createElement('div');
    about.classList.add('about');

    const deadline = document.createElement('div');
    deadline.classList.add('deadline');

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
  }
    }
)