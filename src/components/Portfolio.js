import AirTerjunBusa from "../assets/images/bondowoso/AirTerjunBusa.jpg";
import KawahWurung from "../assets/images/bondowoso/kawahurung.jpg";
import Blawan from "../assets/images/bondowoso/Blawan.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={AirTerjunBusa} title="Air Terjun Busa">
              <img className="img-fluid" src={AirTerjunBusa} alt="images" />
              <div className="portfolio-box-caption">
                <div className="project-name">Air Terjun Busa</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={KawahWurung} title="Betah Soon">
              <img className="img-fluid" src={KawahWurung} alt="images" />
              <div className="portfolio-box-caption">
                <div className="project-name">Kawah Wurung</div>
              </div>
            </a>
          </div>
          {/* <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={BetohSoon} title="Betah Soon">
              <img className="img-fluid" src={BetohSoon} alt="images" />
              <div className="portfolio-box-caption">
                <div className="project-name">Betah Soon</div>
              </div>
            </a>
          </div> */}
          <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={Blawan} title="Blawan">
              <img className="img-fluid" src={Blawan} alt="images" />
              <div className="portfolio-box-caption">
                <div className="project-name">Blawan</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
