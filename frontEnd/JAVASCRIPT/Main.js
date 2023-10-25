    "use strict"

    import {locationsHandler} from  "./Locationhandler.js"
    import {Opinion_Poll} from "./Opinion_Poll.js"

    let locationHref = new locationsHandler();
    let opinion_Poll = new Opinion_Poll();

   export function handleRequest(){

        opinion_Poll.createInput();

    }
   export function handleLocationID(locationID){

        locationHref.locationHandler(locationID);

    }