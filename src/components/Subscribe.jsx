import React from 'react'

const Subscribe = () => {
  return (
    <>{/* Subscribe Start */}
    <div className="container-fluid bg-warning my-5">
      <div className="row justify-content-md-center py-5 px-xl-5">
        <div className="col-md-6 col-12 py-2">
          <div className="text-center mb-2 pb-2">
            <h2 className="section-title px-5 mb-3">
              <span className="bg-warning px-2">Stay Updated</span>
            </h2>
            <p>
              Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
              diam labore at justo ipsum eirmod duo labore labore.
            </p>
          </div>
          <form action>
            <div className="input-group">
              <input
                type="text"
                className="form-control border-white p-4"
                placeholder="Email Goes Here"
              />
              <div className="input-group-append">
                <button className="btn btn-success px-4">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* Subscribe End */}</>
  )
}

export default Subscribe