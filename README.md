# ChemLearn

ChemLearn is an interactive curriculum-guided chemistry learning platform.

The first course will be Chemistry 9, followed later by Chemistry 10.

ChemLearn combines:

- structured curriculum lessons
- visual explanations
- interactive scientific simulations
- reusable virtual laboratory components
- deterministic chemistry calculations
- practice and assessments
- student progress and mastery tracking
- English and Roman Urdu learning support

## Core Principle

Build the science once and reuse it across many learning experiences.

The curriculum determines what is taught.
ChemLearn determines how it is taught.
Scientific engines determine chemistry outcomes.
Visual systems display those outcomes.

## Initial Product Scope

The first major product target is:

Chemistry 9 → complete interactive course

Development begins with:

Chemistry 9 → Chapter 1 → complete vertical slice

## Planned Technology

Frontend:
- Next.js
- React
- TypeScript

Interactive systems:
- HTML/CSS/SVG
- PixiJS for complex 2D simulations
- Three.js only where genuine 3D adds educational value

Backend:
- Django
- Django REST Framework
- PostgreSQL

Testing:
- frontend/unit testing
- Django/pytest
- Playwright end-to-end tests

## Repository Structure

- `frontend/` — web application and simulations
- `backend/` — API, curriculum, users and progress
- `shared/` — shared schemas and scientific definitions
- `docs/` — product and architecture documentation
- `tests/` — cross-system and end-to-end tests