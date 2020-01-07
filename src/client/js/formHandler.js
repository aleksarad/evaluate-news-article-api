import { checkIfURL } from "./nameChecker";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value;
 
    if (Client.checkIfURL(url)) {
       

        
    } else {
        alert('invalid URL, please try again')
    }

}
export { handleSubmit }
