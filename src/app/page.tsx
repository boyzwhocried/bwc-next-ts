import AcademicJourney from "@/components/content/AcademicJourney";
import AboutMe from "@/components/content/AboutMe";
import Projects from "@/components/content/Projects";
import DefaultFrame from "@/components/others/DefaultFrameLayout";
import V from "@/components/content/V";

export default function Page() {
  return (
    <>
      <DefaultFrame>
        <AboutMe />
        <AcademicJourney />
        <Projects />
        <V/>
      </DefaultFrame>
    </>
  );
}
