import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
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
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <>
              <li key={index} className="list-group-item list-group-item-secondary">
                <FaEllipsisVertical className="me-1" />
                {module.name}
                <span className="float-end">
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

<div class="wd-clear-both mt-5">
  <hr />
  <ul class="list-group">
    <li class="list-group-item list-group-item-secondary">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      Week 0 - INTRO
      <span class="float-end">
        <i class="fa-regular fa-circle-check p-1 wd-fg-color-green"></i>
        <i class="fa-solid fa-plus p-1"></i>
        <i class="fa-solid fa-ellipsis-vertical p-1"></i>
      </span>

    </li>
    <li class="list-group-item h6">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      LEARNING OBJECTIVE
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-ellipsis-vertical me-3"></i>
      Introduction to the course
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-ellipsis-vertical me-3"></i>
      Learn what is web development
    </li>
    <li class="list-group-item h6">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      SLIDES
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      <i class="fa-solid fa-link me-2 wd-fg-color-green"></i>
      <a href="#" class="text-decoration-none wd-fg-color-red">
        Introduction to the course
      </a>
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      <i class="fa-solid fa-link me-2 wd-fg-color-green"></i>
      <a href="#" class="text-decoration-none wd-fg-color-red">
        Learn what is web development
      </a>
    </li>
  </ul>
  <ul class="list-group">
    <li class="list-group-item list-group-item-secondary">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      Week 1 - LEARN MORE
      <span class="float-end">
        <i class="fa-regular fa-circle-check p-1 wd-fg-color-green"></i>
        <i class="fa-solid fa-plus p-1"></i>
        <i class="fa-solid fa-ellipsis-vertical p-1"></i>
      </span>

    </li>
    <li class="list-group-item h6">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      LEARNING GOALS
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-ellipsis-vertical me-3"></i>
      How to use react
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-ellipsis-vertical me-3"></i>
      What is nodejs
    </li>
    <li class="list-group-item h6">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      SLIDES
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      <i class="fa-solid fa-link me-2 wd-fg-color-green"></i>
      <a href="#" class="text-decoration-none wd-fg-color-red">
        React guidelines
      </a>
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-ellipsis-vertical me-1"></i>
      <i class="fa-solid fa-link me-2 wd-fg-color-green"></i>
      <a href="#" class="text-decoration-none wd-fg-color-red">
        Redux tutorial
      </a>
    </li>
  </ul>
</div>