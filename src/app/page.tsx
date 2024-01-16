import AcademicJourney from "@/components/content/AcademicJourney";
import AboutMe from "@/components/content/AboutMe";
import Projects from "@/components/content/Projects";
import DefaultFrame from "@/components/others/DefaultFrameLayout";

export default function Page() {
  return (
    <>
      <DefaultFrame>
        <AboutMe />
        <AcademicJourney />
        <Projects />
      </DefaultFrame>
    </>
  );
}
