import Copyright from "./Copyright";
import MadeWith from "./MadeWith";
import Socials from "./Socials";


function Footer() {
  return (
    <footer className="flex flex-col gap-4 max-w-screen-xl justify-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-col items-center sm:items-start">
          {/* <MiniPlayer /> */}
        </div>
        <div className="flex flex-col items-center">
          <Socials />
        </div>
      </div>
      <MadeWith />
      <Copyright />
    </footer>
  );
}

export default Footer;
