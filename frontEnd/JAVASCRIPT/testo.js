export class OpinionPoll {
    constructor() {
        this.inputData = [];
        this.inputIdCounter = 12;
        this.createdInputContainer = document.getElementById("createdInput-Container");
    }

    createInput() {
        let createdInput = document.createElement("input");
        createdInput.classList.add("opinionInput");
        createdInput.id = `input_${this.inputIdCounter}`;
        this.inputIdCounter+=12;
        this.createdInputContainer.append(createdInput);

        let inputObject = {
            id: createdInput.id,
            value: "",
            theme: ""
        };

        this.inputData.push(inputObject);
    }

    publishCreation(){

    }

    updateInputData(inputId, value, theme) {
        let inputObject = this.inputData.find(input => input.id === inputId);
        if (inputObject) {
            inputObject.value = value;
            inputObject.theme = theme;
        }
    }

    sendDataToBackend() {
        // Hier senden Sie this.inputData an das Backend, z.B. mit einer POST-Anfrage.
        // Verwenden Sie dazu z.B. fetch() oder eine AJAX-Bibliothek wie Axios.
        // Beispiel mit fetch():
        fetch('URL_DES_BACKEND_API_ENDPOINTS', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.inputData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Daten erfolgreich gesendet:', data);
            })
            .catch(error => {
                console.error('Fehler beim Senden der Daten:', error);
            });
    }}