import React from "react"
import SEO from "../../components/seo"
import { keyframes } from "@emotion/core"
import Button from "../../components/button"
import Footer from "../../components/footer"
import Layout from "../../components/layout"
import { vP } from "../../components/gutters"
import Container from "../../components/container"
import presets, { colors } from "../../utils/presets"
import pic1 from "../../images/quick-start/siteview01.jpg"
import pic2 from "../../images/quick-start/siteview02.jpg"
import { itemListDocs } from "../../utils/sidebar/item-list"
import typography, { rhythm, options, scale } from "../../utils/typography"
import Card from "../../components/card";


const DocsPage = () => (
    <Layout location={window.location} itemList={itemListDocs}>
        <SEO title="文档中心" />
        <div css={styles.backgroundWave}>
            <section css={styles.section}>
            </section>
        </div>
        <div css={{ ...styles.contentHeader, ...styles.sticky }}>
            <h2 css={styles.contentTitle}>
                <span>
                    SITEVIEW ITOSS IT运营支撑系统
                </span>
            </h2>
            <div css={{ marginLeft: `auto` }}>
                <label css={{ position: `relative` }}>
                    <Button small to="/404/" overrideCSS={{marginTop: `0rem`, marginLeft: `0rem`, marginRight: `1rem`}} style={{textDecoration: 'none',}}>
                        询价
                    </Button>
                    <Button small to="/404/" overrideCSS={{marginTop: `0rem`, marginLeft: `0rem`}} style={{textDecoration: 'none',}}>
                        免费下载
                    </Button>
                </label>
            </div>
        </div>
        <div css={styles.contact}>
            <h3 css={styles.summaryTitle}>一体化平台、简化IT管理、实现轻松运维</h3>
            <Container>
                <p css={styles.article}>SITEVIEW ITOSS一体化IT运营支撑系统以其高质量强大监测功能、友好操作、容易应用备受广大用户的认可和青睐。</p>
                <img src={pic1} alt="" />
                <ul css={styles.article}>如何确保业务系统的稳定与高可用，围绕IT故障的解决方案是一大重点，</ul>
                <ul css={styles.article}>预防问题远比解决问题重要；</ul>
                <ul css={styles.article}>解决问题的套路远比解决重要；</ul>
                <ul css={styles.article}>知道问题点的根源远比套路直接；</ul>
                <p css={styles.article}>而最理想的就是能从运行的状态趋势中研判问题可能的发生的情况与持续向好的状态，或者降低问题发生临界点。</p>
                <p css={styles.article}>不可否认，这才是未来智能要推动IT管理技术革新的目标所在，这也是我用SITEVIEW ITOSS运营智能优势与凸显的特点，对于正在寻找IT管理解决方案的企业用户来说绝对是一个最佳的选择。</p>
                <img src={pic2} alt="" />
            </Container>
        </div>
        <div css={styles.contact}>
            <h3 css={styles.summaryTitle}>服务与支持</h3>
            <div css={styles.cards}>
                <Card>
                    <ul>免费咨询:</ul>
                    <ul>010－5165 5987</ul>
                    <ul>135 2083 0552 彭先生</ul>
                </Card>
                <Card>
                    <ul>服务时间:</ul>
                    <ul>星期一至星期五</ul>
                    <ul>9:00AM - 6:00PM</ul>
                </Card>
            </div>
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
    article: {
        ...scale(1/10),
        fontFamily: typography.options.headerFontFamily.join(`,`),
    },
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
    footer: {
        background: `dimGray`,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        paddingTop: 0,
        paddingBottom: 0,
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
            marginTop: 250,
        }, 
    },
    sticky: {
      position: `sticky`,
      top: `calc(${presets.bannerHeight} - 1px)`,
      [presets.Desktop]: {
        top: `calc(${presets.headerHeight} + ${presets.bannerHeight} - 1px)`,
      },
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
}
export default DocsPage