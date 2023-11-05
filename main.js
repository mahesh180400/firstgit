let item=document.getElementById('addForm')
let dd=document.getElementById('items')
let filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
item.addEventListener('submit',ee)
dd.addEventListener('click',remov)

function ee(e)
{
    e.preventDefault()
    console.log(1)

let n=document.getElementById('item').value
var li=document.createElement('li')
li.className='list-group-item'
li.appendChild(document.createTextNode(n))
dd.appendChild(li)

let deletes=document.createElement('button')
deletes.className="btn btn-danger btn-sm float-right delete"
deletes.appendChild(document.createTextNode('x'))
li.appendChild(deletes)
dd.appendChild(li)
}
function remov(e)
{
if(e.target.classList.contains('delete'))
{
    if(confirm('Are You Sure ?'))
    {
        var li=e.target.parentElement;
        dd.removeChild(li)
    }
}
}
function filterItems(e)
{
let text=e.target.value.toLowerCase();
var items=dd.getElementsByTagName('li')
Array.from(items).forEach(function(item){
 let itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1)
    {
        item.style.display='block';
    }else{
        item.style.display="none"
    }
}) 
}