const userInfoDb = require("../Model/userSchema");
const {
  addUserInfoService,
  getAllUsersService,
  getUsersService,
} = require("../service/userService");

const addUserInfo = async (req, res) => {
  try {
    let requestData = req?.body;
    let data = await addUserInfoService(requestData);
    res.send({ code: 200, msg: "success", data: data });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    let data = await getAllUsersService();
    res.send({ code: 200, msg: "Success", data: data });
  } catch (error) {
    res.send({ msg: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    let result = await getUsersService(req.query);
    res.send(result);
  } catch (error) {
    res.send({ msg: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    console.log(req.params);
    //   let result =  await getUsersService(req.query);
    //   res.send(result)
  } catch (error) {
    res.send({ msg: error.message });
  }
};

module.exports = { addUserInfo, getAllUsers, getUser, getUserById };
