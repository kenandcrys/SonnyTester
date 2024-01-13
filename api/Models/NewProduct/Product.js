const db = require('../../../../data/db-config')

function getAll () {
    return db('products');
};

function getByName (name) {
    return db('products')
        .where('name', name)
        .first();
};

function getById (id) {
    return db('products')
        .where('id', id)
        .first()
}

function deleteByName (name) {
    return db("products")
        .where("name", name)
        .del();
};

function updateByName (name,updates) {
    return db('products')
        .where('name', name)
        .update(updates); 
}



function create (product) {   
    return db("products").insert(product)
        .then( ([id]) => getById(id) )
}

module.exports = {
    create,
    getAll,
    getById,
    getByName,
    deleteByName,
    updateByName,
}