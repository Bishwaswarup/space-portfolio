import { X, Github, Star, GitCommit, Radio } from 'lucide-react';
import { projects, profile } from '../data/projects.js';

export default function MissionControlHUD({ activeProject, onSelect, onClose }) {
  return (
    <div className="hud-layer">
      <div className="scan-corner tl" />
      <div className="scan-corner tr" />
      <div className="scan-corner bl" />
      <div className="scan-corner br" />

      <div className="hud-header">
        <div className="call-sign">{profile.callSign}</div>
        <h1>{profile.title}</h1>
      </div>

      <nav className="nav-rail">
        {projects.map((p) => (
          <button
            key={p.id}
            className={`nav-btn ${activeProject?.id === p.id ? 'active' : ''}`}
            onClick={() => onSelect(p)}
          >
            {p.name}
            <small>{p.stats.status}</small>
          </button>
        ))}
      </nav>

      <div className="telemetry-strip">
        <span><Radio size={11} style={{ verticalAlign: '-2px' }} /> LINK <b>NOMINAL</b></span>
        <span>BODIES <b>{projects.length}</b></span>
        <span>ORBIT <b>{activeProject ? activeProject.name.toUpperCase() : 'FREE CAM'}</b></span>
      </div>

      <div className={`drawer ${activeProject ? 'open' : ''}`}>
        {activeProject && (
          <>
            <button className="drawer-close" onClick={onClose}>
              <X size={16} />
            </button>
            <div className="eyebrow">Project Log</div>
            <h2>{activeProject.name}</h2>
            <p className="desc">{activeProject.description}</p>

            <div className="stat-grid">
              <div className="stat-box">
                <div className="label"><Star size={10} style={{ verticalAlign: '-1px' }} /> STARS</div>
                <div className="value">{activeProject.stats.stars}</div>
              </div>
              <div className="stat-box">
                <div className="label"><GitCommit size={10} style={{ verticalAlign: '-1px' }} /> COMMITS</div>
                <div className="value">{activeProject.stats.commits}</div>
              </div>
            </div>

            <div className="tag-row">
              {activeProject.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>

            <a className="repo-link" href={activeProject.repo} target="_blank" rel="noreferrer">
              <Github size={16} /> View Repository
            </a>
          </>
        )}
      </div>
    </div>
  );
}
