console.log("Pretty-Notes");
display();
let button=document.getElementById("addbutton");
button.addEventListener("click",function(e){
    let text=document.getElementById("addtext");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesarr=[];
    }
    else{
        notesarr=JSON.parse(notes);
    }
    notesarr.push(addtext.value);
    localStorage.setItem("notes",JSON.stringify(notesarr));
    //to clear input
    addtext.value="";
    console.log(notesarr);
    alert("Congrats :) you have saved your notes")
    display();
});
function display(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesarr=[];
    }
    else{
        notesarr=JSON.parse(notes);
    }
    let allnotes="";
    notesarr.forEach(function(element,index) {
        allnotes+=`
        
        <div class="card">
            <h5>Note -${index+1}</h5>
            <hr>
            <p>${element}</p>
            <button onclick="deletelement(this.id)" id="${index}" class="btn bg-red">delete</button>

        </div>
   
             `
    });

    let notessection=document.getElementById("notessec");
    if(notesarr!=0){
        notessec.innerHTML=allnotes;
    }
    else{
        notessec.innerHTML=`Nothing to show! Please Add notes from Add Your Notes section`;
    }
}

function deletelement(id)
{
   let notes=localStorage.getItem("notes");
   if(notes==null)
{
    notesarr=[];
}
else{
    notesarr=JSON.parse(notes);
}
notesarr.splice(id,1);
localStorage.setItem("notes",JSON.stringify(notesarr));
display();
};
function search1() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsById("notesec");
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
    display();
};