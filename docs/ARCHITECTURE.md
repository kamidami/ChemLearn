## Science Platform Dependency Rule

The Science Platform must remain independent of curriculum presentation.

Allowed direction:

Course / Lesson
→ Simulation / Activity
→ Science Engine
→ Scientific Data

Scientific data must not depend on lessons.

Scientific engines must not depend on React, PixiJS, or lesson components.

Rendering systems may consume scientific state but must never determine
scientific outcomes.

## Reusability Rule

A general scientific object or capability should be implemented once.

Examples:

- Sodium is defined once.
- A beaker is implemented once.
- Pouring is implemented once.
- Atomic-number calculation is implemented once.
- Neutralization rules are implemented once.

Lessons configure and reuse those capabilities.