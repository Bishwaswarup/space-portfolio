import { useState } from 'react';
import SpaceCanvas from './components/SpaceCanvas.jsx';
import MissionControlHUD from './components/MissionControlHUD.jsx';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="app-root">
      <div className="canvas-layer">
        <SpaceCanvas activeProject={activeProject} onSelect={setActiveProject} />
      </div>
      <MissionControlHUD
        activeProject={activeProject}
        onSelect={setActiveProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
