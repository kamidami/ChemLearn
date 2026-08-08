import { connection } from "next/server";

import { getBackendHealth } from "@/lib/api";

export async function BackendStatus() {
  await connection();

  const result = await getBackendHealth();

  if (!result.connected) {
    return (
      <section>
        <h2>System Status</h2>
        <p>🔴 Backend disconnected</p>
        <p>{result.error}</p>
      </section>
    );
  }

  return (
    <section>
      <h2>System Status</h2>
      <p>🟢 Backend connected</p>
      <p>Service: {result.data.service}</p>
    </section>
  );
}