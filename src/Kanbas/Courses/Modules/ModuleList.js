import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  // const modules = db.modules;
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();




  // modules
  // .filter((module) => module.course === courseId)
  // .map((module, index) => {
  //   if (module.lessons) {
  //     module.lessons.map((lesson, index) => {
  //       list.append(lesson.name)
  //     })
  //   }
  // })
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="d-flex">
        <div className="form-group col-md-8">
          <input className="form-control"
          value={module.name}
            onChange={(e) => dispatch(setModule({
              ...module, name: e.target.value
            }))}
          />
          <textarea className="form-control"
          value={module.description}
            onChange={(e) => dispatch(setModule({
              ...module, description: e.target.value
            }))}
          />
        </div>
        <div>
          <button className="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button className="btn btn-primary"
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
        </div>
        </div>
      </li>

      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <>
              <li key={index} className="list-group-item list-group-item-secondary">
                <FaEllipsisVertical className="me-1" />
                {module.name}
                <span className="float-end">
                  <button className="btn btn-danger"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <button className="btn btn-success"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <AiOutlineCheckCircle className="p-1 wd-fg-color-green" />
                  <AiOutlinePlus className="fa-solid p-1" />
                  <FaEllipsisVertical className="p-1" />
                </span>
                <div className="wd-margin-left-20">{module.description}</div>
              </li>

              {module.lessons && module.lessons.map((lesson, idx) => (
                <li key={idx} className="list-group-item">
                  <h4>{lesson.name}</h4>
                  <p>{lesson.description}</p>
                </li>
              ))}
            </>
          ))
      }
    </ul>
  );
}
export default ModuleList;