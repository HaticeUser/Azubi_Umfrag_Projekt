export class OpinionPoll{
    constructor() {
        this.input_ID = 1.12;
        this.savedInput_ID=0;
        this.createdInputLength=0;
        this.createdInput_Container = document.getElementById("createdInput-Container")
        this.input_Data_Info = [
            {
            input_Value: String,
            input_ID:Number,
            createdInput_Length:Number,
            inputTheme:{
                inputTheme_Value:String,
                input_Theme_ID: Number,
            }
        }
        ]

        this.createdOpinion_Polls=0;
    }

    createInput( ){

            let createdInput= document.createElement("input");
            createdInput.classList.add("opinionInput");

            this.createdInput_Container.append(createdInput);
             this.savedInput_ID= createdInput.id=this.input_ID;

             this.saveData()

             this.createdInputLength++;
             this.input_ID +=1.12;
             console.log(this.savedInput_ID);
             console.log(this.createdInputLength);
    }


    saveData(){

        this.input_Data_Info[0].input_Value();
        this.input_Data_Info[0].input_ID();
        this.input_Data_Info[0].createdInput_Length();
        this.input_Data_Info[0].inputTheme.input_Theme_ID();
        this.input_Data_Info[0].inputTheme.inputTheme_Value();



    }

}