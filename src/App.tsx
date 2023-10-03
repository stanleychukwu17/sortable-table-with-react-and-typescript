import './index.css'
import SortTable from './components/SortTable'
import data from './data.json'; // Adjust the path as needed
import {userDataType} from './components/SortTable'

const userInfo: userDataType[] = data as userDataType[]

export default function App1() {
    return (
        <div className=''>
            <SortTable data={userInfo} />
        </div>
    )
}