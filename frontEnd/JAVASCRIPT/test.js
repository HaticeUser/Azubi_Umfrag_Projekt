export class OpinionPoll{
    constructor() {
        this.input_ID = 1.12;
        this.savedInput_ID=0;
        this.createdInputLength=0;
        this.createdInput_Container = document.getElementById("createdInput-Container");
        this.inputTheme=document.getElementById("themeInput");
        this.inputThemeID=1.1;
        this.input_Data_Info = [];

        this.createdOpinion_Polls=0;
    }

    createInput( ){

        let createdInput= document.createElement("input");
        createdInput.classList.add("opinionInput");
        createdInput.value="";

        this.createdInput_Container.append(createdInput);
        this.savedInput_ID= createdInput.id=this.input_ID;

        this.saveData(createdInput.value,this.savedInput_ID,this.createdInputLength)

        this.createdInputLength++;
        this.input_ID +=1.12;
        console.log(this.savedInput_ID);
        console.log(this.createdInputLength);
    }


    saveData(createdInput,savedInput_ID,createdInputLength){


        let inputData = {
            input_Value: createdInput.value,
            input_ID:savedInput_ID,
            createdInput_Length:createdInputLength,
            inputTheme: {
                inputTheme_Value: this.inputTheme.value,
                input_Theme_ID: this.inputThemeID,
            }}

        this.input_Data_Info.push(inputData);

        console.log(inputData)

        this.inputThemeID+=1.1;
    }

    PublishUserCreation(){

    }

    SendDataToBackend(){

    }

}


export class OpinionPoll {
    constructor() {
        this.input_ID = 1.12;
        this.input_Data_Info = {
            theme: "",
            inputs: []
        };
    }

    createInput() {
        let createdInput = document.createElement("input");
        createdInput.classList.add("opinionInput");
        createdInput.value = "";
        createdInput.id = this.input_ID.toString();

        this.input_Data_Info.inputs.push({
            input_ID: this.input_ID,
            input_Value: ""
        });

        this.input_ID += 1.12;
        console.log(this.input_Data_Info.inputs);
    }

    saveTheme() {
        this.input_Data_Info.theme = document.getElementById("themeInput").value;
        console.log("Theme saved: " + this.input_Data_Info.theme);
    }

    publishUserCreation() {
        // Daten speichern und an das Backend senden
        this.sendDataToBackend(this.input_Data_Info);
    }

    sendDataToBackend(data) {
        // Hier kannst du den Code einfügen, um das Datenobjekt an das Backend zu senden.
        // Zum Beispiel mit fetch() für eine API-Anfrage.
        // fetch('dein-backend-endpunkt', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(responseData => {
        //     console.log('Daten wurden erfolgreich an das Backend gesendet:', responseData);
        // })
        // .catch(error => {
        //     console.error('Fehler beim Senden der Daten an das Backend:', error);
        // });
    }
}






export class OpinionPoll {
    constructor() {
        this.input_ID = 1.12;
        this.input_Data_Info = {
            theme: "",
            inputs: []
        };
    }

    createInput() {
        let createdInput = document.createElement("input");
        createdInput.classList.add("opinionInput");
        createdInput.value = "";
        createdInput.id = this.input_ID.toString();

        this.input_Data_Info.inputs.push({
            input_ID: this.input_ID,
            input_Value: ""
        });

        this.input_ID += 1.12;
        console.log(this.input_Data_Info.inputs);
    }

    saveData() {
        this.input_Data_Info.theme = document.getElementById("themeInput").value;
        console.log("Theme saved: " + this.input_Data_Info.theme);
    }

    publishUserCreation() {
        // Daten speichern und an das Backend senden
        this.sendDataToBackend(this.input_Data_Info);
    }

    sendDataToBackend(data) {
        // Hier kannst du den Code einfügen, um das Datenobjekt an das Backend zu senden.
        // Zum Beispiel mit fetch() für eine API-Anfrage.
        // fetch('dein-backend-endpunkt', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(responseData => {
        //     console.log('Daten wurden erfolgreich an das Backend gesendet:', responseData);
        // })
        // .catch(error => {
        //     console.error('Fehler beim Senden der Daten an das Backend:', error);
        // });
    }
}