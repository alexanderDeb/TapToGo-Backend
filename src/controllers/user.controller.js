import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req, res) => {
  const query = { rfid: req.params.rfid };
  const user = await User.findOne(query);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const updateUserSaldo = async (req, res) => {
  const query = { rfid: req.params.rfid };
  const user = await User.findOne(query);
  const userSaldo = {
    name: user.name,
    email: user.email,
    rfid: user.rfid,
    saldo: user.saldo + req.body.saldo,
    status: user.status,
  };
  const userEdit = await User.findOneAndUpdate(query, userSaldo, {
    new: true,
  });
  if (!userEdit)
    return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(userEdit);
};

export const createUser = async (req, res) => {
  const { name, email, rfid, saldo, status } = req.body;
  const NewUser = new User({
    name: name,
    email: email,
    rfid: rfid,
    saldo: saldo,
    status: status,
  });
  const saveUser = await NewUser.save();
  res.json(saveUser);
};

export const spendSaldo = async (req, res) => {
  const query = { rfid: req.params.rfid };
  const user = await User.findOne(query);
  const userSaldo = {
    name: user.name,
    email: user.email,
    rfid: user.rfid,
    saldo: user.saldo - 2700,
    status: user.status,
  };
  if (userSaldo.saldo > -2700) {
    const userEdit = await User.findOneAndUpdate(query, userSaldo, {
      new: true,
    });
    if (!userEdit)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(userEdit);
  } else {
    res.send("Te quedaste sin saldo!!")
  }
};
