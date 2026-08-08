import type { ScienceResult } from "./result";

export interface ScienceEngine<TInput, TOutput> {
  readonly id: string;

  evaluate(input: TInput): ScienceResult<TOutput>;
}