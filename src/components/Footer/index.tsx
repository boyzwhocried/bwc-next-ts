import Copyright from "./Copyright";
import MadeWith from "./MadeWith";
import MiniPlayer from "./MiniPlayer";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="max-w-screen-2xl flex flex-col justify-center gap-4 p-4 mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <MiniPlayer />
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
