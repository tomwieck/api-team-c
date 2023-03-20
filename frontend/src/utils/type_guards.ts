export function isError(e: unknown): e is Error {
  return (e as Error).message !== undefined;
}
