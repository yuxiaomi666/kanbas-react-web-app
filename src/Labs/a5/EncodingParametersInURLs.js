import React, { useState } from "react";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h2>3.1.3 exercise</h2>
      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control"
        type="number"
        value={a}
      />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control"
        type="number"
        value={b}
      />
      <h3>Path Parameters</h3>
      <a
        href={`http://localhost:4000/a5/add/${a}/${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>
      <h3>Query Parameters</h3>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=add`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=subtract`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>
      <h2>3.2.4+3.2.5 exercise</h2>
      <h4>Assignment</h4>
      <a
        href={`http://localhost:4000/a5/assignment`}
        className="btn btn-primary"
      >
        Get Assignment
      </a>
      <a
        href={`http://localhost:4000/a5/assignment/title`}
        className="btn btn-primary"
      >
        Get Assignment Title
      </a>
      <hr />
      <input
        className="form-control"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        href={`http://localhost:4000/a5/assignment/title/${assignment.title}`}
        className="btn btn-primary"
      >
        Update Assignment Title
      </a>
      <hr />
      <input
        className="form-control"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
      />
      <a
        href={`http://localhost:4000/a5/assignment/score/${assignment.score}`}
        className="btn btn-primary"
      >
        Update Assignment Score
      </a>
      <hr />
      <input
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <a
        href={`http://localhost:4000/a5/assignment/completed/${assignment.completed}`}
        className="btn btn-primary"
      >
        Update Assignment Complete Status
      </a>


    </div>
  );
}
export default EncodingParametersInURLs;
