document.getElementById('id');//return object or node which has id 'id'




//innerText and textContent are display the text inside element with text content also display hidden text
//innerHTML gives html also if any tag exist in between
//document.querySelector('input[type="password"]);
//chaning of query Selector is possible
//nodeList is returned when we apply qyerySelectorAll on h1
 
const myNodeList=document.querySelectorAll('h1');
//to iterate or change property of nodeList nodeList[0],[1]...will be used

//nodelist has not property map but have forEach
//htmlcollection has not property forEach and map
//first convert it into array by Array.from(htmlcollection || nodeList);
//**********LEARN FROM JS NOTEBOOK ABOUT THESE

//parent.children give html collection to traverse
//by children we can go to parent by parentElement
//parent have property firstElementChild and lastElementChild which select first and last child element of parent

//parent.childNodes give nodelist (collection of textElement div line break...)



//we are creating a function to create element 
//there are two methods to creare text inside a eleemnt
const div=document.createElement('div')
div.innerText="text to display"
//second approach
const addText=document.createTextNode("text to display")
div.appendChild(addText)//more optimised because innerHTML traverse(which takes time) and rewrite code but appendChild add eleement


 //    <ul>
 //        <li>Item 1</li>
 //        <li>Item 2</li> <!-- This is the second li -->
 //        <li>Item 3</li>
 //        <li>Item 4</li>
 //    </ul>
 // let secondItem = document.querySelector("li:nth-child(2)");
//select element and change value or
//there is also property outerHTML where we have to pass html also know
//edit or remove element 
//create a new element of that type with changed values then use method
//oldOne.replaceWith(newOne)
