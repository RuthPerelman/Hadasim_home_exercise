import React, { useReducer } from "react";
import { client } from "../../services/axios";

const covidReducer = (state, action) => {
    console.log({ state, action });
    console.log(action.id);
    state[action.id] = action.value
    console.log({ state });
    return state
}

const Covid = ({ data }) => {

    const [newData, setNewData] = useReducer(covidReducer, data)

    const sendData = async () => {
        console.log("sendData");
        const response = await client.post('/covid/update', { colunmName: Object.keys(newData), value: Object.values(newData), conditions: [`id=${data.id}`] })
        console.log({ response });
    }

    return <>
        <form >
            <label htmlFor="dateofrecovery">dateofrecovery</label>
            <input type="date" id="dateofrecovery" name="dateofrecovery" placeholder={data.dateofrecovery} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="dateofpositiveresult">dateofpositiveresult</label>
            <input type="date" id="dateofpositiveresult" name="dateofpositiveresult" placeholder={data.dateofpositiveresult} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="dateofvaccination1">dateofvaccination1</label>
            <input type="date" id="dateofvaccination1" name="dateofvaccination1" placeholder={data.dateofvaccination1} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="typeofvaccination1">typeofvaccination1</label>
            <input type="text" id="typeofvaccination1" name="typeofvaccination1" placeholder={data.typeofvaccination1} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="dateofvaccination2">dateofvaccination2</label>
            <input type="date" id="dateofvaccination2" name="dateofvaccination2" placeholder={data.dateofvaccination2} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="typeofvaccination2">typeofvaccination2</label>
            <input type="text" id="typeofvaccination2" name="typeofvaccination2" placeholder={data.typeofvaccination2} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="dateofvaccination3">dateofvaccination3</label>
            <input type="date" id="dateofvaccination3" name="dateofvaccination3" placeholder={data.dateofvaccination3} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="typeofvaccination3">typeofvaccination3</label>
            <input type="text" id="typeofvaccination3" name="typeofvaccination3" placeholder={data.typeofvaccination3} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="dateofvaccination4">dateofvaccination4</label>
            <input type="date" id="dateofvaccination4" name="dateofvaccination4" placeholder={data.dateofvaccination4} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="typeofvaccination4">typeofvaccination4</label>
            <input type="text" id="typeofvaccination4" name="typeofvaccination4" placeholder={data.typeofvaccination4} onChange={(ev) => setNewData(ev.target)} />

            <input type="submit" value="Submit" onClick={_ => sendData()} />
        </form>
    </>

}

export default Covid
