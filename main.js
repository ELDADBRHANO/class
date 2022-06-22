// // 1
// class Student{
//   constructor(privateName,lastName,idd){
//     this.privateName= privateName;
//     this.lastName= lastName;
//     this.idd = idd;
//   };
// }

// 2
// let some = new Student("Eldad","Brhano","209245398");
// let some1 = new Student("yon","yizhak","2234345")
// console.log(some,some1);

// 3
// class User {
//   constructor(privateName, lastName, age, email) {
//     this.privateName = privateName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//   }
// }

// const show1 = new User("Eldad", "proggraming", "23", "ebrhano@gmail.com");
// const show2 = new User("yon", "doesnt", "25", "yon@gmail.com");
// const show3 = new User("lior", "dawit", "26", "lior@realSUCKS.com");
// let text = document.createElement("span");
// document.body.append(text);
// const arrayObj = [show1, show2, show3];
// arrayObj.forEach((item) => {
//   for (const key in item) {
//       text.innerHTML += "<br>"+ item[key];
//   }
// });


// 5
// class User{
//   constructor(age,email,fullName){
//     this.age = age;
//     this.email = email;
//     this.fullName = fullName;
//   }
// }


// function clickSome() {
//   const show1 = new User(age_input.value,email_input.value,name_input.value);
//   for (const key in show1) {
//     table.innerHTML += `<tr> <td> ${show1[key]} </td> </tr>`;
//     table.style="color:green; border:2px solid black; ";
//   }
// }




// class Dog{
//   constructor(fullName,typeOfDog,yearBirth){
//     this.fullName=fullName;
//     this.typeOfDog=typeOfDog;
//     this.yearBirth=yearBirth;
//   }
// }

// const arrayDog=[];
// let doggy;
// function some() {
//   for(let i = 0; i <5; i++){
//     arrayDog.push(doggy);
//      doggy = new Dog("eldadosh","cheazu","1999");
//      console.log(doggy)
//     }
// }
// some()



// 9
// class Teacher{
//   constructor(privateName,lastName,grade,email){
//     this.privateName=privateName;
//     this.lastName=lastName;
//     this.grade=grade;
//     this.email=email;
//   }
// }


// 10
// let arrryObj=[];
// function somee() {
//   let teacher = new Teacher (name_input.value,last_input.value,email_input.value,grade_input.value);
//   if(arrryObj.length<4){
//     arrryObj.push(teacher);
//     console.log(arrryObj);
//     arrryObj.forEach(item => {
//       for (let key in item) {
//         tbodyy.innerHTML+= `<td>${item[key]}</td>`
//         tbodyy.style="color:red; border: 1px solid;"
//       }
      
//     });
//   }
  
// }


// class Course{
//  constructor(courseName,isLucturer,grades,students){
//   this.courseName=courseName;
//   this.isLucturer=isLucturer;
//   this.grades=grades;
//   this.students=students;
//  }
// }


// function printToScreen() {
//   let show = new Course("FULL-STACK","YES",["20","89","55","66","43","22","7","100"],["lior","eldad","shimon","batel","dalia","daniel","netanel"]);
// for (const key in show) {
//   id_div.innerHTML+= `${key} : ${show[key]}` + " ";
// }
// id_div.innerHTML+= show.students.sort();  
// id_div.innerHTML+= "<br>"+ show.grades.sort((a,b) => {
//   return b-a 
// }) 
// }
// printToScreen()



class Student{
  constructor(fullName,grade,id){
    this.fullName=fullName;
    this.grade=grade;
    this.id=id;
  }
}

let show = new Student("Eldad Brhano","seventh","209245333");
let show2 = new Student("daniel","maleda","309279863");
console.log(show,show2);


class HighSchoolStudent extends Student{
}

let show3= new HighSchoolStudent("lior dawit","10","2397e912");
console.log(show3);




class UniversityStudent extends Student{
  constructor(fullName,grade,id,eyeColor,hairColor){
    super(fullName,grade,id);
    this.eyeColor=eyeColor;
    this.hairColor=hairColor
  }
}
let show4= new UniversityStudent("netanel tespay",10,"32943284","brown","black")
console.log(show4)




class ElementrySchool extends Student{

}

let show5= new ElementrySchool("may","tadega","4387543");
console.log(show5);



