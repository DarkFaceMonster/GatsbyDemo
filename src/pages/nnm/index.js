import React from "react"
import SEO from "../../components/seo"
import FAQ from "../../components/FAQ"
import { keyframes } from "@emotion/core"
import NNM04 from "../../images/nnm/NNM04.png"
import Button from "../../components/button"
import Demand from "../../components/demand"
import Footer from "../../components/footer"
import Layout from "../../components/layout"
import { vP } from "../../components/gutters"
import presets, { colors } from "../../utils/presets"
import ScreenShot from "../../components/nnm/screenShot"
import { itemListNNM } from "../../utils/sidebar/item-list"
import MainFunction from "../../components/nnm/mainFuction"
import typography, { rhythm, options, scale } from "../../utils/typography"

const NNMpage = () => (
    <Layout location={window.location} itemList={itemListNNM}>
        <SEO title="NNM 网络设备管理" />
        <div css={styles.backgroundWave}>
            <section css={styles.section}>
                <div css={styles.title}>
                    <h2 css={{color: colors.skyDark}}>网管设备管理　SITEVIEW NNM</h2>
                    <h1 css={{color: colors.skyDark}}>自拓扑网络图、网络设备监控与网络流量分析</h1>
                    <Button secondary to="/404/" overrideCSS={{marginTop: `1rem`, marginLeft: `0rem`}} style={{textDecoration: 'none',}}>
                        免费下载试用
                    </Button>
                </div>
            </section>
        </div>
        <div css={{ ...styles.contentHeader, ...styles.sticky }}>
            <h2 css={styles.contentTitle}>
                <span>
                    SITEVIEW NNM 网络设备管理
                </span>
            </h2>
            <div css={{ marginLeft: `auto` }}>
                <label css={{ position: `relative` }}>
                    <Button small to="/404/" overrideCSS={{marginTop: `0rem`, marginLeft: `0rem`}} style={{textDecoration: 'none',}}>
                        免费下载试用
                    </Button>
                </label>
            </div>
        </div>
        <div css={styles.contact} id="summary">
            <h2 css={styles.summaryTitle}>概述</h2>
            <div css={styles.summary}>
                <img src={NNM04} alt="" css={styles.picture} />
                <div css={styles.description}>
                    <h4><b> NNM（网络设备管理）</b></h4>
                    <p><b>功能</b>: 自拓扑网络图、网络流量分析、网络设备运行状况分析。</p>
                    <p><b>优势</b>：可视化、虚拟现实网络与设备的监控管理。</p>
                    <p><b>效益</b>：简化网络管理中冗繁关系，精确定位设备复杂问题，保障其持续健康运行。</p>
                </div>
            </div>
        </div>
        <div css={styles.contact} id="mainFunction">
            <h2 css={styles.summaryTitle}>主要功能</h2>
            <div css={styles.cards}>
                <MainFunction />
            </div>
        </div>
        <div css={styles.contact} id="screenShot">
            <h2 css={styles.summaryTitle}>系统截图</h2>
            <ScreenShot />
        </div>
        <div css={styles.contact} id="demand">
            <h2 css={styles.summaryTitle}>安装与应用需求</h2>
            <div css={styles.cards}>
                <Demand />
            </div>
        </div>
        <div css={styles.contact} id="FAQ">
            <h2 css={styles.summaryTitle}>帮助中心</h2>
            <FAQ />
        </div>
        <div css={styles.footer}>
            <Footer />
        </div>
    </Layout>
)

const stripeColor = `255, 255, 255, 0.9`
const stripeSize = 15


const box = {
    background: colors.ui.whisper,
    border: `1px solid ${colors.ui.light}`,
    borderRadius: presets.radiusLg,
    padding: `${rhythm(1)} ${rhythm(1)} 0`,
}

const stripeAnimation = keyframes({
    "0%": { backgroundPosition: `${rhythm(stripeSize)} ${rhythm(stripeSize * 2)}`},
    "100%": { backgroundPosition: `0 0` },
})

const stripeBg = {
    animation: `${stripeAnimation} 10s linear infinite`,
    backgroundColor: 'aliceBlue',
    backgroundSize: `${rhythm(stripeSize)} ${rhythm(stripeSize)}`,
    backgroundImage: `linear-gradient(45deg, rgba(${stripeColor}) 25%, transparent 25%, transparent 50%, rgba(${stripeColor}) 50%, rgba(${stripeColor}) 75%, transparent 75%, transparent)`,
}

const styles = {
    backgroundWave: {
        ...box,
        ...stripeBg,
        paddingTop: 0,
        paddingBottom: 0,
        fontFamily: typography.options.headerFontFamily.join(`,`),
    },
    cards: {
        background: `#F5F5F5`,
        borderRadius: presets.radiusLg,
        display: `flex`,
        flexWrap: `wrap`,
        width: `100%`,
    },
    contact: {
        flex: `0 0 100%`,
        maxWidth: `100%`,
        padding: rhythm(presets.gutters.default / 2),
        [presets.Hd]: { padding: vP, paddingTop: 50, paddingBottom: 50 },
    },
    contentHeader: {
        alignItems: `center`,
        background: `rgba(255,255,255,0.98)`,
        borderBottom: `1px solid ${colors.ui.light}`,
        display: `flex`,
        flexDirection: `row`,
        height: presets.headerHeight,
        paddingLeft: `${rhythm(3 / 4)}`,
        paddingRight: `${rhythm(3 / 4)}`,
        zIndex: 1,
    },
    contentTitle: {
        ...scale(1),
        color: colors.skyDark,
        lineHeight: 1,
        margin: 0,
    },
    description: {
        flex: 1,
        fontFamily: typography.options.headerFontFamily.join(`,`),        
        marginLeft: `18px`,
        padding: `30px`,
    },
    footer: {
        background: `dimGray`,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        paddingTop: 0,
        paddingBottom: 0,
    },
    futuraParagraph: {
        fontFamily: options.headerFontFamily.join(`,`),
        marginBottom: 0,
    },
    licence: {
        color: colors.skyDark,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        fontSize: `0.5rem`,
        marginLeft: `auto`,
        textAlign: `right`,
    },
    main:{
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
    },
    picture: {
        flex: `0 0 96px`,
        height: `306.6px`,
        marginLeft: `0`,
        width: `474.6px`,
    },
    section: {
        borderRadius: presets.radiusLg,
        borderBottom: `1px solid ${'colors.ui.light'}`,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        flex: `1 1 100%`,
        fontFamily: options.headerFontFamily.join(`,`),
        marginTop: rhythm(1),
        padding: vP,
        textAlign: `left`,
        [presets.Tablet]: {
            marginTop: 50,
        }, 
    },
    sticky: {
      position: `sticky`,
      top: `calc(${presets.bannerHeight} - 1px)`,
      [presets.Desktop]: {
        top: `calc(${presets.headerHeight} + ${presets.bannerHeight} - 1px)`,
      },
    },
    summary: {
        align: `left`,
        display: `flex`,
        margin: `120px 300px 0 0`,
    },
    summaryTitle: {
        margin: `0 0 50px 0`,
        padding: 0,
        alignItems: `center`,
        borderBottom: `1px solid ${colors.ui.border}`,
        display: `flex`,
        flexDirection: `row`,
        height: presets.headerHeight,
        paddingLeft: `${rhythm(3 / 4)}`,
        paddingRight: `${rhythm(3 / 4)}`,
        zIndex: 1,
    },
    title: {
        margin: `0 auto ${rhythm(2)}`,
        maxWidth: rhythm(50),
    },
}

export default NNMpage