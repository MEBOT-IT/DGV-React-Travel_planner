import React from "react";
import "./Foooter.css";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/LinkedIn.png";
import insta from "../images/insta1.png";

const Foooter = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4 className="footh">For Business</h4>
            <br></br>
            <div className="no-1">
              <a id="foota" href="/employee">
                <p>Employee</p>
              </a>
              <br></br>
              <a id="foota" href="/healthplan">
                <p>Helath Plan</p>
              </a>
              <br></br>
              <a id="foota" href="/individual">
                <p>Individual</p>
              </a>
              <br></br>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4 className="footh">Resources</h4>
            <br></br>
            <div className="no-2">
              <a id="foota" href="/resource">
                <p>Resource center</p>
              </a>
              <br></br>
              <a id="foota" href="/resource">
                <p>Testimonaials</p>
              </a>
              <br></br>
              <a id="foota" href="/resource">
                <p>STV</p>
              </a>
              <br></br>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4 className="footh">Partners</h4>
            <br></br>
            <div className="no-3">
              <a id="foota" href="/employer">
                <p>Swing Tech</p>
              </a>
              <br></br>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4 className="footh">Company</h4>
            <br></br>
            <div className="no-4">
              <a id="foota" href="/about">
                <p>About</p>
              </a>
              <br></br>
              <a id="foota" href="/press">
                <p>Press</p>
              </a>
              <br></br>
              <a id="foota" href="/career">
                <p>Career</p>
              </a>
              <br></br>
              <a id="foota" href="/contact">
                <p>Contact </p>
              </a>
              <br></br>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4 className="footh2">Coming Soon On</h4>
            <br></br>
            <div className="socialmedia">
              <p>
                <img className="footimg" src={fb} />
              </p>
              <p>
                <img className="footimg" src={twitter} />
              </p>
              <p>
                <img className="footimg" src={linkedin} />
              </p>
              <p>
                <a
                  href="https://instagram.com/_v.i.c.k.y_26_?igshid=NzZlODBkYWE4Ng=="
                  target="_blank"
                >
                  <img className="footimg1" src={insta} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below-links">
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} Trek Tales.All rights reserved.
            </p>
          </div>
        </div>
        <br></br>
        <div className="sb_footer-below-links">
          <a id="foota" href="/terms">
            <div>
              <p>Terms & Conditions</p>
            </div>
          </a>
          <a id="foota" href="/terms">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a id="foota" href="/terms">
            <div>
              <p>Security</p>
            </div>
          </a>
          <a id="foota" href="/terms">
            <div>
              <p>Cookie Declaration</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foooter;
