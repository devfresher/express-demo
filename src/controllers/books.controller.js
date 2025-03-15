const getAll = (req, res) => {
	res.send([1, 2, 3]);
};

const getOne = (req, res) => {
	const { id } = req.params;
	res.send(id);
};

const create = (req, res) => {
	const { body: data } = req;
	res.send(data);
};

module.exports = { getAll, getOne, create };
