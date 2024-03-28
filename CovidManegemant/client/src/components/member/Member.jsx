import React, { useEffect, useReducer, useState } from "react";
import "./member.css"
import { client } from '../../services/axios';
import Table from "../table/Table";

const memberReducer = (state, action) => {
    state[action.id] = action.value
    return state
}

const Member = ({ data }) => {

    const [covid, setCovid] = useState({})
    const [newData, setNewData] = useReducer(memberReducer, data)

    useEffect(() => {
        const getData = async () => {
            const response = await client.post('/covid/read', {
                colunmsNames: ["id", "dateofrecovery",
                    "dateofpositiveresult",
                    "dateofvaccination1",
                    "typeofvaccination1",
                    "dateofvaccination2",
                    "typeofvaccination2",
                    "dateofvaccination3",
                    "typeofvaccination3",
                    "dateofvaccination4",
                    "typeofvaccination4"], id: data.memberid
            })
            // console.log(response.data);
            setCovid(response.data[0])
            // setMembers(response.data)
        }
        getData()
    }, [])

    const sendData = async () => {
        console.log("sendData");
        const response = await client.post('/members/update', { colunmName: Object.keys(newData), value: Object.values(newData), conditions: [`memberid=${data.memberid}`] })
        console.log({ response });
    }

    // console.log({props});
    return <>
        <form >
            <label htmlFor="id">id</label>
            <input type="text" id="id" name="id" placeholder={data.id} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" placeholder={data.firstname} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" placeholder={data.lastname} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="city">city</label>
            <input type="text" id="city" name="city" placeholder={data.city} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="housenumber">housenumber</label>
            <input type="number" id="housenumber" name="housenumber" placeholder={data.housenumber} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="birthdate">birthdate</label>
            <input type="date" id="birthdate" name="birthdate" placeholder={data.birthdate} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="telephone">telephone</label>
            <input type="text" id="telephone" name="telephone" placeholder={data.telephone} onChange={(ev) => setNewData(ev.target)} />

            <label htmlFor="cellphone">cellphone</label>
            <input type="text" id="cellphone" name="cellphone" placeholder={data.cellphone} onChange={(ev) => setNewData(ev.target)} />

            {/* <label for="country">Country</label>
            <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select> */}

            <input type="submit" value="Submit" onClick={_ => sendData()} />
        </form>
        {
            covid ? <Table data={[covid]}></Table> : <Table data={[]}></Table>
        }
    </>
}

export default Member
