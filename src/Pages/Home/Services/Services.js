import React from "react";
import useService from "../../../hooks/useService";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
    const [services, setServices] = useService();
  return (
    <div>
        <h2>Our Confidence Zone</h2>
      <div className="dis-container">
          {
              services.map(service => <Service key={service.id} service={service}></Service>)
          }
      </div>
    </div>
  );
};

export default Services;
