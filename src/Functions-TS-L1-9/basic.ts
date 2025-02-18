function vorstellung(vorname: string, nachname: string, geburtsort: string, alter: number, wohnort: string) {
  console.log("Mein Name ist " + vorname + " " + nachname + ". Ich bin in " + geburtsort + " geboren. Ich lerne bei SuperCode. Ich bin " + alter + " Jahre alt. Ich wohne in " + wohnort + ".");

  document.getElementById("output").innerHTML = "Mein Name ist " + vorname + " " + nachname + ". Ich bin in " + geburtsort + " geboren. Ich lerne bei SuperCode. Ich bin " + alter + " Jahre alt. Ich wohne in " + wohnort + ".";
}

vorstellung("Aurora", "Stardust", "New York", 20, "Celestia");

