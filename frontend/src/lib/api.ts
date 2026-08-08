export interface BackendHealth {
  status: "ok";
  service: string;
}

export type BackendHealthResult =
  | {
      connected: true;
      data: BackendHealth;
    }
  | {
      connected: false;
      error: string;
    };

const API_BASE_URL = (
  process.env.CHEMLEARN_API_BASE_URL ?? "http://127.0.0.1:8000/api"
).replace(/\/$/, "");

function isBackendHealth(value: unknown): value is BackendHealth {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const health = value as Record<string, unknown>;

  return health.status === "ok" && typeof health.service === "string";
}

export async function getBackendHealth(): Promise<BackendHealthResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/health/`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        connected: false,
        error: `Backend returned HTTP ${response.status}`,
      };
    }

    const data: unknown = await response.json();

    if (!isBackendHealth(data)) {
      return {
        connected: false,
        error: "Backend returned an unexpected response",
      };
    }

    return {
      connected: true,
      data,
    };
  } catch {
    return {
      connected: false,
      error: "Unable to reach ChemLearn backend",
    };
  }
}