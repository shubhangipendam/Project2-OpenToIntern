const collegeModel = require('../models/collegeModel');
const internModel = require('../models/interModel');
const {isValidName,isValidAbvr, isValidBody,isValidUrl} = require('../util/validator')

const createCollege = async function (req, res) {
    try {
        const requestBody = req.body
        const { name, fullName, logoLink } = requestBody
        
        if (!isValidBody(requestBody)) return res.status(400).send({ status: false, messege: "plz provide request body" })
        if (!isValidAbvr(name))  return res.status(400).send({ status: false, messege: "plz provide valid name" })
        if (!isValidName(fullName))  return res.status(400).send({ status: false, messege: "plz provide valid fullName" })
        if (!isValidUrl(logoLink))  return res.status(400).send({ status: false, messege: "Invalid logoLink" })
        
        // Create college
        const newCollege = await collegeModel.create(requestBody)

        const obj = {
            name : newCollege.name,
            fullName : newCollege.fullName,
            logoLink : newCollege.logoLink,
            isDeleted : newCollege.isDeleted
        }
        return res.status(201).send({ status: true, messege: 'college register succesefully', data: obj })
    }
    catch (err) {
        return res.status(500).send({ status: false, messege: err.message })
    }
}


const getCollege = async (req, res) => {
    try {
        const name = req.query.collegeName;
        if (!name) return res.status(400).send({ status: false, massege: 'collegeName is required for query.' });

        const existCollege = await collegeModel.findOne({ name });
        if (!existCollege) return res.status(400).send({ status: false, massege: `'${name} college dose't exists.` });

        const interns = await internModel.find({ collegeId: college._id, isDeleted: false }).select({ name: 1, email: 1, mobile: 1 });

        const data = {
            name: existCollege.name,
            fullName: existCollege.fullName,
            logoLink: existCollege.logoLink,
            interns: interns
        };

        return res.status(200).send({ status: true, data: data });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ status: false, error: err.message });
    }
};




module.exports = { createCollege, getCollege }
