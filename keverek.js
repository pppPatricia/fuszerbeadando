var fuszerNevek = [];
fuszerNevek["Gyros"] = "oregánó, kakukkfű, fokhagyma, só, bors, szerecsendió, római kömény";
fuszerNevek["Mézeskalács"] = "kardamom, csillagánizs, fahéj, szegfűbors, szegfűszeg, gyömbér, szerecsendió";
fuszerNevek["Provence-i"] = "rozmaring,majoranna,bazsalikom,borsikafű,kakukkfű,tárkony";
fuszerNevek["Olasz"] = "bazsalikom, majoranna,oregánó,rozmaring,kakukkfű,fokhagyma-granulátum";
fuszerNevek["Magyaros"] = "fokhagyma, kömény, pirospaprika, petrezselyem, bors";
fuszerNevek["Curry"] = "chilipaprika, koliandermag, római kömény, kurkuma, görögszéna, mustármag, bors, gyömbér";
fuszerNevek["Pumpkin spice"] = "fahéj, gyömbér, szerecsendió, szegfűszeg, szegfűbors, kardamon, bors";



function keverekKiiras(elem, index){
    var ujElem = document.createElement("option")
    var ujSzoveg = document.createTextNode(index); 
    ujElem.appendChild(ujSzoveg);
    document.getElementById("fkeverek").appendChild(ujElem);
}
function fuszerKiiras(fkeverek){
    document.getElementById("fuszer").innerHTML=fuszerNevek[fkeverek];
}
