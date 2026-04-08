import React from "react";
import Whoweareimage from "../../assets/whoweare.jpg";

function Whoweare() {
  return (
    <div className="who_we_are">
      <h1>Who We are ?</h1>
      <div className="left_who_we_are">
        Nextgen Oera is a dynamic and forward-thinking technology company
        founded by a group of young, passionate, and highly motivated
        professionals who are dedicated to delivering reliable hardware and
        software solutions. Our team brings together technical expertise,
        innovative thinking, and a strong commitment to helping businesses build
        and maintain robust technological infrastructures. In today’s rapidly
        evolving digital landscape, organizations depend heavily on dependable
        IT systems and modern hardware infrastructure to remain competitive and
        efficient. At Nextgen Oera, we understand the critical role that
        technology plays in business growth and operational success. Our mission
        is to provide high-quality hardware services, technical support, and
        integrated technology solutions that empower our clients to operate
        smoothly and scale confidently. We specialize in delivering a wide range
        of hardware-related services, including system setup, infrastructure
        support, hardware maintenance, network configuration, and data center
        assistance. Alongside our hardware capabilities, we also provide
        complementary software services that help organizations integrate
        technology more effectively into their daily operations. By combining
        hardware expertise with software understanding, we ensure that our
        clients receive comprehensive and practical solutions tailored to their
        specific needs. What sets Nextgen Oera apart is our customer-focused
        approach. We believe that every client is unique, and therefore every
        solution should be designed with their goals, challenges, and growth
        plans in mind. Our team works closely with clients to understand their
        requirements and deliver solutions that are reliable, scalable, and
        future-ready. As a young and ambitious company, we are driven by
        innovation, continuous learning, and a passion for technology. We
        constantly stay updated with the latest advancements in hardware
        infrastructure, IT support systems, and emerging technologies to ensure
        that our clients receive the most effective solutions available. At
        Nextgen Oera, our vision is to become a trusted technology partner for
        businesses by delivering dependable services, building long-term
        relationships, and contributing to the digital transformation of
        organizations across industries. We are not just a service provider—we
        are a team committed to helping businesses move forward with confidence
        in the power of technology.
      </div>
      <div className="right_who_we_are"></div>

      <img src={Whoweare} alt="whoweare" srcset="whoweare" />
    </div>
  );
}

export default Whoweare;
