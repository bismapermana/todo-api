const { todo } = require("../../models");

exports.getTodos = async (req, res) => {
  try {
    const data = await todo.findAll();

    res.status(200).send({
      status: "success",
      todos: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await todo.findOne({
      where: { id },
    });

    res.status(200).send({
      status: "success",
      todo: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const data = await todo.create(req.body);

    res.status(200).send({
      status: "success",
      created: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await todo.update(req.body, {
      where: { id },
    });

    res.status(200).send({
      status: "success",
      update: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await todo.destroy({ where: { id } });

    res.status(200).send({
      status: "success",
      message: `Delete data id ${id} successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
    });
  }
};
