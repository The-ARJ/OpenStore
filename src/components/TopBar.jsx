import React from 'react'

const TopBar = () => {
  return (
    <div><div className="container-fluid">
    <div className="row align-items-center py-3 px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a href className="text-decoration-none">
          <h1 className="m-0 display-5 font-weight-semi-bold">
            <span className="text-success font-weight-bold mr-1">
              Open
            </span>
            Store
          </h1>
        </a>
      </div>
      <div className="col-lg-6 col-6 text-left">
        <form action>
          <div className="input-group ">
            <input
              type="text"
              className="form-control border-warning"
              placeholder="Search for products"
            />
            <div className="input-group-append ">
              <span className="input-group-text bg-transparent pointer border-warning text-success">
                <i className="fa fa-search " />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-3 col-6 text-right">
        <a href className="btn border border-warning">
          <i className="fas fa-heart text-success" />
          <span className="badge">0</span>
        </a>
        <a href className="btn border border-warning ml-1">
          <i className="fas fa-shopping-cart text-success" />
          <span className="badge">0</span>
        </a>
      </div>
    </div>
  </div>
  {/* Topbar End */}</div>
  )
}

export default TopBar