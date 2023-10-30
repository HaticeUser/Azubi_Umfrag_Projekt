
export class OpinionPoll {

    constructor() {
        this.createdInput_Container = document.getElementById("createdInput-Container");
        this.theme_Input = document.getElementById("themeInput");
        this.theme_Input_ID = 0;

        this.input = document.createElement("input");
        this.deleteButton = document.createElement("input");
        this.opinionInput_Container = document.createElement("div");

        this.createdInput = 0;
        this.generated_ObjectID = 111.1;
        this.inputID = 0;

        this.opinionInput_Array =[];
        this.deleteButtons = [];
        this.inputs = [];
        this.inputValues = [];
        this.inputIDs = [];
        this.IDs = [];


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
            this.input.id = this.inputID++;
            console.log(this.input.id);

            this.inputIDs.push(this.input.id);
            console.log(this.inputIDs);
            this.createdInput_Container.appendChild(this.opinionInput_Container);
            this.opinionInput_Container.append(this.input);
            this.opinionInput_Container.appendChild(this.deleteButton);
            this.inputs.push(this.input);
            this.opinionInput_Array.push(this.opinionInput_Container);


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
                        if(input.value == ""){
                            alert("please remove the invalid input or write something in it")
                        }else{
                            // Darum Kümmern das nicht doppelt gespeichert wird
                            // speichern der einzelnden, nicht aller input.values mit einem enter klick
                            this.inputValues.push(input.value);
                            console.log(this.inputValues)
                        }

                    }
                })

            })





        }

    }

    saveData(){

        let objIdToString = this.generated_ObjectID.toString();
        let returnObjIDNumbers = objIdToString.substring(0,5);

        let inputData ={
            input_Theme_Value:this.theme_Input.value,
            input_Theme_ID:this.theme_Input_ID,
            input:{
                input_Value:[],
                input_ID:[],
                inputs_Length: this.createdInput,
            },
            object_ID: returnObjIDNumbers,
        }

        for(let i = 0; i < this.createdInput; i++){
            inputData.input.input_Value.push(this.inputValues[i]);
            inputData.input.input_ID.push(this.inputIDs[i]);
            console.log(inputData.input.input_ID);
        }

        this.input_Data.push(inputData);
        this.theme_Input_ID++;
        console.log(this.input_Data);
        this.generated_ObjectID += 111.1;
        console.log(this.generated_ObjectID);
        console.log(returnObjIDNumbers);
    }
    handlePublication(){
        if(this.input.value == "" || this.theme_Input.value == ""){
            alert("you need to write something into the input field");
        }else{
            this.saveData();
            this.handleReset();

        }


    }

    handleReset(){

        this.createdInput = 0;
        this.theme_Input.value = "";
        this.inputs.forEach((input)=>{
            input.removeEventListener("keydown",this.handleInputKeyDown);
            input.value = "";
        })

        // removen der divs kümmern


            this.opinionInput_Array.forEach((opInp_Container) => {

                opInp_Container.remove();

            })




        this.input_Data = [];
        this.inputs = [];
        this.inputValues = [];
        this.opinionInput_Array = [];


    }








//Backend Logik

    sendDataToBackend(){

    }
}

//mitnehmen für nächste wochen
/*
* Delete buttons fixen 2-3h (gefixt)
*
* id herausgabe input felder 30-40min (gefixt)
* eingabe der value und speicher im Array fixen 4h
* fetch data programmieren für das backend 5 h
* */
