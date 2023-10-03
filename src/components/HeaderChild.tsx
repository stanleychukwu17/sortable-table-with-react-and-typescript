import { BsFillCaretRightFill } from 'react-icons/bs'

type headerProps = {
    key:string;
    label:string;
    active:boolean;
}

export default function HeaderChild({key, label}: headerProps) {
    return (
        <div className="w-full px-5 py-3 capitalize font-semibold cursor-pointer flex items-center space-x-2 hover:bg-[#dcdde1]" key={key}>
            <span>{label}</span>
            <span className="text-xs">
                <BsFillCaretRightFill />
            </span>
        </div>
    )
}