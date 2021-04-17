/**
 * Hook.
 */
export function useRandom() {
  /**
   * Randomize letter.
   */
  const randomizeLetter = () =>
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 1)

  return {
    randomizeLetter
  }
}
