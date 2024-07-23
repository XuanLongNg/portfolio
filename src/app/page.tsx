import AboutMe from "@/components/page/home-page/content/about-me/AboutMe";
import Project from "@/components/page/home-page/content/project/Project";
import Contact from "@/components/page/home-page/content/contact/Contact";
import Home from "@/components/page/home-page/content/home/Home";

export default function HomePage() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Project />
      <Contact />
    </div>
  );
}
