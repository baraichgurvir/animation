var result = '';
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

if (document.getElementsByTagName('animscript').length === 0) {
        
} else if (document.getElementsByTagName('animscript').length === 1) {
    const charactersLength = characters.length;
    for ( let i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let styles = new Styles();
} else {
    console.error("Error: Duplicates Avaliable")
}
