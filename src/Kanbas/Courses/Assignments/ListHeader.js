import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

function ListHeader() {
    return (
        <li className="list-group-item list-group-item-secondary p-3">
            <FaEllipsisVertical className="wd-button-icon" />
            <AiFillCaretDown className="wd-button-icon" />
            Assignments
            <div className="float-end">
                <span className="wd-assignment-progress p-1">
                    40% of Total
                </span>
                <AiOutlinePlus className="wd-button-icon" />
                <AiFillCaretDown className="wd-button-icon" />
            </div>
        </li>
    );
}
export default ListHeader;