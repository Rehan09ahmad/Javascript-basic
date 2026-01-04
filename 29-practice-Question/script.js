
{
let companies = ["Bloomberg", "Microsoft", "Ubar", "Googal", "IBM", "Netflix"];
companies.shift()
console.log(companies)  // remove Bloomberg to the help of shift 
}


{
    let companies = ["Bloomberg", "Microsoft", "Ubar", "Googal", "IBM", "Netflix"];
    companies.splice(2, 1, "ola")
    console.log(companies) // replace ubar & add ola to the help of splice 
}


{
    let companies = ["Bloomberg", "Microsoft", "Ubar", "Googal", "IBM", "Netflix"];
    companies.push("Amazon")
    console.log(companies) // add the amazon name at the end to the help of push 
}