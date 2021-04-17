import { useEffect, useRef } from 'react'

/**
 * Type definitions.
 */
type Props = {
  key: string
}

/**
 * Hook.
 */
export function useEventListener(
  eventName: string,
  handler: ({ key }: Props) => void,
  element = window
) {
  const savedHandler = useRef<({ key }: Props) => void>()

  /**
   * Effects.
   */
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener

    /**
     * If is supported.
     */
    if (!isSupported) return

    //@ts-ignore
    const eventListener = event => savedHandler.current(event)

    /**
     * Add event listener.
     */
    element.addEventListener(eventName, eventListener)

    /**
     * Remove event listener on cleanup.
     */
    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
