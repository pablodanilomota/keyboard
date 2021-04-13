/**
 * Components.
 */
import { Key } from '../../components/Key/components/Key'
import { Clock } from '../../components/Cronometer/components/Clock'
import { FullPage } from '../../components/Layout/components/FullPage'

/**
 * JSX.
 */
export function Keyboard() {
  return (
    <FullPage>
      <Key></Key>
      <Clock></Clock>
    </FullPage>
  )
}
