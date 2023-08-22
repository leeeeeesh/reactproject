import React from 'react'
import MobileCategory from '../../components/mobile/mobilecategory/MobileCategory'
import MobileClinic from '../../components/mobile/mobileclinic/MobileClinic'
import MobileEvent from '../../components/mobile/mobileevent/MobileEvent'
import MobileInfo from '../../components/mobile/mobileinfo/MobileInfo'
import MobileItem from '../../components/mobile/mobileitem/MobileItem'
import MobileVisual from '../../components/mobile/mobilevisual/MobileVisual'

export default function MobileHome() {
  return (
    <div>
      <MobileVisual/>
      <MobileInfo/>
      
      <MobileCategory/>
      <MobileItem/>

      <MobileClinic/>
      <MobileEvent/>
    </div>
  )
}
