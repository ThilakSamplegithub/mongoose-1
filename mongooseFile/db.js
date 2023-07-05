const mongoose = require("mongoose");
// console.log(mongoose)
const studentModel = require("./studentSchemaFile");
mongoose.connect("mongodb://127.0.0.1:27017/school");
run();
async function run() {
  try {
    //  let res= await studentModel.insertMany([{name:"Thilak",isMarried:false,age:31}])
    // this is 2step way and mongoose prefers this way
    // const newUser=  new studentModel({name:"Vishal",age:26,isMarried:false})
    // await newUser.save()
    // This is 3rd way just 1step
    const newUser = await studentModel.create({
      name: "Rustle",
      age: 24,
      isMarried: false,
      createdAt:new Date(),
      updatedAt:new Date(),
      email:"truimphThilak@gmail.com",
      address:{
        city:"Hyd",
        street:"Mankamma"
      },
      hobbies:["Dancing","Reading Books"]
    });
    // console.log(newUser);
    console.log(await studentModel.deleteMany({age:{$gte:27}}))
  } catch (err) {
    console.log(err.message);
  }
}
// If I give name as 5655 an number. It will post because I want string and number can be converted into string
