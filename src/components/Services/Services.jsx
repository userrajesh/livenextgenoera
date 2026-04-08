import "./Services.css";
import cloud from "../../assets/cloud.png"
import infra from "../../assets/infra.png"
import software from "../../assets/software.jpg"
import datacenter from '../../assets/datacenter.png'
function Services() {
  return (
    <section className="services">
      <h1 className="heading">What We Do</h1>

      <div className="cards">
        <div className="card">
          <div className="upper_section">
           <img src={cloud} alt="Cloud computing" className="image"  />
            <div className="icon">
              <i className="fa-solid fa-cloud"></i>
            </div>
          </div>

          <div className="lower_section">
            <h3>Cloud Solutions</h3>
            <p>
              Powerful cloud infrastructure services designed to scale your
              business and accelerate digital transformation.
            </p>

            <a href="#" className="btn">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="upper_section">
             <img src={infra} alt="infra" className="image"  />
            <div className="icon">
              <i class="fa-solid fa-building"></i>
            </div>
          </div>
          <div className="lower_section">
            <h3>Infrastructure Services</h3>
            <p>
              Powerful cloud infrastructure services designed to scale your
              business and accelerate digital transformation.
            </p>

            <a href="#" className="btn">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="upper_section">
            <img src={software} alt="infra" className="image"  />
            <div className="icon">
             <i class="fa-solid fa-code"></i>
            </div>
          </div>

          <div className="lower_section">
            <h3>Software Services</h3>
            <p>
              Powerful cloud infrastructure services designed to scale your
              business and accelerate digital transformation.
            </p>

            <a href="#" className="btn">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="upper_section">
            <img src={datacenter} alt="data-center" className="image"  />
            <div className="icon">
            <i class="fa-solid fa-server"></i>
            </div>
          </div>

          <div className="lower_section">
            <h3>Data Center Solution</h3>
            <p>
              Powerful cloud infrastructure services designed to scale your
              business and accelerate digital transformation.
            </p>

            <a href="#" className="btn">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
