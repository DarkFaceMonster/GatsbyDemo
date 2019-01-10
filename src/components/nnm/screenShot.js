import React from "react"
import { Carousel } from 'antd'
import sys1 from "../../images/nnm/nnmsystem2017031002.jpg"
import sys2 from "../../images/nnm/nnmsystem2017031003.jpg"
import sys3 from "../../images/nnm/nnmsystem2017031004.jpg"
import sys4 from "../../images/nnm/nnmsystem2017031005.jpg"

const ScreenShot = () => (
    <Carousel css={styles.slick} autoplay>
        <div><img src={sys1} alt="" /></div>
        <div><img src={sys2} alt="" /></div>
        <div><img src={sys3} alt="" /></div>
        <div><img src={sys4} alt="" /></div>
    </Carousel>
)

const styles = {
    slick: {
        background: `dimGray`,
        overflow: `hidden`,
    },
}

export default ScreenShot