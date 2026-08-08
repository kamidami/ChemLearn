import { BackendStatus } from "@/components/backend-status";

export default function Home() {
  return (
    <main>
      <header>
        <p>CHEMLEARN</p>

        <h1>Interactive Chemistry Learning Platform</h1>

        <p>
          Learn chemistry through guided lessons, scientific models,
          simulations, experiments, and practice.
        </p>
      </header>

      <BackendStatus />

      <section>
        <h2>Initial Course</h2>
        <h3>Chemistry 9</h3>

        <p>
          Chemistry 9 will be the first complete interactive ChemLearn course.
        </p>
      </section>

      <section>
        <h2>Platform Foundation</h2>

        <ul>
          <li>Course Engine — planned</li>
          <li>Science Platform — planned</li>
          <li>Simulation Engine — planned</li>
          <li>Assessment Engine — planned</li>
          <li>Progress Engine — planned</li>
        </ul>
      </section>
    </main>
  );
}