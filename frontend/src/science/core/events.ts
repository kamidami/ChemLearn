export interface ScienceEvent<TPayload = unknown> {
  type: string;
  payload: TPayload;
}