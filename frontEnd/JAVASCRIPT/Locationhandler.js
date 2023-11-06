"use strict"

export class locationsHandler{
    constructor() {

        this.Links=[
            {
                LocID: 0.12,
                urlLink: "../HTML/register.html",
            },
            {
                LocID: 0.24,
                urlLink: "../HTML/Opinion_Poll.html",
            },
            {
                LocID: 0.36,
                urlLink: "../HTML/News.html",
            },
            {
                LocID: 0.48,
                urlLink: "../HTML/Support.html",
            },
            {
                LocID: 0.60,
                urlLink: "../HTML/Profile.html",
            },
            {
                LocID: 0.72,
                urlLink: "../HTML/Opinion_Oracale.html",
            },


    ]}


    locationHandler(locationID){

        for(let i = 0 ; i <= this.Links.length; i++){
            try{

                if(locationID == this.Links[i].LocID ){

                location.href=this.Links[i].urlLink;

                break;
                }

            }catch(err){
                throw "Dieser link wurde nicht gefunden";
            }

        }

    }

}



