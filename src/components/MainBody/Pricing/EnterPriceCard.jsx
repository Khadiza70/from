import React from 'react'

const EnterPriceCard = () => {
  return (
    <div className="col-md-4">
      <div className="card text-center border border-primary">
        <div className="card-header fs-4 bg-primary text-light">
          Enterprise
        </div>
        <div className="card-body">
          <h5 className="card-title"><span className="fs-1">$29</span>/mo</h5>
          <div>10 users included</div>
          <div>2 GB of storage</div>
          <div>Email support</div>
          <div>Help center</div>
          <button type="button" className="btn btn-primary fs-4 my-3">Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default EnterPriceCard