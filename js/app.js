const $=document
let textTodoElem=$.querySelector('#new-todo')
let btnAddTodoElem=$.querySelector('#addButton')
let btnClearTodoElem=$.querySelector('#clearButton')
let todoBtnsItems=$.querySelector('.todo__buttons')
let todoBtnComplete=$.querySelector('#btnComplete')
let todoBtnDelete=$.querySelector('#btnDelItem')
let todosElem=$.querySelector('.todos')
let modalElem=$.querySelector('.modal')
let modalCloseBtn=$.querySelector('#btnclose')
let brightElem=$.querySelector('#range')

let newTodoObject={}
let newTodoList=[]
let localstorageItems;
// let typeCompelete=1
function addTodoHandler(){
    if(textTodoElem.value){
        // console.log(newTodoObject,newTodoList)
        newTodoRowLocalStorage(1,textTodoElem.value)
        prepareTodos()
        clearTextTodo()
        // 
    }else{
        console.log('fff')
        modalElem.style.display='block'
        

    }
}

function getLocalStorage(){
    const initialBrightnessValue = 100;
    brightHandler({ target: { value: initialBrightnessValue } });
    localstorageItems=localStorage.getItem('TodoList')
    if(!localstorageItems){
        console.log('tezt')
        localStorage.setItem('TodoList',JSON.stringify(newTodoList))
    }else{
        prepareTodos()
    }
    
}

function prepareTodos(){
        newTodoList=JSON.parse(localStorage.getItem('TodoList'))
        console.log('1')
        if(newTodoList){
            
        
        let childtodosElem=todosElem.querySelectorAll('.todo')
        childtodosElem.forEach((child)=>{
           todosElem.removeChild(child)
        })
        
        newTodoList.forEach((element) => {
            
        
            newTodoRow(element)

        })
    }else{
        console.log('2')
        newTodoList=[]
    }

}

function newTodoRowLocalStorage(type,textP){
    let statusType;
    if(type===1){
        statusType='UnCompelete'
        
    }else{
        statusType='Compelete'
    }
    
    newTodoObject={
        text:textP,
        vasiat:statusType}
    newTodoList=JSON.parse(localStorage.getItem('TodoList')) || []//.push(newTodoObject)
    newTodoList.push(newTodoObject)
    // console.log(newTodoObject,newTodoList)
    // localStorage.setItem('TodoList',JSON.stringify(newTodoList))
    localStorage.setItem('TodoList',JSON.stringify(newTodoList))
    
    
}

function newTodoRow(todo){
    
    let newTodoDiv=$.createElement('div')
    newTodoDiv.className='todo'

    let newtodoPElem=$.createElement('p')
    newtodoPElem.className="description"
    newtodoPElem.innerHTML=todo.text

    let newTodoBtns=$.createElement('div')
    newTodoBtns.className='todo__buttons'

    let newbtnComplete=$.createElement('button')
    newbtnComplete.innerHTML=todo.vasiat
    newbtnComplete.className="btn btn-success"
    newbtnComplete.setAttribute('id','btnComplete')

    newbtnComplete.addEventListener('click',newbtnCompleteHandler)


    let newbtnDelItem=$.createElement('button')
    newbtnDelItem.innerHTML='Delete'
    newbtnDelItem.className="btn btn-danger"
    newbtnDelItem.setAttribute('id','btnDelItem')
    
    newbtnDelItem.addEventListener('click',newbtnDelItemHandler)
    

    newTodoBtns.append(newbtnComplete,newbtnDelItem)
    newTodoDiv.append(newtodoPElem,newTodoBtns)

    todosElem.append(newTodoDiv)
    

}

function newbtnCompleteHandler(event){
    let parentRemoveTodo=event.target.parentElement.parentElement
    let pElem=parentRemoveTodo.querySelector('p').innerHTML
    localstorageItems=JSON.parse(localStorage.getItem('TodoList'))
    localstorageItems.forEach((todo,index)=>{
        
        if(todo.text===pElem){
           localstorageItems.splice(index,1)
           localStorage.setItem('TodoList',JSON.stringify(localstorageItems))
           newTodoRowLocalStorage(2,todo.text)
           prepareTodos()
        }
    })
}

function newbtnDelItemHandler(event){
    
    let parentRemoveTodo=event.target.parentElement.parentElement
    let pElem=parentRemoveTodo.querySelector('p').innerHTML
    localstorageItems=JSON.parse(localStorage.getItem('TodoList'))
    localstorageItems.forEach((todo,index)=>{
        
        if(todo.text===pElem){
           localstorageItems.splice(index,1)
           localStorage.setItem('TodoList',JSON.stringify(localstorageItems))
           prepareTodos()
        }
    })
}

function clearTextTodo(){
    textTodoElem.value=''
}

function closeModal(){
    modalElem.style.display='none'
}

function brightHandler(event){
    console.log('1')
    if(event.target){
        $.body.style.filter="brightness("+ event.target.value/100+")"

    }else{
        console.error('not found')
    }
}

function clearTodos(){
    // localstorageItems=localStorage.getItem('TodoList')
    localStorage.removeItem('TodoList')
    todosElem.innerHTML=''
    // prepareTodos()
}

function inputElemHandler(event){
    if(event.key==="Enter"){
        addTodoHandler()
    }
}


btnAddTodoElem.addEventListener('click',addTodoHandler)
window.addEventListener('load',getLocalStorage)
modalCloseBtn.addEventListener('click',closeModal)
btnClearTodoElem.addEventListener('click',clearTodos)
brightElem.addEventListener('input',brightHandler)
textTodoElem.addEventListener('keydown',inputElemHandler)