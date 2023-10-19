import ModuleList from "./ModuleList";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Modules() {
  return (
    <div className="flex-grow-1">
      <div className="float-end">
        <button type="button" class="btn btn-secondary btn-light wd-bg-color-light-grey">
          Collapse All
        </button>
        <button type="button" class="btn btn-secondary btn-light wd-bg-color-light-grey">
          View Progress
        </button>
        <button type="button" class="btn btn-secondary btn-light wd-bg-color-light-grey">
          <AiOutlineCheckCircle className="wd-fg-color-green wd-button-icon"/>
          Publish All
        </button>
        <div class="dropdown d-inline-block">
          <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-plus p-1"></i>
            Module
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <button type="button" class="btn btn-secondary btn-light wd-bg-color-light-grey">
          <FaEllipsisVertical />
        </button>
      </div>
      <div class="wd-clear-both mt-5">
        <ModuleList />
      </div>
      
    </div>
  );
}
export default Modules;