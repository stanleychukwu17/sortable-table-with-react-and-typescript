import { useState } from "react";
import HeaderChild from "./HeaderChild";
import { BsFillCaretRightFill } from 'react-icons/bs'

//--START-- for definition of types
export type userDataType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
}

export type SortTableProps = {
    data: userDataType[]
}
//--END--

export default function SortTable({data}: SortTableProps) {
    const [keyToSort, setKeyToSort] = useState<string>('')
    const [orderBy, setOrderBy] = useState<'ascn'|'descn'|''>('')

    const headers = [
        {key:'id', label:'ID'},
        {key:'first_name', label:'first name'},
        {key:'last_name', label:'last name'},
        {key:'email', label:'email'},
        {key:'gender', label:'gender'},
        {key:'ip_address', label:'ip address'},
    ]

    return (
        <div className="">
            <div className="py-5 pb-2 flex justify-between">
                {headers.map(item => {
                    return (
                        <HeaderChild active key={item.key} label={item.label} />
                    )
                })}
            </div>

            {/* below we display all of the user's info */}
            <div className="">
                {data.map(item => {
                    return (
                        <div className="flex justify-between" key={item.id}>
                            <div className="border border-indigo-900 w-full px-5 py-4">{item.id}</div>
                            <div className="border border-indigo-900 w-full px-5 py-4">{item.first_name}</div>
                            <div className="border border-indigo-900 w-full px-5 py-4">{item.last_name}</div>
                            <div className="border border-indigo-900 w-full px-5 py-4">{item.email}</div>
                            <div className="border border-indigo-900 w-full px-5 py-4">{item.gender}</div>
                            <div className="border border-indigo-900 w-full px-5 py-4">{item.ip_address}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
