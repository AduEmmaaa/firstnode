const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { Name, Email, Password } = req.body;
  if (Name == "" || Email == "" || Password == "") {
    res.status(400).send("please fill all field");
  } else {
    try {
      const hashpassword = await bcrypt.hash(Password, 10);
      const user = {
        Name: Name,
        Email: Email,
        Password: hashpassword,
      };
      const Data = JSON.stringify(user);
      console.log(`i have recieved data ${Data}`);
      res.status(200).send(Data);
    } catch (error) {
      console.error("Error :", error);
    }
  }
};

const login = (req, res) => {
  res.send("login");
};

module.exports = { register, login };
