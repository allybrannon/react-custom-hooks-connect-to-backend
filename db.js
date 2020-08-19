const data = require("./data");
const getAll = (limit = 100, page=1) => {
    return {results:data.slice((page-1)*limit, limit+((page-1)*limit)), page:page, limit:limit}
}

const getById = (id) => {
    return {results:data.find(i=>String(i.id) === String(id))}
}

const getByAttribute = (attribute, value, limit=100, page=1, exact = true) =>{
    return {results:data.filter(i=>i[attribute].toLowerCase() === value.toLowerCase())}
}

module.exports = { getAll, getById, getByAttribute}