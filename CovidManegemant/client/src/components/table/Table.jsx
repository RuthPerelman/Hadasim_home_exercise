import React, { useEffect, useReducer } from "react";
import './table.css'
import propsReducer from "./table_reducers";

const Table = (props) => {
    let i = 0
    // console.log(props);
    const [prop, setProps] = useReducer(propsReducer, props)

    useEffect(()=>{
        setProps(prop)
    })

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
                        <tr key={++i}>
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
    </>
}
}


export default Table
