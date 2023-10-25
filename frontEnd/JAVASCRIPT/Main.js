    "use strict"

    import {locationsHandler} from  "./Locationhandler.js"
    import {OpinionPoll} from "./Opinion_Poll.js";

    let locationHref = new locationsHandler();
    let opinion_Poll = new OpinionPoll();

    export function handleRequest(event){
        event.preventDefault();
        opinion_Poll.createInput();


    }

   export function handleLocationID(locationID){

        locationHref.locationHandler(locationID);

    }