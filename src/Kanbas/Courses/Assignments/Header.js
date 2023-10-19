import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function Header() {
    return (
        <>
            <div className="float-start">
                <input type="text" className="form-control" id="name" placeholder="Search for Assignment" />
            </div>
            <div className="float-end">
                <button type="button" className="btn btn-secondary btn-light wd-bg-color-light-grey">
                    <AiOutlinePlus className="wd-button-icon"/>
                    Group
                </button>
                <button type="button" className="btn btn-danger">
                    <AiOutlinePlus className="wd-button-icon"/>
                    Assignment
                </button>
                <button type="button" className="btn btn-secondary btn-light wd-bg-color-light-grey">
                    <FaEllipsisVertical className="wd-button-icon"/>
                </button>
            </div>
        </>
    );
}
export default Header;