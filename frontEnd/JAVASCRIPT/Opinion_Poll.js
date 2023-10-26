
export class OpinionPoll {

    constructor() {
        this.createdInput_Container = document.getElementById("createdInput-Container");
        this.theme_Input = document.getElementById("themeInput");

        this.input = document.createElement("input");
        this.deleteButton = document.createElement("input");
        this.opinionInput_Container = document.createElement("div");

        this.createdInput=0;

        this.deleteButtons=[];

        this.input_Data = [

        ]

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

        this.deleteButtons.push(this.deleteButton);

console.log(this.deleteButtons);
        }

        this.deleteButtons.forEach(function (delBtn) {
            delBtn.addEventListener("click", ()=>{
                this.createdInput--;
                this.opinionInput_Container.remove(this.createdInput_Container);
            })

        })






    }

    saveData(){

    }
    handlePublication(){

        console.log(this.input.value);
        console.log();


    }

    handleReset(){

    }








//Backend Logik

    sendDataToBackend(){

    }
}

