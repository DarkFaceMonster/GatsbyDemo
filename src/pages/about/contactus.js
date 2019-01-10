import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import typography, { rhythm } from "../../utils/typography"
import { itemListAbout } from "../../utils/sidebar/item-list"
import map from "../../images/about/scontact-map.jpg"
import logo from "../../images/logo/gatsby-icon.svg"
import presets, { colors } from "../../utils/presets"
import { vP, vPHd, vPVHd } from "../../components/gutters"

const WantPage = () => (
    <Layout location={window.location} itemList={itemListAbout}>
        <SEO title="About" />
        <img src={map} css={{marginLeft:'300px'}} alt="" />
        <div css={styles.cards}>
            <div css={styles.position} style={{marginLeft: `500px`}}>
                <div css={styles.center}>
                    <img src={logo} css={styles.logo} alt="" />
                </div>
            </div>
            <div css={styles.position}>
                <div css={styles.center}>
                    <div style={styles.info}>010－5165 5987</div>
                    <div style={styles.info}>135 2083 0552（彭先生 , 微信同号）</div>
                    <div style={styles.info}>contact@dragonflow.com </div>
                    <div style={styles.info}>北京市海淀区苏州街16号神州数码大厦5层</div>
                </div>
            </div>
        </div>
        <div css={styles.footer}>
            <Footer />
        </div>
    </Layout>
)

const styles = {
    cards: {
        borderRadius: presets.radiusLg,
        display: `flex`,
        flexWrap: `wrap`,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        paddingBottom: '3px',
        width: `100%`,
    },
    footer: {
        background: `dimGray`,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        paddingBottom: 0,
        paddingTop: 0,
    },
    logo: {
        height: 28,
        [presets.Tablet]: {
            height: `2.33rem`,
        },
    },
    info: {
        fontFamily: typography.options.headerFontFamily.join(`,`),
        padding: '0px 0rem',
    },
    center: {
        padding: rhythm(presets.gutters.default / 2),
        paddingBottom: 0,
        transform: `translateZ(0)`,
        [presets.Mobile]: {
        padding: vP,
        paddingBottom: 0,
        },
        [presets.Phablet]: {
        padding: vP,
        },
        [presets.VHd]: {
        padding: vPHd,
        },
        [presets.VVHd]: {
        padding: vPVHd,
        },
    },
    position: {
        boxSizing: `border-box`,
        display: `flex`,
        transform: `translateZ(0)`,
        [presets.Tablet]: {
            flex: `0 0 auto`,
            maxWidth: `50%`,
            boxShadow: `0 1px 0 0 ${colors.ui.light}`,
            "&:nth-child(5),&:nth-child(6)": {
            boxShadow: `none`,
            },
            "&:nth-child(2n)": {
            borderLeft: `1px solid ${colors.ui.light}`,
            },
        },
        [presets.Hd]: {
            flex: `0 0 auto`,
            maxWidth: `50%`,
            borderLeft: `1px solid ${colors.ui.light}`,
            "&:nth-child(4)": {
            boxShadow: `none`,
            },
            "&:nth-child(3n+1)": {
            borderLeft: 0,
            },
        },
    },
}

export default WantPage