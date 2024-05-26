

function userInfo (req,res){
    try {
        let userInfo = {
            name:"John",
            age: 23,
            mobile:9994833333
        }
        res.status(200).send(userInfo)
    } catch (error) {
        res.send({msg:error.message})
    }
    
}

function userAccountDetails(req,res){
    let userAccountInfo = {
        name:"John",
        bankName:"SBI",
        ifsc:"SBIN948DCKE"
    }
    res.send(userAccountInfo)
}

module.exports = {userInfo,userAccountDetails}