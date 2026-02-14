import Hero from "./components/hero";
import Letter from "./components/Letter";
import LoveLanguage from "./components/LoveLanguage";
import Story from "./components/Story";
import CosmicBackground from "./components/CosmicBackground";
import ShimmeringBackground from "./components/ShimmeringBackground";


export default function App() {
  return (
    <div className="relative w-full bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-x-hidden text-center">
      <ShimmeringBackground count={120} />
      <CosmicBackground />
      <div className="relative z-10 w-full flex flex-col items-center text-center">
        <Hero />
        <Story />
        <LoveLanguage />
        <Letter />
      </div>
    </div>
  );
}
