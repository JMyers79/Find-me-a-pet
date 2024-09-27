const allDogs = [
   {
    dogName: "Anthony",
    breed: "terrier-pitbull/mix",
    age: 6

   } ,

   {
    dogName: "Axel",
    breed:"terrier, American Pit Bull/Mix" ,
    age: 2

   } ,

   {
    dogName: "Baluna",
    breed:"terrier-pitbull/mix" ,
    age: .5

   } ,

   {
    dogName: "Beanie",
    breed:"terrier-american pit/hound" ,
    age: 2.5

   } ,

   {
    dogName: "Bebe",
    breed:"terrier-pitbull/mix" ,
    age: 6

   }, 
   
   {
    dogName: "Canelo",
    breed:"chow-chow/mix" ,
    age: 5

   },

   {
    dogName: "Crimson",
    breed:"Geramn Shepherd/mix" ,
    age: 1

   } ,

   {
    dogName: "Daisy",
    breed:"terrier-pitbull/mix" ,
    age: 3

   } ,
   
   {
    dogName: "Ellie",
    breed:"terrier-pitbull/mix" ,
    age: 2

   },

   {
    dogName: "Harrison",
    breed:"bulldog/mastiff" ,
    age: 9

   } 
   
   
   
   
   
   
]

const getAge = () =>{
    const minAge = document.querySelector('#minAge').value;
    console.log(minAge);
    showInfo(minAge);
}
const showInfo = (minAge) => {
    const selectedDogs = []
    allDogs.forEach((item) => {
        if (item.age >= minAge){
            selectedDogs.push(item)
        }

    
    });
    console.log(selectedDogs);
    dogArea = document.querySelector('.dogInfo');
    let dogStr = "";
    selectedDogs.forEach((dog) => {
    dogStr += `
    <h2>Name: ${dog.dogName}</h2>
    <p>Breed: ${dog.breed}</p>
    <p>Age: ${dog.age}</p>`;
    });

    dogArea.innerHTML = dogStr;

}