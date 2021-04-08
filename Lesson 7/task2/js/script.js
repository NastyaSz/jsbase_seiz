let button = document.getElementsByClassName("my-button")[0];
button.addEventListener('click', () => {
    showModalBox();
});

function showModalBox() {
    let modalBox = createModalBox();
    document.getElementsByClassName("my-button")[0].style.display = 'none';
    document.body.appendChild(modalBox);
}
function createModalBox() {
    let modalBox = document.createElement('div');
    modalBox.classList.add('my-modal-box');

    let inputName = document.createElement('input');
    inputName.classList.add('my-modal-box__input-name');
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name";
    inputName.placeholder = "Name";

    let inputEmail = document.createElement('input');
    inputEmail.classList.add('my-modal-box__input-email');
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.id = "email";
    inputEmail.placeholder = "E-mail";

    let btnSend = document.createElement('button');
    btnSend.classList.add('my-modal-box__btn-send');
    btnSend.innerText = 'Send';
    btnSend.addEventListener('click', () => {

        if(inputEmail.value.indexOf("@") != -1){
            alert('Hello, ' + inputName.value + '!');
        document.body.removeChild(modalBox);
        }else{
            alert("Email is not valid")
        }
    });

    let btnCancel = document.createElement('button');
    btnCancel.classList.add('my-modal-box__btn-cancel');
    btnCancel.innerText = 'Cancel';
    btnCancel.addEventListener('click', () => {
        document.body.removeChild(modalBox);
        document.getElementsByClassName("my-button")[0].style.display = 'block';
    });

    modalBox.appendChild(inputName);
    modalBox.appendChild(inputEmail);
    modalBox.appendChild(btnSend);
    modalBox.appendChild(btnCancel);

    return modalBox;
}
