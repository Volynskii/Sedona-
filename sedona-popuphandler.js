
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var openForm = document.querySelector('.openPopupButton');
var form = document.querySelector('.modal');
var dialogHandle = form.querySelector('.second-block');
var buttonClickHanlder = function(evt) {
if (form.classList.contains('modal')) {
     form.classList.remove('modal');
    form.classList.add('modal-login');
   }
    else if (form.classList.contains('modal-login')) {
       form.classList.remove('modal-login');
    form.classList.add('modal'); 
    } 
};  
var buttonKeydownHandler = function(evt) {
    console.log(evt.BUBBLING_PHASE);
    if (form.classList.contains('modal-login') &&
        evt.keyCode === ESC_KEYCODE) {
       form.classList.remove('modal-login');
    form.classList.add('modal'); 
}
};


openForm.addEventListener('click', function () {
   buttonClickHanlder() 
});
openForm.addEventListener('keydown', function (evt) {
   buttonKeydownHandler(evt)
});

var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function (evt) {
    console.log(evt.target === xhr);
    console.log(xhr.responseText);
}
                    );
JSON.parse
JSON.stringify
xhr.open('POST', 'file:///C:/Users/%D0%90%D0%BD%D1%82%D0%BE%D0%BD/Desktop/MY%20NEW%20WEBSITE/SEDONA.html');
xhr.send();