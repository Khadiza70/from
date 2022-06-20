import React from 'react'

const FreeCard = () => {
  return (
    <div className="col-md-4">
      <div className="card text-center">
        <div className="card-header fs-4">
          Free 
        </div>
        <div className="card-body text-center">
          <h5 className="card-title"><span className="fs-1">$0</span>/mo</h5>
          <div>10 users included</div>
          <div>2 GB of storage</div>
          <div>Email support</div>
          <div>Help center</div>

          <a href="#" className="btn btn-outline-primary fs-3 my-3">Sing up of free</a>
        </div>
      </div>
    </div>
  )
}

export default FreeCard