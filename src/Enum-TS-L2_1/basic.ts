enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

//- V1 mit switch
// function showHtmlError() {
 
//     const randomValue = Math.floor(Math.random() * 6);
    
//     switch (randomValue) {
//         case 0:
//             console.log(`Fehler: ${HtmlError.OK} (OK)`);
//             break;
//         case 1:
//             console.log(`Fehler: ${HtmlError.OK} (OK)`);
//             break;
//         case 2:
//             console.log(`Fehler: ${HtmlError[HtmlError.OK]} (${HtmlError.OK})`);
//             break;
//         case 3:
//             console.log(`Fehler: ${HtmlError[HtmlError.Redirect]} (${HtmlError.Redirect})`);
//             break;
//         case 4:
//             console.log(`Fehler: ${HtmlError[HtmlError.BadRequest]} (${HtmlError.BadRequest})`);
//             break;
//         case 5:
//             console.log(`Fehler: ${HtmlError[HtmlError.InternalServerError]} (${HtmlError.InternalServerError})`);
//             break;
//     }
// }


function showHtmlError(){
    const randomValue = Math.floor(Math.random() * 6);
    
    const errorMapping: { [key: number]: HtmlError } = {
        0: HtmlError.OK,
        1: HtmlError.OK,
        2: HtmlError.OK,
        3: HtmlError.Redirect,
        4: HtmlError.BadRequest,
        5: HtmlError.InternalServerError
    };
    
    const error = errorMapping[randomValue];
    
    console.log(`Fehler: ${HtmlError[error]} (${error})`);
}


showHtmlError(); 