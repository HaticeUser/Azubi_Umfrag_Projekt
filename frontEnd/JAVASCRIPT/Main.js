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
    export function handleInputCreationRequest(event){
       event.preventDefault();
       opinion_Poll.handleInputCreation();
    }

    export function handlePublicationRequest(event){
        event.preventDefault();
        opinion_Poll.handlePublication();

    }

    export function handleResetRequest(event){
        event.preventDefault();
       opinion_Poll.handleReset();
    }