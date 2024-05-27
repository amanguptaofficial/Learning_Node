
const userInfoDb = require("../Model/userSchema");

const addUserInfoService = async (data) => {
  try {

   let createdData =  userInfoDb.create(data);
   return createdData
    
  } catch (error) {
    return error;
  }
};

const getAllUsersService = async () => {
  try {
     
   let data =  await userInfoDb.find();
    return data;
  } catch (error) {
     return error;
  }
};

const getUsersService = async (query) => {
  try {
    let respObj={};
     const {mobile,name,email} = query;

     if(mobile && (mobile.length>10 || mobile.length<10)){
        return respObj={code:1000,msg:'Mobile number length must be 10 digit', data:{}}
     }
    let data =  await userInfoDb.find(query);

    return respObj={code:200,msg:'success',data:data};
  } catch (error) {
     return error;
  }
};

module.exports = { addUserInfoService, getAllUsersService,getUsersService };
