class Student {
    constructor(Name, Course){
    this.Name  = Name
    this.Course = Course
    }

    GetData(){
       return this.Name, this.Course

    }
    
}

const NewStudent = new Student ("Andrius", Array( "Javascript", "HTML", "CSS"))
console.log(NewStudent)
NewStudent.GetData
