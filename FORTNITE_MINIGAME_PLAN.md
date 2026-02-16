# Fortnite Minigame – Plan & Research

## Research: Fortnite Battle Royale Core Concepts

### Core loop
- **Last standing** on a large map; **storm** shrinks safe zone and forces encounters.
- **Loot** from ground, chests, and eliminations; **rarity** (gray→gold) = power.
- **Building** (wood/brick/metal) for defense/offense; we have single wall type.
- **Vehicles** for rotation; we have cars (enter/exit, drive, explosion).

### Storm (real game)
- **Early phases**: Long wait + shrink (2–3 min each), low damage (1–5 HP/s).
- **Mid/late**: Shorter wait (30–50 s), then near-continuous shrink, 8–10+ HP/s.
- **Moving circles** late game: next zone can be outside current, forcing everyone to move.

### NPCs / Bots
- Predictable, less skilled, fill lobbies; good for practice.
- Can be exploited (e.g. walls, traps); tend to push or hold angles.

---

## Current Implementation (minigame + main)

| Feature | Status |
|--------|--------|
| Map 3× (1800), scattered spawns | ✅ |
| Storm phases, shrink, damage | ✅ |
| Weapons + rarity (gray→gold), getWeaponDef | ✅ |
| NPCs target everyone, prefer threat + low HP | ✅ |
| Enemy bullets hit player + other NPCs, drops | ✅ |
| Cars, village, trees/rocks, collision | ✅ |
| Player walls (materials), loot (weapon/ammo/shield/med) | ✅ |

---

## Implementation Worth Adding / Tuning

### 1. **Storm tempo (more Fortnite-like)**
- **Idea**: Longer early phases (calm looting), then faster late game.
- **Change**: Increase phase 0–1 durations (e.g. 1200→1800, 900→1200) and/or slightly slow early shrink; keep late phases tight.

### 2. **NPC behavior**
- **Reaction to damage**: When an NPC is hit, briefly prefer retreat or re-evaluate target (so they don’t stand still and tank).
- **Accuracy**: Slightly more spread or lower fire rate so fights feel less “laser” and more like bots.
- **Engagement range**: Keep 50–200; optionally reduce aggression at very long range (e.g. don’t shoot past 150 unless high threat).

### 3. **Difficulty / balance**
- **Enemy fire rate**: Slightly increase `shootTimer` (e.g. 95–175 → 110–200) so NPCs don’t melt the player.
- **Storm damage**: Ensure early storm is survivable (already 10/12 per 12 ticks); optional: 1–2 ticks of grace after phase change.
- **Player visibility**: “X remaining” and kill feedback already present; optional: small minimap or “next circle” hint (faint inner circle).

### 4. **Polish (optional)**
- **Next circle preview**: Draw a faint inner circle for the next safe zone when phase is about to change (if we store next phase radius).
- **Chests**: Treat some loot spawns as “chest” (guaranteed weapon + 1 consumable); already close with current loot tables.
- **Building**: Second material type (e.g. “brick”) or higher wall HP for more Fortnite-like building (optional, more work).

---

## Test Plan (browser)

1. **Play 2–3 runs** of the minigame: early game (loot, first fights), mid (storm push, NPC vs NPC), late (small circle).
2. **Note**: Is early game too chaotic? Do NPCs kill the player too fast? Is storm pressure fair?
3. **Tune**: Apply 1–2 of the above (storm tempo, NPC shoot timer / spread, damage reaction) and re-test.

---

## Implemented (this pass)

- **Storm tempo**: Phase 0 duration 1200→1800 (~30s), phase 1 900→1200 (~20s). Early storm damage 10/12→8/10; later phases 14/18/24/32 for smoother ramp.
- **NPC fire rate**: Shoot cooldown 95–175 → 115–205 ticks; spread 0.14→0.18 (less laser-like).
- **NPC reaction to damage**: On hit (player or NPC bullet), set `recentlyHit = 25`. While `recentlyHit > 0`: NPC cannot shoot; NPC retreats at 1.2× speed (flinch). Makes bots feel less “stand and trade.”
- **Enemy bullet damage**: 6–12 → 5–10 vs player and vs other NPCs (slightly less punishing when focused).
- **Synced** all of the above to `mathieu-range-ta-chambre.html`.
