\# ChemLearn Science Platform



The Science Platform contains reusable scientific data and deterministic

scientific logic used throughout ChemLearn.



It must not contain curriculum-specific lesson content.



\## Core Principle



Build scientific capability once and reuse it across multiple lessons,

chapters, courses, simulations, and laboratories.



\## Responsibilities



\### core



Shared scientific contracts, result types, events, and engine interfaces.



\### data



Canonical scientific definitions such as:



\- elements

\- chemicals

\- compounds

\- physical properties



Scientific entities should have one source of truth.



\### atoms



Reusable logic related to:



\- protons

\- neutrons

\- electrons

\- atoms

\- ions

\- isotopes



\### molecules



Reusable molecular representations and molecule-building logic.



\### reactions



Deterministic chemical reaction rules and reaction state.



\### lab



Reusable laboratory objects and interactions such as:



\- containers

\- pouring

\- heating

\- stirring

\- probes

\- measuring



\### measurement



Scientific quantities, measurements, units, accuracy, and precision.



\### simulations



Adapters that expose Science Platform behaviour to interactive simulations.



\## Architectural Rules



1\. Science calculations must not depend on React components.

2\. Science calculations must not depend on PixiJS rendering.

3\. Rendering does not determine scientific outcomes.

4\. Lesson content does not implement chemistry calculations.

5\. Scientific data must be centralized.

6\. Chapter-specific code should configure reusable science systems.

7\. Science engines should be deterministic whenever the same input state

&#x20;  should produce the same scientific result.



\## Intended Flow



Student Interaction

→ Simulation

→ Science Engine

→ Scientific State

→ Renderer

→ Student Observation



The renderer visualizes scientific state but does not invent it.

