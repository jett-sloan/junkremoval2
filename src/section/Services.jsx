"use client"
import ServiceCard from "../components/ServicesCards"
const Services = () => {

  return (
    <div
      style={{ paddingBottom: "120px" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold", fontSize: "2.5rem", fontFamily: "sans-serif" }}>Services</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <ServiceCard
          title="Full House Clean Out"
          text="Our Full House Clean Out service provides comprehensive clearing of all items from your home, ensuring a clean and clutter-free space. Whether you're moving, downsizing, or just decluttering, we handle everything with care and efficiency"
        />
        <ServiceCard
          title="Junk Removal & Hauling"
          text="Our Junk Removal & Hauling service efficiently clears out unwanted items from your home or business. We handle all the lifting, hauling, and disposal, leaving your space clutter-free and ready for use."
        />
        <ServiceCard
          title="Light Demolitions"
          text="Our Light Demolition service safely removes unwanted structures or fixtures from your home or property. Whether it's old cabinetry, drywall, or small interior changes, we handle the job with precision and minimal disruption"
        />
        <ServiceCard
          title="Storage Unit Clean Outs"
          text="Our Storage Unit Clean Out service helps you clear out unwanted items from your storage space. We handle the sorting, removal, and disposal, ensuring your unit is left clean and organized."
        />
        <ServiceCard
          title="Furniture Removal"
          text="Our Full House Clean Out service provides comprehensive clearing of all items from your home, ensuring a clean and clutter-free space. Whether you're moving, downsizing, or just decluttering, we handle everything with care and efficiency"
        />
        <ServiceCard
          title="Yard Debris Removal"
          text="Our Furniture Removal service quickly and efficiently clears out unwanted furniture from your home or office. We ensure safe removal and disposal, leaving your space clean and clutter-free."
        />
      </div>
    </div>

  )
}

export default Services