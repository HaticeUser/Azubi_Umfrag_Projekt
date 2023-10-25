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

             this.saveData(createdInput,this.savedInput_ID,this.createdInputLength)

             this.createdInputLength++;
             this.input_ID +=1.12;
             console.log(this.savedInput_ID);
             console.log(this.createdInputLength);
    }


    saveData(createdInput,savedInput_ID,createdInputLength){

        console.log(createdInput.value)

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


