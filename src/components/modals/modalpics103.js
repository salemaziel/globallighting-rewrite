import React from 'react'
import Gallery from "react-photo-gallery";
import { photos3, indwand, stdwand } from './pics3'
import IndWand from '../industrialwand';
import StdWand from '../standardwand'

//const Modalpics101 = () => (
class Modalpics103 extends React.Component {
    render() {
        return (
            <>
<div>
    <Gallery photos={photos3} /*onClick={openLightbox}*/ style={{ display: 'flex'}} />
    </div>
    <div>
        <Gallery photos={indwand} /*onClick={openLightbox}*/ style={{ display: 'flex'}} />
    </div>
    <div>
        <IndWand />
    </div>
    <div>
        <Gallery photos={stdwand} /*onClick={openLightbox}*/ style={{ display: 'flex'}} />
    </div>
    <div>
    <StdWand />
</div>

</>
)
        }
    }

export default Modalpics103