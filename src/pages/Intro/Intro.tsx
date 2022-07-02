import { ReactElement } from 'react'

import './Intro.scss'
import TripleAwards from '../../components/TripleAwards/TripleAwards'

const Intro = (): ReactElement => {
  return (
    <div id="intro">
      <TripleAwards />
    </div>
  )
}

export default Intro
