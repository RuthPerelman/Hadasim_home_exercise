const { getPool } = require('./sql_connections')

const insert = async ({ tableName, colunmsNames, values }) => {
    let result = await getPool().query(`insert into ${tableName}(${colunmsNames.join(',')}) values(${values.join(',')})`)
    return result.rowsAffected;
}

const select = async ({ colunmsNames, tableName, conditions }) => {
    console.log({ query: `SELECT ${colunmsNames.join(',')} FROM ${tableName} WHERE ${conditions.join(' AND ')}` });
    let result = await getPool().query(`SELECT ${colunmsNames.join(',')} FROM ${tableName} WHERE ${conditions.join(' AND ')}`)
    console.log({ result });
    return result.recordsets[0];
}

const selectWithJoin = async ({ colunmsNames, tablesNames, on, conditions }) => {
    // let select = ""
    // colunmsNames.forEach(element => {
    //     select += `${tableName}.${element}`
    // });
    let result = await getPool().query(`SELECT ${colunmsNames.join(',')}
     FROM ${tablesNames[0]}
      AS ${tablesNames[0]} 
      INNER JOIN ${tablesNames[1]} 
      AS ${tablesNames[1]}
      ON ${on}
      WHERE ${conditions.join(' AND ')}`)
    return result.recordsets[0]
}

const update = async ({ tableName, colunmName, value, conditions }) => {
    // console.log({ tableName, colunmName, value, conditions });
    let set = ''
    for (let i = 1; i < colunmName.length; i++) {
        console.log(value[i],typeof value[i]);
        if (typeof value[i] == 'string') {
            set += `${colunmName[i]}='${value[i]}',`
        }
        else{
            set += `${colunmName[i]}=${value[i]},`
        }
    }
    console.log(`UPDATE ${tableName} SET ${set.slice(0, set.length - 1)} WHERE ${conditions.join(' AND ')}`);
    let result = await getPool().query(`UPDATE ${tableName} SET ${set.slice(0, set.length - 1)} WHERE ${conditions.join(' AND ')}`)
    return result.rowsAffected;
}

const remove = async ({ tableName, condition }) => {
    let result = await getPool().query(`DELETE FROM ${tableName}WHERE ${condition}`)
    return result.rowsAffected

}

module.exports = { insert, select, update, remove, selectWithJoin }
