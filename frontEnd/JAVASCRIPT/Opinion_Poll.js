export class Opinion_Poll{
    constructor() {
        this.input_ID = 1.12;
        this.savedInput_ID=0;
        this.createdInputLength=0;
        this.createdInput_Container = document.getElementById("createdInput-Container")
        this.input_object = JSON.parse(localStorage.getItem("input_Data")) || {
            input_Value: String,
            input_ID:Number,
                inputTheme:{
                 inputTheme_Value:String,
                 input_Theme_ID: Number,
            }
        }
    }

    createInput(){
        try {
            let createdInput= document.createElement("input");
            createdInput.classList.add("opinionInput");
            this.savedInput_ID= createdInput.id=this.input_ID;
            this.createdInput_Container.append(createdInput);

            localStorage.setItem("input_Data",JSON.stringify(this.savedInput_ID))

            this.createdInputLength++;
            this.input_ID +=1.12;
            console.log(this.input_ID);
            console.log(this.createdInputLength);
        }catch(err){
            throw "creating an input didnt work"
        }
    }

}