import React from 'react'
import HeroImage from '../../components/climbing_plan/HeroImage'
import {HOME_IMAGE} from '../../providers/constants'

export default function HomeBanner() {
  return (
      <HeroImage imageName={HOME_IMAGE}/>
  )
}
