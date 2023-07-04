import '../Styles/Contact.css';
function Contact(){
    return(
        <div className="contact2" id="contact">
  <div className="container">
    <div className="row contact-container">
      <div className="col-lg-12">
        <div className="card card-shadow border-0 mb-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box p-4">
                <h4 className="title">Contact Us</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="name"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="email"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="phone"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="location"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="message"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 bg-image" >
              <div className="detail-box p-4">
                <h5 className="text-dark font-weight-light mb-3">ADDRESS</h5>
                <p className="text-dark op-7">Candor Tech Space IT/ITES SEZ.
                  <br/> Kolkata</p>
                <h5 className="text-dark font-weight-light mb-3 mt-4">CALL US</h5>
                <p className="text-dark op-7">7488724492
                  <br/> singhatulsolu@gmail.com</p>
                <div className="round-social light">
                  <a href="#" className="ml-0 text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-facebook"></i></a>
                  <a href="#" className="text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-twitter"></i></a>
                  <a href="#" className="text-decoration-none text-white border border-white rounded-circle"><i className="icon-social-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}
export default Contact;