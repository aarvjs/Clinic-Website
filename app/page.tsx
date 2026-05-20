import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import DepartmentsPreview from "@/components/home/DepartmentsPreview";
import DoctorsPreview from "@/components/home/DoctorsPreview";
import HealthTips from "@/components/home/HealthTips";
import Testimonials from "@/components/home/Testimonials";
import AppointmentCTA from "@/components/home/AppointmentCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <DepartmentsPreview />
      <DoctorsPreview />
      <HealthTips />
      <Testimonials />
      <AppointmentCTA />
    </>
  );
}
