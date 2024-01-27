//console.log(document); //log html file
//const formEL = document.forms[0]; //access form element by using index
const formEL = document.forms.contact_form; // by using name attribute

//get Elements from form
const name = formEL.elements[0]; //by index
const fullNameEl = formEL.elements.fullname;
const emailEl = formEL.elements.email;
const messageEl = formEL.elements.message;
const checkboxEL = formEL.elements.checkbox;

// console.log(formEL);
//console.log(formEL.elements); //get all element
// console.log(fullName);
// console.log(email);
// console.log(message);
// console.log(name.placeholder);

//Object destructuring
const {fullname, email, message} = formEL.elements;  
// console.log(fullname, email, message);

formEL.addEventListener("submit", (event) => {
    event.preventDefault(); //Stops Default Actions (doesn't refresh page)
    // console.log("Form Submitted", fullNameEl.value, checkboxEL.checked);

    // console.log(event.defaultPrevented);
})

// const submit = document.querySelector("form button");
// const handleSubmit = (event) =>{
//     event.preventDefault();
//     const formData = new FormData(formEL);
//     console.log(formData);
// }

// const handleFormdata = (e) =>{
//     console.log("formdata fired");

//     const formData = e.formData;
//     console.log(formData.append("api-key","value"));
//     console.log([...formData.values()]);
//     console.log([...formData.entries()]);
//     console.log([...formData.keys()]);
//     console.log(formData.get("email"));
//     console.log(formData.getAll("email")); //for checkbox values
//     console.log(formData.has("gender"));
//     formData.set("key","value");
//     formData.delete("checkbox")
//     console.log([...formData.entries()]);
//     console.log(formData);
// }
// formEL.addEventListener("submit",handleSubmit);
// formEL.addEventListener("formdata", handleFormdata);

const formEl = document.forms.contact_form;
const submit = document.querySelector("form button");

const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(formEl);

    // ...QueryString: content-type : application/x-www-form-urlencoded 
    // fullname=Harishma&email=harishmarsuseel%40gmail.com&message=Hai&checkbox=on
    const data = [...formData.entries()]
    // console.log(data);

    // Using map method 
    const datamap = data.map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join("&");
    const datamap1 = data.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&")
    console.log(datamap1);

    // using URLSearchParams 
   const datamap2 = new URLSearchParams(formData).toString();
   console.log(datamap2);

//    JSON Object
const jsondata = Object.fromEntries(formData)
console.log(jsondata);

// JSON string - data send to backend
const jsonData = JSON.stringify(Object.fromEntries(formData));
console.log(jsonData);


}

formEl.addEventListener("submit", handleSubmit);