import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { findModulesByCourseId, createModule, removeModule, updateServerModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    findModulesByCourseId(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) =>
      dispatch(addModule(module))
    );
  };
  const handleDeleteModule = (moduleId) => {
    removeModule(moduleId).then(() =>
      dispatch(deleteModule(moduleId))
    );
  };
  const handleUpdateModule = () => {
    updateServerModule(module).then(() =>
      dispatch(updateModule(module))
    );
  };

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
              onClick={() => handleAddModule()}>
            Add
          </button>
          <button className="btn btn-primary"
            onClick={() => handleUpdateModule()}>
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
                    onClick={() => handleDeleteModule(module._id)}>
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