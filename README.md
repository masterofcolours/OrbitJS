# N-Body Simulator

A pure **JavaScript** N-Body gravitational simulator that uses the **Verlet integration** method to simulate the motion of multiple bodies under mutual gravitational attraction.

The simulator also visualizes the orbital paths of the bodies as particle trails.

---

## Features

- N-Body gravitational simulation using **Verlet Integration**
- Real-time orbital path rendering (particle trails)
- Momentum transfer between bodies
- Inelastic collision: when two particles collide, the lighter one is destroyed and its mass is added to the heavier particle
- Mouse interaction:
  - Drag particles to reposition them
  - Give particles an initial velocity
- **Log Panel**: Displays detailed information about each particle (position, velocity, mass, etc.)
- Control buttons: **Start**, **Play**, and **Pause**
- Modular architecture using **Custom Elements** and ES Modules
- All particles start with the same size (masses can change through collisions)

---

## Technologies

- Vanilla JavaScript (no frameworks or libraries)
- ES Modules
- Custom Elements
- HTML5 Canvas

---

## How to Run

Because the project uses **ES Modules**, you cannot simply open the `index.html` file directly in the browser (due to CORS restrictions with the `file://` protocol).

### Recommended method:

1. Open the project folder in **VS Code**
2. Install the **Live Server** extension (if you don't have it)
3. Right-click on `index.html` → **Open with Live Server**

Alternatively, you can use any other local development server (e.g. `npx serve`, Python's `http.server`, etc.).

---

## Controls

| Action                      | How to perform                          |
|----------------------------|-----------------------------------------|
| Move a particle            | Click and drag with the mouse          |
| Apply initial velocity     | Drag and release                       |
| View particle info         | Check the **Log Panel**                |
| Start simulation           | Click the **Start** button             |
| Play / Resume              | Click the **Play** button              |
| Pause simulation           | Click the **Pause** button             |
| View orbits                | Automatically rendered                 |

---

## Physics

- **Integration method**: Velocity Verlet (more stable than Euler for orbital mechanics)
- **Force**: Newtonian gravity between all pairs of bodies
- **Collision handling**: The lighter particle is removed and its mass + momentum is transferred to the heavier one
- All particles initially have identical dimensions

---

## Project Structure

The project is modular and uses Custom Elements + ES Modules to separate concerns (physics, rendering, interaction, particle management, and the log panel).

---

## Development Note

Approximately **90%** of this project was written without AI assistance.  
Only the orbital trail rendering section was implemented with the help of AI (primarily for obtaining the relevant physical formulas).

---

## License

This project is free to use for learning, personal projects, or further development.

## Project Structure

```text
.
├── .vscode/
│   └── extensions.json
├── components/
│   ├── log/
│   │   └── log.js
│   ├── log-item/
│   │   ├── log-item-style.css
│   │   └── log-item.js
│   └── path/
│       ├── path.css
│       └── path.js
├── pics/
├── src/
│   ├── class-objects/
│   │   ├── object-style.css
│   │   └── object.js
│   ├── world/
│   │   ├── god-hands/
│   │   │   └── movement.js
│   │   ├── math/
│   │   │   ├── acceleration.js
│   │   │   ├── distance.js
│   │   │   ├── force.js
│   │   │   ├── kinetic-energy.js
│   │   │   ├── orbit.js
│   │   │   ├── orbital-speed.js
│   │   │   └── potential-energy.js
│   │   ├── physics/
│   │   │   └── collision.js
│   │   └── world.js
│   └── utils/
│       └── global-variables.js
├── index.html
├── main.css
├── main.js
└── README.md


