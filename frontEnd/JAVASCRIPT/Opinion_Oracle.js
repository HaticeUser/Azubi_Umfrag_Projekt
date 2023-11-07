/*

*Modell Design und html anfragen bearbeiten,
*front end logik ausbauen (getrennt vom html).

*

Bei der Logik ist es so
Wenn wir auf Opinion_Poll eine umfrage erschaffen, dann posten, wird alles inm backend gespeichert und an eine
datenbank übergeben, gleichzeitig verarbeitet das backend die daten und gibt sie im frontend
auf dieser seite aus.

Also müssen wir hier eine get Anfrage posten.
Sobald man bei der Opinion_poll seite auf posten klickt, öffnet sich diese
Seite und sendet anfragen ans backend die anfragen an die Datenbank senden
und geben es und per api stelle wieder zurück, wo dann javascript
also hier, die daten nutzt um es ins html mit ihren designs steckt.



Beim klicken, der check inbox button, sogesagt bei der auswahl der antwort
werden alle anderen checkboxen disabled

-Nach der pause, vom klick der einen webseite auf die anderen bringen
location-handler(); (fertig)

    fetch('https/fakesite', {
    Method:"GET",
    header:{
        'Content-Type':'application/json'
    },

    })
    .then(res=>res.json())
        .then(data=> console.log(data))
        .catch(err=>{
            alert("Backend daten annahme fehler :" + err)
        })


*
 */



