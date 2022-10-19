const dragArea = document.querySelector(".appBody"),
    dragText = dragArea.querySelector("h3"),
    button = dragArea.querySelector(".buttonFileBrows"),
    input = dragArea.querySelector("input"),
    imgFullarea = document.querySelector(".imgUploder");
    let Myfile ;
// button ta kaj korar jonne
    button.onclick = () => {
        input.click();
    }
    // class add kora boder change hoar honne 
input.addEventListener("change", function(){
    Myfile = this.files[0];
    imgFullarea.classList.add("active");

    ShowFile();
})
// text chang kora
imgFullarea.addEventListener("dragover", (event)=> {
    event.preventDefault();
    imgFullarea.classList.add("active");
    dragText.textContent = "partamna lod korte";

})
// img upload na korle text change kora
imgFullarea.addEventListener("dragleave", ()=>{
    imgFullarea.classList.remove("active");
    dragText.textContent = "Drag and drop"

})
// 
imgFullarea.addEventListener("drop", (event)=>{
    event.preventDefault();
    Myfile = event.dataTransfer.files[0];

    ShowFile()

})
function ShowFile() {
    let fileType = Myfile.type;
    let VaildEx = ["image/png", "image/jpeg", "image/jpg"];

    if (VaildEx.includes(fileType)){

        let fileReader = new FileReader();

        fileReader.onload = () => {
            let imgUrl = fileReader.result;
            let img = `<img src="${imgUrl}" alt="" srcset="">`

            imgFullarea.innerHTML = img
        }
        fileReader.readAsDataURL(Myfile);
    }
    else{
        alert("img file dao");
        imgFullarea.classList.remove("active");
        dragText.textContent = "Drag and drop";

    }
}