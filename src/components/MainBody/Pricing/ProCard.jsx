import React from 'react'

const ProCard = () => {
  return (
    <div className="col-md-4">
      <div className="card text-center">
        <div className="card-header fs-4">
          Pro
        </div>
        <div className="card-body">
          <h5 className="card-title"><span className="fs-1">$15</span>/mo</h5>
          <div>10 users included</div>
          <div>2 GB of storage</div>
          <div>Email support</div>
          <div>Help center</div>
          <a type="button" className="btn btn-primary fs-4 my-3">Get Started</a>
        </div>
      </div>
    </div>
  )
}

export default ProCard