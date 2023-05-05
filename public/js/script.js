// const btnAddAddHbs = document.querySelector('.btn-add-addHbs');
// const btnUpdateUpdHbs = document.querySelector('.btn-update-updHbs');
// const btnDeleteUpdHbs = document.querySelector('.btn-delete-updHbs');


// const nameInput = document.getElementById('name');
// const numberInput = document.getElementById('number');

function disableBtnDelete() {
   const btnDeleteUpdHbs = document.querySelector('.btn-delete-updHbs');
   btnDeleteUpdHbs.disabled = true
}

// nameInput.addEventListener('click', disableBtnDelete)
// numberInput.addEventListener('click', disableBtnDelete)

function addNewNumber() {
   const form = document.querySelector('form');
   form.setAttribute('action', '/add')
   form.setAttribute('method', 'post')

}

// form.addEventListener('submit', event => {

//    // actual logic, e.g. validate the form
//    console.log('Form submission cancelled.');
//    const nameInput = document.getElementById('name');
//    const numberInput = document.getElementById('number');

//    console.log(nameInput.value.length);
//    console.log('numberInput.value', numberInput.value);

//    if (nameInput && numberInput) {
//       console.log(nameInput.value.length);
//       console.log('numberInput.value', numberInput.value);
//    }
//    else event.preventDefault();

//    // if (nameInput && numberInput) {
//    //    if (numberInput.value.length === 11 && nameInput.value) {
//    //       // console.log(numberInput.value.length);
//    //       form.setAttribute('action', '/add')
//    //       form.setAttribute('method', 'post')
//    //    }
//    //    else {
//    //       event.preventDefault()
//    //       return false
//    //       // form.setAttribute('action', '')
//    //       // form.setAttribute('method', '')
//    //    }
//    //    event.preventDefault();
//    //    // actual logic, e.g. validate the form
//    //    console.log('Form submission cancelled.');
//    // }

// });

function updateNumber() {
   const form = document.querySelector('form');
   form.setAttribute('action', '/update')
   form.setAttribute('method', 'post')

}

function deleteNumber() {
   const form = document.querySelector('form');
   form.setAttribute('action', '/delete')
   form.setAttribute('method', 'post')
}
// btnAddAddHbs.addEventListener('click', () => {
//    console.log(numberInput.value.length);
//    if (numberInput.value.length === 11 && nameInput.value) {
//       // console.log(numberInput.value.length);
//       form.setAttribute('action', '/update')
//       form.setAttribute('method', 'post')
//    }
//    else {
//       form.setAttribute('action', '')
//       form.setAttribute('method', '')
//    }
// })

// btnUpdateUpdHbs.addEventListener('click', () => {

//    if (numberInput.value.length === 11 && nameInput.value) {
//       // console.log(numberInput.value.length);
//       form.setAttribute('action', '/add')
//       form.setAttribute('method', 'post')
//    }
//    else {
//       form.setAttribute('action', '')
//       form.setAttribute('method', '')
//    }
// })

// btnDeleteUpdHbs.addEventListener('click', () => {
//    form.setAttribute('action', '/delete')
//    form.setAttribute('method', 'post')
// })
