export default function Getpayment(){
    return(
        <>
               <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10 col-md-15 col-lg-12 col-xl-15">
                            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="text-uppercase text-center mb-5">Payment Details</h2>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-4">
                                                <input type="number" id="formPenid" className="form-control form-control-lg" name='Pensioner_id' value={pensionerid} onChange={(e) => setPid(e.target.value)} />
                                                <label className="form-label" htmlFor="formPenid">Pensioner Id</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example1cg" className="form-control form-control-lg" name='pen_name' value={PensionerName} onChange={(e) => setPname(e.target.value)} />
                                                <label className="form-label" htmlFor="form2Example1cg">Pensioner Name</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="number" id="dob" className="form-control form-control-lg" name='Dob' value={date} onChange={(e) => setDate(e.target.value)} />
                                                <label className="form-label" htmlFor="dob">Payment Amount</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="Date" id="dob" className="form-control form-control-lg" name='Dob' value={date} onChange={(e) => setDate(e.target.value)} />
                                                <label className="form-label" htmlFor="dob">Payment Date</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        </>
    )
}
