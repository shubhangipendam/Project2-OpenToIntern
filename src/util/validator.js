const mongoose = require('mongoose');

//isValidBody
const isValidBody = (data) => {
    if (Object.keys(data).length > 0)
        return true
    return false
};

//name
const isValidName = (name) => {
    const nm = name.trim()
    const regex =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(nm)
    return regex
}

//email
const isValidEmail = (email) => {
    const regex = /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/.test(email)
    return regex
}

//Mobile 
const isValidMobile = (phone) => {
    // let regex = /^[6-9]{1}[0-9]{9}$/.test(phone)
    let regex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(phone)
    return regex
}

const isValidAbvr = (name) => {
    let regex = /^[a-z.]{2,10}$/.test(name)
   return regex
}

const isValidUrl = (longUrl) => {
    const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]{3,})$/.test(longUrl)
    return regex
}


module.exports = {isValidBody,isValidName,isValidEmail,isValidMobile,isValidAbvr,isValidUrl}



