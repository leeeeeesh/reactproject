import React from 'react'
import MobileClinic from '../../components/mobile/mobileclinic/MobileClinic'
import MobileEvent from '../../components/mobile/mobileevent/MobileEvent'
import MobileInfo from '../../components/mobile/mobileinfo/MobileInfo'
import MobileVisual from '../../components/mobile/mobilevisual/MobileVisual'

export default function MobileHome() {
  return (
    <div>
      <MobileVisual/>
      <MobileInfo/>
      <div></div>
      <MobileClinic/>
      <MobileEvent/>
    </div>
  )
}
