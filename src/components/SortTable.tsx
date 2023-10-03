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
export default function SortTable({data}: SortTableProps) {
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
                        <div className="w-full px-5 py-3 capitalize font-semibold" key={item.key}>{item.label}</div>
                    )
                })}
            </div>
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
