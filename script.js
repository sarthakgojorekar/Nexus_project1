// const username = document.getElementById('username').value;
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// const form = document.getElementById('form');

// form.addEventListener(submit , (e)=>{
//     let messages =[];
//     if(password.length < 6)
//     {
//         messages.push('Password must be greater than 6 characters.')
//     }
//     if(password.length >=15 )
//     {
//         messages.push('Password must be lesser than 15 characters.')
//     }
//     if(messages.length()> 0)
//     {

//         e.preventDefault();
//     }

// })


const form = document.getElementById('form');
const errorelement = document.getElementById('error');
form.addEventListener('submit', (e) => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let messages = [];

    if (password.length < 6) {
        messages.push('Password must be greater than 6 characters.');
    }

    if (password.length >= 15) {
        messages.push('Password must be lesser than 15 characters.');
    }

    if (messages.length > 0) {
        e.preventDefault();
        // Display or handle the error messages here
        errorelement.innerText = messages.join(' , ');
        console.log(messages);
    }
});
