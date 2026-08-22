// Real repos from github.com/bishwaswarup — update stars/commits after pushing,
// or wire them live via the GitHub REST API at build time (see SETUP.md).
export const projects = [
  {
    id: 'orbital-transfer',
    name: 'Orbital Transfer App',
    tagline: 'Interplanetary trajectory design with real ephemerides',
    description:
      "Interactive astrodynamics app for designing interplanetary transfer trajectories. Solves Lambert's problem over real planetary ephemerides so you can visualise and tune departure windows for any two planets.",
    stack: ['Python', 'SciPy', 'Astropy', 'Streamlit'],
    stats: { stars: '0', commits: '—', status: 'Active' },
    repo: 'https://github.com/bishwaswarup/orbital-transfer-app',
    color: '#5eead4',
    radius: 6,
    speed: 0.18,
    size: 0.55,
  },
  {
    id: 'nanosatellite',
    name: 'Nanosatellite Constellation',
    tagline: 'SGP4 LEO simulator with collision avoidance',
    description:
      'SGP4-based LEO satellite constellation simulator that models station-keeping manoeuvres, flags conjunction events for collision avoidance, and surfaces everything through an interactive Streamlit dashboard.',
    stack: ['Python', 'SGP4', 'NumPy', 'Streamlit'],
    stats: { stars: '0', commits: '—', status: 'Active' },
    repo: 'https://github.com/bishwaswarup/nanosatellite_constellation',
    color: '#f5a623',
    radius: 9,
    speed: 0.12,
    size: 0.7,
  },
  {
    id: 'chess-engine',
    name: 'CHESS Training',
    tagline: 'Alpha-beta search engine + NNUE evaluator',
    description:
      'Chess engine combining iterative-deepening alpha-beta search with a NNUE (Efficiently Updatable Neural Network) evaluator trained on Lichess position-evaluation data. Fast incremental updates keep inference cheap at every node.',
    stack: ['Python', 'PyTorch', 'Lichess data'],
    stats: { stars: '0', commits: '—', status: 'Active' },
    repo: 'https://github.com/bishwaswarup/CHESS_training',
    color: '#a78bfa',
    radius: 12,
    speed: 0.09,
    size: 0.6,
  },
  {
    id: 'uvpm',
    name: 'UVPM Oscillating Plate',
    tagline: 'Unsteady wake shedding via vortex panel method',
    description:
      'Simulates unsteady aerodynamics and wake shedding of a heaving/pitching flat plate using the Unsteady Vortex Panel Method (UVPM). Resolves time-evolving lift, drag, and vortex wake structure for arbitrary prescribed kinematics.',
    stack: ['Python', 'NumPy', 'Matplotlib'],
    stats: { stars: '1', commits: '—', status: 'Maintained' },
    repo: 'https://github.com/bishwaswarup/uvpm-oscillating-plate',
    color: '#ff5c5c',
    radius: 15,
    speed: 0.07,
    size: 0.5,
  },
  {
  id: 'vision-rendezvous',
  name: 'Vision-Based Spacecraft Rendezvous',
  tagline: 'Closed-loop autonomous docking with robust visual pose estimation',
  description:
    'A modular Python simulation framework for autonomous spacecraft rendezvous. Integrates EPnP pose estimation, RANSAC outlier rejection, MEKF/UKF state estimation, and LQR/MPC guidance under HCW relative orbital dynamics. Validated end-to-end via Monte Carlo: 100 % docking success across 0.3–4.0 px image noise. Published as a preprint on Zenodo.',
  stack: ['Python', 'NumPy', 'SciPy', 'OpenCV', 'CVXPY'],
  stats: { stars: '—', commits: '—', status: 'Published' },
  repo: 'https://zenodo.org/records/22062060',
  color: '#818cf8',
  radius: 9,
  speed: 0.10,
  size: 0.45,
},
];

export const profile = {
  callSign: 'Mission Control',
  title: 'Engineering Systems Overview',
  handle: '@bishwaswarup',
  bio: 'Physics researcher at IISc building at the intersection of astrodynamics, aerodynamics, and machine learning.',
};
