import { useEffect, useState } from "react";
import HeaderChild from "./HeaderChild";
import data from '../data.json'; // Adjust the path as needed

//--START-- for definition of types
export type userDataType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
}

//--END--

const list_of_users: userDataType[] = data as userDataType[]

export default function SortTable() {
    const [keyToSort, setKeyToSort] = useState<string>('id')
    const [orderBy, setOrderBy] = useState<'ascend'|'descend'>('ascend')
    const [finalList, setFinalList] = useState(list_of_users)

    const headers = [
        {key:'id', label:'ID'},
        {key:'first_name', label:'first name'},
        {key:'last_name', label:'last name'},
        {key:'email', label:'email'},
        {key:'gender', label:'gender'},
        {key:'ip_address', label:'ip address'},
    ]

    useEffect(() => {
        const array_of_keys: (string|number)[] = [] 
        const object_of_keys = []
        const final_based_on_sort = []

        finalList.forEach(item => {
            // @ts-ignore
            array_of_keys.push(item[keyToSort])
        })

        console.log(array_of_keys)
        return () => {}
    }, [keyToSort, orderBy])

    return (
        <div className="">
            <div className="py-5 pb-2 flex justify-between">
                {headers.map((item, index) => <HeaderChild key={index} active={keyToSort} itemKey={item.key} label={item.label} orderBy={orderBy} updateSort={setKeyToSort} updateOrderBy={setOrderBy} />)}
            </div>

            {/* below we display all of the user's info */}
            <div className="">
                {finalList.map(item => {
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
