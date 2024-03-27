const { getPool } = require('./sql_connections')

const insert = async ({ tableName, colunmsNames, values }) => {
    let result = await getPool().query(`insert into ${tableName}(${colunmsNames.join(',')}) values(${values.join(',')})`)
    return result.rowsAffected;
}

const select = async ({ colunmsNames, tableName, conditions }) => {

    let result = await getPool().query(`SELECT ${colunmsNames.join(',')} FROM ${tableName} WHERE ${conditions.join(' AND ')}`)
    return result.recordsets[0];
}

const update = async ({ tableName, colunmName, value, conditions }) => {
    let result = await getPool().query(`UPDATE ${tableName} SET ${colunmName}=${value} WHERE ${conditions.join(' AND ')}`)
    return result.rowsAffected;
}

const remove = async ({ tableName, condition }) => {
    let result = await getPool().query(`DELETE FROM ${tableName}WHERE ${condition}`)
    return result.rowsAffected

}

module.exports = { insert, select, update, remove }
