import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"skinCare"} heading={"Skin Care Products"}/>
      <HorizontalCardProduct category={"perfumes"} heading={"Perfumes"}/>

      <VerticalCardProduct category={"nails"} heading={"Nail and cuticle products"}/>
      <VerticalCardProduct category={"oralCare"} heading={"Oral hygiene products"}/>
      <VerticalCardProduct category={"hairs"} heading={"Hair and scalp products"}/>
      {/* <VerticalCardProduct category={"foot"} heading={"Foot Care products"}/>
      <VerticalCardProduct category={"shaving"} heading={"Shaving Products"}/>
      <VerticalCardProduct category={"babies"} heading={"Baby Products"}/>
      <VerticalCardProduct category={"bath"} heading={"Bathing Products"}/>
      <VerticalCardProduct category={"tinted"} heading={"Tinted Products"}/> */}
    </div>
  )
}

export default Home