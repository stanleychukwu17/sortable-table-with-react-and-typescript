import {motion} from 'framer-motion'
import { BsFillCaretRightFill } from 'react-icons/bs'

type headerProps = {
    itemKey:string;
    label:string;
    active:string;
    orderBy:'ascend'|'descend';
    updateSort: React.Dispatch<React.SetStateAction<string>>,
    updateOrderBy: React.Dispatch<React.SetStateAction<"ascend" | "descend">>,
}

export default function HeaderChild({itemKey, label, active, orderBy, updateSort, updateOrderBy}: headerProps) {
    let rotateIcon = 0
    let opacityIcon = .3;

    if (active === itemKey) {
        opacityIcon = 1;

        if (orderBy === 'ascend') {
            rotateIcon = -90
        } else {
            rotateIcon = 90
        }
    }

    // console.log(active, itemKey)
    return (
        <div
            className="w-full px-5 py-3 capitalize font-semibold cursor-pointer flex items-center space-x-2 hover:bg-[#dcdde1]"
            key={itemKey}
            onClick={() => {
                updateSort(currentValue => {
                    if (currentValue === itemKey) {
                        if (orderBy === 'ascend') {
                            updateOrderBy('descend')
                        } else {
                            updateOrderBy('ascend')
                        }
                        return itemKey
                    } else {
                        updateOrderBy('ascend') // reset the ordering by to be ascending, i want this to be the default
                        return itemKey
                    }
                })
            }}
        >
            <div>{label}</div>
            <motion.div initial={{rotate:0, opacity:.3}} animate={{rotate:rotateIcon, opacity:opacityIcon}}>
                <BsFillCaretRightFill />
            </motion.div>
        </div>
    )
}