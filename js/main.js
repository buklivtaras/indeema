/* Function adding attributes for element */
function addAttibutes(elem, attributes){
    for(let key in attributes){
        elem.setAttribute(key, attributes[key]);
    }
}

/* Function close and delete element */
function closeModal(modalId){
    document.getElementById(modalId).classList.add('hide-element');
    setTimeout(() => {
        document.getElementById(modalId).remove();
    }, 700);
}