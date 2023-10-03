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
export default function SortTable(props: SortTableProps) {
    const headers = [
        {key:'id', label:'ID'},
        {key:'first_name', label:'first name'},
        {key:'last_name', label:'last name'},
        {key:'email', label:'email'},
        {key:'gender', label:'gender'},
        {key:'ip_address', label:'ip address'},
    ]

    console.log(props)
    return (
        <div className="">
            {headers.map(item => {
                return (
                    <div className="" key={item.key}>{item.label}</div>
                )
            })}
        </div>
    )
}
