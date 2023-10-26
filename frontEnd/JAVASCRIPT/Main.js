    "use strict"

    import {locationsHandler} from  "./Locationhandler.js"
    import {OpinionPoll} from "./Opinion_Poll.js";

    let locationHref = new locationsHandler();
    let opinion_Poll = new OpinionPoll();



    // Welcome.html functions

   export function handleLocationID(locationID){

        locationHref.locationHandler(locationID);

    }


    // Opinion_Poll.html functions
    export function handleInputCreationRequest(){
        opinion_Poll.handleInputCreation();
    }

    export function handlePublicationRequest(){
        opinion_Poll.handlePublication();

    }

    export function handleResetRequest(){
       opinion_Poll.handleReset();
    }