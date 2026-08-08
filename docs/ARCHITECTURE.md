# ChemLearn Architecture

## Architectural Goal

Build reusable scientific capabilities once and configure them for different lessons.

## Major Layers

### 1. Learning Platform

Responsible for:

- courses
- chapters
- lessons
- learning outcomes
- assessments
- progress
- localization

### 2. Science Platform

Responsible for reusable scientific systems.

Planned modules:

- Scientific Data Library
- Atomic Engine
- Bond Engine
- Molecule Engine
- Chemistry Reaction Engine
- Stoichiometry Engine
- Acid/Base Engine
- Energetics Engine
- Equilibrium Engine
- Wet Lab Engine
- Periodic Table Engine
- Measurement Engine

### 3. Simulation Platform

Responsible for interaction and visualization.

Examples:

- drag
- drop
- pour
- tilt
- stir
- heat
- cool
- attach
- probe
- measure
- collect
- particle effects

## Separation of Responsibilities

Interaction Engine:
Determines what the student physically did.

Science Engine:
Determines the scientific result.

Rendering Engine:
Displays the resulting state.

Course Engine:
Determines the educational context.

Example:

Student pours NaOH
→ Pour Engine measures transferred volume
→ Chemistry Engine evaluates the reaction
→ resulting chemical state is generated
→ visual system displays the result
→ lesson receives completion/progress events

## Scientific Source of Truth

Scientific data should be centralized.

An element, chemical or compound should not have separate conflicting definitions in different chapters.

Example:

Sodium data should be defined once and reused by:

- Atomic Structure
- Chemical Bonding
- Periodic Table
- Group Properties

## Chapter Architecture

Chapters should configure reusable components rather than recreate them.

Example:

A neutralization lesson may request:

- beaker
- HCl
- NaOH
- pH meter
- pouring capability
- acid/base chemistry capability

The lesson should not implement those systems itself.

## Important Rule

Visual effects never decide chemistry.

Scientific engines calculate outcomes.
Rendering systems visualize them.