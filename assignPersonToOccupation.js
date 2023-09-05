// Assign Person to Occupation
// You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation.

// Names	Jobs
// Annie	Teacher
// Steven	Engineer
// Lisa	Doctor
// Osman	Cashier
// Example
// const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
// const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

// assignPersonToJob(names, jobs) ➞ {
//   Dennis: "Butcher",
//   Vera: "Programmer",
//   Mabel: "Doctor",
//   Annette: "Teacher",
//   Sussan: "Lecturer"
// }

const names = ["Dior", "Samantha", "Emily", "Olivia", "Aron"]
const jobs = ["Engineer", "Doctor", "Mechanic", "Teacher", "Cashier"]

function assignPersonToJob(names, jobs){
    let obj = {}
    for(let i = 0; i < names.length; i++){
        obj[names[i]] = jobs[i]
    }
    return obj
}