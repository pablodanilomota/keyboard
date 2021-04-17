import { motion } from 'framer-motion'

/**
 * Hooks.
 */
import { useKeyboard } from '../../hooks/useKeyboard'
import { useEventListener } from '../../hooks/useEventListner'

/**
 * Components.
 */
import { Key } from '../../components/Key/components/Key'
import { Clock } from '../../components/Cronometer/components/Clock'
import { Points } from '../../components/Points/components/Points'
import { FullPage } from '../../components/Layout/components/FullPage'

/**
 * JSX.
 */
export function Keyboard() {
  /**
   * Hooks.
   */
  const { keyHandler } = useKeyboard()

  useEventListener('keydown', keyHandler)

  return (
    <FullPage>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Points />
        <Key />
        <Clock />
      </motion.div>
    </FullPage>
  )
}
