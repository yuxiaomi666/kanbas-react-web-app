import Modules from "../Modules";


function Home() {
  return (
    <>
      <Modules />
      <div className="wd-course-right-bar d-none d-xl-block">
        <div>
          <h6>Course Status</h6>
          <hr />
          <div>
            <button type="button" class="btn btn-light" ><i class="fa fa-ban"></i>Unpublish</button>
            <button type="button" class="btn btn-success" ><i class="fa fa-check-circle"></i>Published</button>
          </div>
          <div class="wd-course-status-buttons">
            <button type="button" class="btn btn-light" >Import Existing Content</button>
            <button type="button" class="btn btn-light" >Import From Commons</button>
            <button type="button" class="btn btn-light" >Choose Home Page</button>
            <button type="button" class="btn btn-light" >View Course Stream</button>
            <button type="button" class="btn btn-light" >New Accoucement</button>
            <button type="button" class="btn btn-light" >New Analytics</button>
            <button type="button" class="btn btn-light" >View Course Notification</button>
          </div>
        </div>
        <div>
          <h6>To Do</h6>
        </div>
        <hr />
        <div>
          <h6>Coming Up</h6>
        </div>
        <hr />
      </div>
    </>
  );
}
export default Home;