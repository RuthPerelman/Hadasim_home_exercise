import React, { useEffect, useReducer, useState } from "react";
import './table.css'
import propsReducer from "./table_reducers";
import Member from "../member/Member";
import { Link } from "react-router-dom";
import Covid from "../covid/Covid";

const Table = (props) => {
    let i = 0
    console.log(props.data);
    const [prop, setProps] = useReducer(propsReducer, props)
    // const [open, setOpen] = useState(false)
    const [member, setMember] = useState()
    const [covid, setCovid] = useState()

    useEffect(() => {

        setProps(props)

    })

    // const setOpen = (data) => {
    //     if (Object.keys(data)[0].includes('member')){
    //        return <><Link to={'/member'}>gffgh</Link></>
    //     }
    // }

    if (props.data.length > 0) {
        return <>
            <table id="customers">
                <thead>
                    <tr>
                        {
                            Object.keys(props.data[0]).map(title => <>
                                <th key={title}>
                                    {title}
                                </th>
                            </>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(row => <>
                            <tr key={++i} onClick={() => Object.keys(row)[0].includes('member') ? setMember(row) : setCovid(row)}>
                                {
                                    Object.keys(row).map(r => <>
                                        <td key={++i}>
                                            {row[r]}
                                        </td>
                                    </>)
                                }
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
            {
                member ? <Member data={member} /> : false
            }
            {
                covid ? <Covid data={covid}/> : false
            }
        </>
    }
}


export default Table
