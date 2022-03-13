var counter =0;
function addToNotes() {
    const inp = document.getElementById("noteText");
    const notesList = document.getElementById("notesList");
    if(inp.value=="")   {
        alert("not possible, String is empty");
        return;
    }

    var li_note = `<li id="note${++counter}"> ${inp.value} <button class='btn btn-sm btn-danger' onClick="deleteFromNotes(${counter})"> delete</button> </li>`;
    notesList.innerHTML += li_note;
    inp.value="";

    
}


function deleteFromNotes(id){
    const li_note = document.getElementById("note"+id);
    li_note.remove();
}

function addates(){
    const currentdate = new Date(2022-02-20);
    const d = document.getElementById("noteText1");
    const notesList = document.getElementById("notesList");
    if(d.value=="")   {
        alert("you need to specify the date");
        return;
    }
    if (d.value.Date != currentdate.getTime) {
        alert("The date is in the past.");
        var li_date = `<li id="note${++counter}"> ${d.value} <button class='btn btn-sm btn-danger' onClick="deleteFromNotes(${counter})"> delete</button> </li>`;
        notesList.innerHTML += li_date;
        d.value="";
        return;
    }
    else {
        var li_date = `<li id="note${++counter}"> ${d.value} <button class='btn btn-sm btn-danger' onClick="deleteFromNotes(${counter})"> delete</button> </li>`;
        notesList.innerHTML += li_date;
        d.value="";
    }
    
    
}

function submitresult(){
    const sub = document.getElementById("submittext");
    const notesList = document.getElementById("notesList");
    var list = [];
    if (counter>=1){
        for (var i=0;i<=counter;i++){
            list.push(document.getElementById(note$i));
        }
    
        if(list.includes(sub.value)){
            alert("We found the element you're looking for:" + sub.value);
            sub.value="";
        return;
        }    
        else {
            alert("We didn't find what you're looking for.");
            sub.value="";
        return;
        }
    }
    
}