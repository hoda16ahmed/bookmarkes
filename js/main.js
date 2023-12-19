var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");
var tableContent =document.getElementById("tableContent");
var search=document.getElementById("search");
var box = document.getElementById("box");

var bookmarkList=[];


if (localStorage.getItem("bookmarks")!==null) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarks"));
      display();
  }


function createBookmark(){
    if(validation()===true){
         var book={
        pname:bookmarkName.value,
       bookURL:bookmarkURL.value
    }
    bookmarkList.push(book)
    clear()
    localStorage.setItem('bookmarks',JSON.stringify(bookmarkList) )
    display() 
    }else{
        box.classList.remove("d-none");
    }
  
}
function clear() {
    bookmarkName.value = "";
    bookmarkURL.value = "";
  }
   function display(){
    var newBookmark = ``;
    for (let i = 0; i < bookmarkList.length; i++) {
        newBookmark += `
        <tr>
        <td>${i+1}</td>
        <td>${bookmarkList[i].pname}</td>              
        <td>
          <button onclick="visit(${i})" class="btn btn-success pe-2" >
            <i class="fa-solid fa-eye pe-2"></i>Visit
          </button>
        </td>
        <td>
          <button onclick="deleteinput(${i})" class="btn btn-danger  pe-2" >
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button>
        </td>
    </tr> `
}
tableContent.innerHTML=newBookmark;
   }

   function deleteinput(index){
    bookmarkList.splice(index,1)
    display()

   }
   function visit(index) {
    open(bookmarkList[index].bookURL)
   
  }
  function validation(){
    var nameRegex = /^[A-Z][a-z]{3,10}/;
    var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    var namevalue=bookmarkName.value;
    var urlvalue=bookmarkURL.value;
    if(nameRegex.test(namevalue)==true&&urlRegex.test(urlvalue)==true){
        return true;
    }else{
        return false;
    }
  }
 function closebox(){
    box.classList.add("d-none");
 }

  
