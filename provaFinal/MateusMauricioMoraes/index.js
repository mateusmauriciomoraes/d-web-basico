function mudaCor(){
    if(document.getElementById("quartoParagrafo").style.color == "white"){
        document.getElementById("quartoParagrafo").style.backgroundColor = "white";
        document.getElementById("quartoParagrafo").style.color = "black";
        }else{
            document.getElementById("quartoParagrafo").style.backgroundColor = "black";
            document.getElementById("quartoParagrafo").style.color = "white";
    }
}