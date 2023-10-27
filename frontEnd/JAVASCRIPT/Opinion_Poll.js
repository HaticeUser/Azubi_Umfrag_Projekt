
export class OpinionPoll {

    constructor() {
        this.createdInput_Container = document.getElementById("createdInput-Container");
        this.theme_Input = document.getElementById("themeInput");
        this.theme_Input_ID = 0,

        this.input = document.createElement("input");
        this.deleteButton = document.createElement("input");
        this.opinionInput_Container = document.createElement("div");

        this.createdInput=0;

        this.deleteButtons=[];
        this.inputs=[];
        this.inputValues=[];


        this.input_Data = [];

    }

    handleInputCreation(){

        if(this.createdInput < 4 ){
            this.createdInput++;
        this.input = document.createElement("input");
        this.deleteButton = document.createElement("input");
        this.deleteButton.setAttribute("type","button");
        this.deleteButton.setAttribute("value","X");
        this.opinionInput_Container = document.createElement("div");
        this.opinionInput_Container.classList.add("OpinionInput-Container");
        this.deleteButton.classList.add("deleteInput-btn");
        this.input.type="text";
        this.input.placeholder="Answer";
        this.input.size=30;
        this.input.classList.add("opinionInput");
        this.createdInput_Container.appendChild(this.opinionInput_Container);
        this.opinionInput_Container.append(this.input);
        this.opinionInput_Container.appendChild(this.deleteButton);
        this.inputs.push(this.input);

        this.deleteButtons.push(this.deleteButton);

            this.deleteButtons.forEach((delBtn) => {
                delBtn.addEventListener("click", (event)=>{
                    event.target.parentElement.remove();
                    this.createdInput--;


                })

            })


            this.inputs.forEach((input)=>{
            input.addEventListener("keydown",(event)=>{
                    if(event.key === "Enter"){
                        event.preventDefault();
                        if(this.input.value==""){
                            alert("please remove the invalid input or write something in it")
                        }else{

                            this.inputValues.push(input.value);
                            console.log(this.inputValues)
                        }

                    }
                })

            })





        }

    }

    saveData(){

        let inputData ={
            input_Theme_Value:this.theme_Input.value,
            input_Theme_ID:this.theme_Input_ID,
            input:{
                input_Value:[],
                input_ID:[],
                inputs_Length: this.createdInput,
            },
        }





        for(let i = 0; i < this.createdInput; i++){

            inputData.input.input_Value.push(this.inputValues[i]);
        }

        this.input_Data.push(inputData);

        console.log(this.input_Data);


    }
    handlePublication(){
        this.saveData();


    }

    handleReset(){

    }








//Backend Logik

    sendDataToBackend(){

    }
}

