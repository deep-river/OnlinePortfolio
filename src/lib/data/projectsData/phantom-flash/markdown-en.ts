// 角色和职责的Markdown内容
export const rolesMarkdown = `
# Gameplay Programmer
- Implemented multiple puzzle mechanics.
- Developed UI system including Start Screen, Pause Menu, and HUD interfaces with UGUI.

# System Designer
- Designed core gameplay loop and interactive experience balancing exploration/puzzle pacing.
- Crafted all in-game puzzles with progression balancing and contextual feedback.
- Designed UI components for pause menu and HUD.
`;

// 游戏设计亮点的Markdown内容
export const gameDesignMarkdown = `
# System Design Document For Horror-Themed Exploration Puzzle Game

**Genre:** 3D first-person exploration puzzle game with horror/thriller elements.  
**Platforms:** PC/Web

## 1. Control Scheme
- WASD: Character movement
- Mouse: Camera control
- E Key: Interact with environmental props
- F Key: Toggle camera mode
- Left Click (Camera Mode): Capture photo
- Left Click (Combat Mode): Fire weapon

## 2. Core Gameplay Loop
1. Player enters game scene
2. Environmental exploration
3. Discover and solve puzzles
4. Collect critical items
5. Use camera to detect hidden entities
6. Engage in evasion/combat
7. Achieve level objectives

## 3. Level Design Framework
**Environment:** Confined indoor/nighttime settings (e.g., derelict mansions, isolated structures) with Western architectural motifs.

**Pacing:** Linear exploration paths guided by dynamic lighting, ambient audio cues, and object placement (e.g., flickering corridor lights directing attention).

**Interactivity:** Contextual UI prompts (e.g., "Requires Key" near locked doors) and strategically placed monster triggers in open areas.

**Reference:** Resident Evil 7 atmosphere.

## 4. Narrative & Progression
**Synopsis:** Players assume the role of a paranormal investigator using a spectral camera to reconstruct occult events, ultimately summoning and defeating a demonic entity.

**Key Progression:**
- Phase 1: Collect clues → Solve puzzles → Reconstruct ritual site.
- Phase 2: Utilize camera to expose and combat manifestations.

## 5. System Architecture

### 5.1 Base Character Controller
First-person controller with smooth movement/camera rotation.

### 5.2 Interactable Objects
- Boolean Toggle Switches: Binary state changes (e.g., light switches, drawers).
- Single-Use Items: Disabled post-interaction.
- Multi-State Objects: Cycle through predefined states (e.g., ritual artifacts).
- Lore Fragments: Non-functional items delivering narrative via UI text.

### 5.3 Collectibles
Passive items tracked via UI (e.g., "0/3 Keys Collected"). Full collection unlocks progression.

### 5.4 Entity System (Ghosts/Monsters)
- Spawn Logic: Triggered post-ritual completion; hinted via pulsating aura/outlines.
- Combat Behavior:
  - Visibility: Entity outlines shift color based on health (Green → Yellow → Red).
  - Defeat: Three shots required; audio/visual feedback for positional tracking.

### 5.5 Camera Mechanics
- Mode: Immobilizes player; viewfinder UI simulates real-time exposure.
- Function: Flashlight illuminates targets; detects spectral entities (WIP: Battery system).

### 5.6 Combat System
- Weapon Unlock: Assemble firearm parts scattered pre-boss arena.
- Combat Design: Burst-fire mechanics with cooldown constraints.

### 5.7 Quest System
- Investigation Journal: Diegetic UI displaying objectives, photos, and lore.
- Task Types:
  1. Photo-Matching: Recreate reference images to spawn critical items.
  2. Item-Chain Puzzles: Sequential interactions (e.g., fuse → breaker box).
  3. Multi-State Challenges: Adjust objects to predefined configurations.
- Progress Manager: Tracks collectibles/puzzle states; updates UI dynamically.

### 5.8 UI Framework
- Main Menu: Start/Load/Settings/Quit.
- Pause Menu: Resume/Restart/Quit.
- HUD: Real-time tracking (e.g., "Entities Found: 0/3").
- Investigation Journal: Toggleable via hotkey; scrollable text/image panels.
- Contextual Prompts: "Press F" indicators near interactables.

## 6. Art Asset Requirements
**Core:**
- Modular indoor environments (walls, furniture).
- Entity models (specters, mutants).

**Advanced:** Dynamic lighting rigs, VFX for spectral detection.

## 7. Player Experience Design
**Emotional Arc:**
- Early Game: Gradual puzzle escalation to sustain engagement.
- Mid-Game: Timed challenges to induce tension.
- Finale: Low-skill-ceiling boss fights for cathartic payoff.

**Flow Theory Integration:**
- Per-level cycles of relaxation → tension → accomplishment.
- At least one stress → climax → resolution sequence per session.

**Reference:** [Flow Theory in Game Design](https://gameinstitute.qq.com/knowledge/100023)
`; 