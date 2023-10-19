function AssignmentSettings() {
    return (
        <>
            <div className="mt-5 mb-5">
                <textarea className="form-control" rows="3">This assignment describes how to install the ...</textarea>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-2 p-1">
                        <label className="float-end form-label">Points</label>
                    </div>
                    <div className="col-7">
                        <input type="number" className="form-control" value="100"/>
                    </div>
                </div>
                <div className="mt-3 row justify-content-center">
                    <div className="col-2 p-1">
                        <label for="name" className="float-end col form-label">Assignment Group</label>
                    </div>
                    <div className="col-7">
                        <select className="col form-select">
                            <option selected>ASSIGNMENTS</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3 row justify-content-center">
                    <div className="col-2 p-1">
                        <label for="name" className="float-end col form-label">Display Grade as</label>
                    </div>
                    <div className="col-7">
                        <select className="col form-select">
                            <option selected>Percentage</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3 mb-3 row justify-content-center">
                    <div className="col-2"></div>
                    <div className="col-7">
                        <input id="chexckbox" type="checkbox" className="col" />
                        <label className="form-check-label" for="chexckbox">
                            Do not count this assignme towards the final grade
                        </label>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2 p-1">
                        <label className="float-end form-label">Submission Type</label>
                    </div>
                    <div className=" col-7 border-1 wd-submission-container">
                        <div className="mt-3 col-7">
                            <div>
                                <select className="col form-select">
                                    <option selected>Online</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mt-3 h4">
                                Online Entry Options
                            </div>
                            <div className="mt-3">
                                <input id="text" type="checkbox" className="col" checked />
                                <label className="form-check-label" for="text">
                                    Text Entry
                                </label>
                            </div>
                            <div className="mt-3">
                                <input id="website" type="checkbox" className="col" checked />
                                <label className="form-check-label" for="website">
                                    Website URL
                                </label>
                            </div>
                            <div className="mt-3">
                                <input id="media" type="checkbox" className="col" checked />
                                <label className="form-check-label" for="media">
                                    Media Recordings
                                </label>
                            </div>
                            <div className="mt-3">
                                <input id="student" type="checkbox" className="col" />
                                <label className="form-check-label" for="student">
                                    Student Annotation
                                </label>
                            </div>
                            <div className="mt-3 mb-3">
                                <input id="file" type="checkbox" className="col" />
                                <label className="form-check-label" for="file">
                                    File Uploads
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 row justify-content-center">
                    <div className="col-2 p-1">
                        <label className="float-end form-label">Assign</label>
                    </div>
                    <div className="col-7 border-1 wd-submission-container">
                        <div className="mt-3">
                            <div className="mt-3">
                                <label className="form-check-label h5" for="assignTo">
                                    Assign to
                                </label>
                                <input id="assignTo" type="text" className="form-control" />
                            </div>
                            <div className="mt-3">
                                <label className="form-check-label h5" for="due">
                                    Due
                                </label>
                                <input id="due" type="text" className="form-control" />
                            </div>
                            <div className="mt-3 mb-3 row">
                                <div className="col">
                                    <label className="form-check-label h5" for="from">
                                        Available from
                                    </label>
                                    <input id="from" type="date" className="form-control" />
                                </div>
                                <div className="col">
                                    <label className="form-check-label h5" for="assignTo">
                                        Until
                                    </label>
                                    <input id="until" type="date" className="form-control" />
                                </div>
                            </div>
                            <button className="btn btn-light wd-bg-color-light-grey w-100" type="button" aria-expanded="false">
                                <i className="fa-solid fa-plus p-1"></i>
                                <span>Add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AssignmentSettings;