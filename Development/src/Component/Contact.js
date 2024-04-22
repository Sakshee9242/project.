import React from 'react'
import Banner from './Banner'
import Footer from './Footer'

function Contact() {
  const data = {
    name : "Contact"
  }
  return (
    <div>
      <Banner myData={data}/>
      <section className="contact-main">
        <div className="container">
            <div className="contact-inner">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43035258.51816965!2d-135.5378995672093!3d48.826477205796216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1702473711227!5m2!1sen!2sin"
                                style={{border:0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="contact-form py-5 px-4">
                            <h2>Contect With Us</h2>
                            <p>If you have any questions please fell free to contact with us.</p>
                            <form action="" className="mt-5">
                                <div className="row g-4">
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="contact-input">
                                            <input type="text" placeholder="Name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="contact-input">
                                            <input type="email" placeholder="Email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="contact-input">
                                            <input type="number" placeholder="Phone" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="contact-input">
                                            <input type="text" placeholder="Subject" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="contact-input">
                                            <textarea className="form-control" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="contact-input">
                                            <a href="#" className="btn btn-danger w-100">Sent</a>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <input type="radio" /> <span>Do you want to subscribe our Newsletter ?</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-card-wrapper mt-5">
                <div className="row gy-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="contact-card">
                            <div className="icon d-flex gap-3">
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <h6>+(000) 13245 67800</h6>
                                    <p className='text-dark'>info@company.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="contact-card">
                            <div className="icon d-flex gap-3">
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h6>
                                        2 Fir e Brigade Road</h6>
                                    <p className='text-dark'>Chittagonj, Lakshmipur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="contact-card">
                            <div className="icon d-flex gap-3">
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <h6>
                                        Mon - Sat: 8am - 5pm</h6>
                                    <p className='text-dark'>Sunday Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer-section">
       <Footer />
    </footer>
    </div>
  )
}

export default Contact
