console.log("!!!!")
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  //Unicode Character 'MULTIPLICATION SIGN' (U+00D7)
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeChar = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeChar.length; i++) {
  closeChar[i].addEventListener("click", click);
  function click() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var temp = <HTMLInputElement>document.getElementById("myInput");
  var inputValue = temp.value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  //document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < closeChar.length; i++) {
    closeChar[i].addEventListener("click", click);
    function click() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  console.log(inputValue);

  //why temp.value = "" works, but inputValue = "" not
  temp.value = "";
  console.log(inputValue);
}
function save(){
  var myNewNodelist = document.getElementsByTagName("li");
  var pickedItemsCollection = [];
  for(var i = 0; i < myNewNodelist.length;i++){
    pickedItemsCollection.push(myNewNodelist[i].innerText);
  }
  console.log(myNewNodelist);
  var pickedItemString = JSON.stringify(pickedItemsCollection);
  localStorage.setItem('pickedItemString', pickedItemString);
  console.log(pickedItemsCollection);
}
