
import emailjs from '@emailjs/browser';

const Footer = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset;
      };

    return (
        <div id="Contact" className="footer-wrapper">
            <h1 className="contact-me text-center"> Contact Me!</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="contact-wrap w-100 p-md-5 p-4 py-5">
                                        <h3 className="mb-4">Send me an Email</h3>
                                        <div id="form-message-warning" className="mb-4"></div>
                                        <form id="contactForm" name="contactForm" className="contactForm" onSubmit={sendEmail}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="submit" value="Send Message" className="btn btn-primary"/>
                                                            <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="info-wrap w-100 p-md-5 p-4 py-5 img">
                                        <h3 className="text-center">Contact information</h3>
                                        <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="text pl-3">
                                                <p><span>Phone:</span> <a href="tel://1234567920">+1 514 833 5350</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="text pl-3">
                                                <p><span>Email:</span> <a href="mailto:info@yoursite.com">nabil.amimer@mail.mcgill.ca</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="text pl-3">
                                                <p><span>GitHub</span> <a href="https://github.com/AmimerNabil">https://github.com/AmimerNabil</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;