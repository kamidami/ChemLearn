export type ScienceSuccess<T> = {
  ok: true;
  value: T;
};

export type ScienceFailure = {
  ok: false;
  error: {
    code: string;
    message: string;
  };
};

export type ScienceResult<T> = ScienceSuccess<T> | ScienceFailure;