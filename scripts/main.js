let myHeading=document.querySelector('h1');
const myBtn=document.querySelector('button')
const myImage=document.querySelector('img')




myHeading.textContent="Helllloooo Worlllllllld";
let myLocalStorageName=localStorage.getItem('username');
console.log(myLocalStorageName)
if(! myLocalStorageName){
    setUserName();
}else{
    myHeading.textContent=`Chorom is cool:${myLocalStorageName}` ;
}

// const htmlPage=document.querySelector('html');
// htmlPage.addEventListener('click',() =>{
//     alert("hellooooo");
//     prompt("enter your name:");
// })


// myImage.addEventListener('click',()=>{
//     scrImage=myImage.getAttribute('src');
//     if (scrImage === 'img/tiger.jpeg'){
//         myImage.setAttribute('src','img/flower.jpeg')
//     }else{
//         myImage.setAttribute('src','img/laptop.jpeg')
//     }

// })

myImage.onclick =() => {
    scrImage=myImage.getAttribute('src');
    if (scrImage === 'img/tiger.jpeg'){
        myImage.setAttribute('src','img/flower.jpeg');
    }else{
        myImage.setAttribute('src','img/laptop.jpeg');
    }

}

function setUserName(){
    const userName=prompt("Enter Your UserName:");
    
    if(!userName ){
        setUserName();
        
    }else{
       
        localStorage.setItem('username',userName);
        myHeading.textContent=`Chorom is cool:${userName}`;

    }
}
myBtn.onclick = () =>{
    setUserName();
}