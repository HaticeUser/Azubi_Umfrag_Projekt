    "use strict"

    import {locationsHandler} from  "./Locationhandler.js"


    let locationHref = new locationsHandler();

    function handleRequest(){

    }
   export function handleLocationID(locationID){

        locationHref.locationHandler(locationID);

    }