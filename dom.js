// qtn.1
// const text=document.getElementById('text');
// text.style.color="red";
// text.style.fontSize='40px';
// text.style.textAlign='center'

// qtn.2
// const heading2 = document.getElementsByTagName('h1')[0];
// heading2.style.color='blue';
// heading2.style.textShadow='3px 3px 5px black';

// qtn.3
// const div = document.getElementsByClassName('box')[0];
// div.style.color='red';

// qtn.4 What’s the difference between window vs document?
/*  #Window object : -It is the top most object and outermost element of the object.
    #Document object : -Each HTML document that gets loaded into a window becomes a document object. 
                       -The document contains the contents of the page. 
                       -Using document object, JavaScript can modify, add and delete the HTML elements, attributes CSS styles in the page
    -The window object represents a window/tab containing a DOM document where as document object is property
     of window object that points to the DOM document loaded in that window.*/

//      qtn .5
// const btn1 = document.getElementById('btn1');
// btn1.addEventListener('click',() => {
//      const replace = document.getElementById('replace');
//      replace.innerText = '"Hello World"';
// })

// qtn 6
// const buttton2 =document.getElementById('btn2');
//      buttton2.addEventListener('click',function(){
//           const flex =document.getElementById('container');
//           flex.style.flexDirection = "column";
//      });
   
// qtn 7
// const blue = document.getElementById('world');
//      blue.style.color='blue';
//      blue.id = 'heading'

qtn 8
const button3 = document.getElementById('btn3');
     button3.addEventListener('click',function () {
             const replace = document.getElementById('replace1');
             replace.innerText = '"Welcome to Elevation academy"';
             button3.innerText = 'Replaced';
         })

qtn 9

         function clock(){
            let hh = document.getElementById("hh");
            let mm = document.getElementById("mm");
            let ss = document.getElementById("ss");
        
            let time = new Date();
            let hrs = time.getHours();
            let mins = time.getMinutes();
            let secs = time.getSeconds();
        
            hh.innerText = hrs;
            mm.innerText = mins;
            ss.innerText = secs;
        }
        clock();
        setInterval(clock,1000);

        qtn.10

        function getadd()
{
     const year = document.getElementById('selected');
     year.innerHTML=('Selected '+form.picked[form.picked.selectedIndex].value);
}


qtn.11
function foo(){
 
     //creating form-
     const form = document.createElement('form');
     form.setAttribute('method','get');
     form.setAttribute('action','submit');

     //creating input elements
     //for name-
     const name =document.createElement('input');
     name.setAttribute('name','fname');
     name.setAttribute('type','text');
     name.setAttribute('placeholder','Enter your full name');
     // name.setAttribute('required')
     

     //for phone number-
     const phone =document.createElement('input');
     phone.setAttribute('name','number');
     phone.setAttribute('type','number');
     phone.setAttribute('placeholder','Enter your phone number');
     phone.setAttribute('maxlength','14');
     phone.setAttribute('pattern','[+91][789]{1}[0-9]{9}');
     // name.setAttribute('required')

     //for Email-
     const email =document.createElement('input');
     email.setAttribute('name','email');
     email.setAttribute('type','email');
     email.setAttribute('placeholder','Enter your email');
     email.setAttribute('pattern','[a-zA-Z0-9\-\_\.]+@prepbyte.com');
     // name.setAttribute('required')

      //for DOB-
      const birth =document.createElement('input');
     birth.setAttribute('name','birth');
     birth.setAttribute('type','date');
     birth.setAttribute('placeholder','DD/MM/YYYY');
     birth.setAttribute('min','1995-01-01');
      // name.setAttribute('required')

      //submit button-
      const submit=document.createElement('button');
      submit.setAttribute('type','submit')
      submit.setAttribute('value','submit')
      submit.innerText ='submit';

      //add all child to form-
      form.appendChild(name);
      form.appendChild(phone);
      form.appendChild(email);
      form.appendChild(birth);
      form.appendChild(submit);

      //access div of id form-
      const div = document.getElementById('form');
      //add form to div-
      div.appendChild(form);
}
foo();