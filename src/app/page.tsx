import AboutMe from "@/components/page/home-page/content/about-me/AboutMe";
import Contact from "@/components/page/home-page/content/contact/Contact";
import Home from "@/components/page/home-page/content/home/Home";
import Project from "@/components/page/home-page/content/project/Project";
import Experience from "@/components/page/home-page/content/experience/Experience";

export default function HomePage() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
