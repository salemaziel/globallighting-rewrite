import React from 'react'
import Gallery from "react-photo-gallery";
import { photos2 } from './pics2'

//const Modalpics101 = () => (
class Modalpics102 extends React.Component {
    render() {
        return (
<div>
    <Gallery photos={photos2} /*onClick={openLightbox}*/ style={{ display: 'flex'}} />
    </div>
)
        }
    }

export default Modalpics102