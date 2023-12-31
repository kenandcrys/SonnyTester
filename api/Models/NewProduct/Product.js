const db = require('../../../data/db-config')

function getAll () {
    return db('product');
};

function getByName (name) {
    return db('product')
            .where('name', name)
            .first();
};

function getById (id) {
    return db('product')
            .where('id', id)
            .first()
}

function deleteByName (name) {
    return db("product").where("name", name).del();
};

function updateByName (name,updates) {
    return db('product')
          .where('name', name)
          .update(updates); 
}



function create(type, name, description, price) {
    return db("product").insert({
        name: name,
        description: description,
        price: price,
        type:type,
    })
}

module.exports = {
    create,
    getAll,
    getById,
    getByName,
    deleteByName,
    updateByName,
}