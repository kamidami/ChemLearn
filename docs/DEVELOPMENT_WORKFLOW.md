# ChemLearn Development Workflow

ChemLearn development is incremental and test-gated.

## Rule

Do not move to the next development chunk until the current chunk has:

1. been implemented
2. passed automated checks
3. been manually verified
4. been committed
5. been pushed to GitHub
6. left a clean Git working tree

## Development Order

Architecture
→ reusable platform systems
→ Chemistry 9 Chapter 1 vertical slice
→ validation
→ chapter-by-chapter expansion

## Commit Style

Examples:

chore: initialize ChemLearn platform architecture

feat: add curriculum domain models

feat: add scientific data library

feat: add simulation runtime

test: add atomic engine validation

fix: correct simulation state reset

docs: update chemistry architecture

## Development Principle

Never build a feature simply because it looks interesting.

Use:

Curriculum Objective
→ Learning Design
→ Scientific Requirements
→ Interaction Design
→ Implementation
→ Testing