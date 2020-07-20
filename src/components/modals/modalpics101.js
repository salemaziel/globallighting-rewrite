import React from 'react'
import Gallery from "react-photo-gallery";
import { photos1 } from './pics1'

//const Modalpics101 = () => (
class Modalpics101 extends React.Component {
    render() {
        return (
<div>
    <Gallery photos={photos1} /*onClick={openLightbox}*/ style={{ display: 'flex'}} />
    </div>
)
        }
    }

export default Modalpics101