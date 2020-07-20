import React from 'react'
import Gallery from "react-photo-gallery";
import { campaignphotosvirus } from './campaignphotos'


//const Modalpics101 = () => (
class CampaignGallery2 extends React.Component {
    render() {
        return (
            <>
<div style={{marginTop: '1rem'}} className="rpgallery">
    <Gallery photos={campaignphotosvirus} /*onClick={openLightbox}*/ style={{ display: 'flex'}}/>
    </div>
</>
)
        }
    }

export default CampaignGallery2