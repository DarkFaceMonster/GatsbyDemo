import React from "react"
import SEO from "../../components/seo"
import Card from "../../components/card"
import { keyframes } from "@emotion/core"
import Button from "../../components/button"
import Footer from "../../components/footer"
import Layout from "../../components/layout"
import { vP } from "../../components/gutters"
import Container from "../../components/container"
import presets, { colors } from "../../utils/presets"
import pic1 from "../../images/quick-start/siteview01.jpg"
import pic2 from "../../images/quick-start/siteview02.jpg"
import pic3 from "../../images/quick-start/siteview03.gif"
import { itemListStarter } from "../../utils/sidebar/item-list"
import typography, { rhythm, options, scale } from "../../utils/typography"


const Starter = () => (
    <Layout location={window.location} itemList={itemListStarter}>
        <SEO title="快速上手" />
        <div css={styles.backgroundWave}>
            <section css={styles.section}>
            </section>
        </div>
        <div css={{ ...styles.contentHeader, ...styles.sticky }}>
            <h2 css={styles.contentTitle}>
                <span>
                    快速上手
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
            <h3 css={styles.summaryTitle}>一体化平台，简化IT管理，实现轻松运维，保障企业运营最大化效益</h3>
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
            <h3 css={styles.summaryTitle}>整体安装、部署和配置流程概要说明（总耗时 5-15分钟）</h3>
            <Container>
                <img src={pic3} alt="" />
                <p css={styles.article}>如何让企业的IT服务有序地运行，并且能高效、高质、让用户满意，建立IT运营的闭环服务圈，是对企业IT服务的入口、过程、关键点进行监测、可控、追溯、跟进、自操作的新IT管理商业模式。SITEVIEW ITOSS一体化就是这种重构IT管理商业模式大价值、高能效的驱动型系统。</p>
                <p css={styles.article}>IT连接一切，企业的业务、人力、事务处理、财源、用户等等，是一种大连接，大生态，如何保障它们的正常运营，驱动它们向前发展，就需要SITEVIEW ITOSS的大一体化、大经验数据  、预警主动网络管理、自动智能的IT管理来驱动，以使这种IT管理商业模式在社会生态圈中持续、稳定地前进。</p>
                <p css={styles.article}>ITOSS提供全中文Web界面，简单易用。本教程的每一步提供了简单明了的截屏和短视频教程，每一步耗时15秒到3分钟。如果遇到问题，请找我们在线客服！</p>
                <ol css={styles.article}>
                    <li><strong>下载和安装 (耗时1分钟)</strong></li>
                    <ul>
                        <li>
                            <p css={{color: `red`, float: `left`}}>下载安装包</p>(大约 1.85MB）
                        </li>
                        <li>
                            解压、启动安装包，自动下载和部署全部应用、数据库和Web服务器 （Step 0）
                        </li>
                        <li>
                            打开浏览器登录 http://localhost:8080（Step 1，2）
                        </li>
                    </ul>
                    <li><strong>配置自动发现、监测、报警和报表</strong></li>
                    <ul>
                        <li>
                            资源扫描自动发现，实现对全部IT资源的自动发现、添加和部分设置 （Step 3）
                        </li>
                        <li>
                            完善和补充组、设备和监测器 （Step 4，5，6，7）
                        </li>
                        <li>
                            添加报警条件、报表和Visio视图 （Step 8，9，10）
                        </li>
                    </ul>
                </ol>
                <p css={{color: `red`}}>
                    SITEVIEW ITOSS（本地、云平台、手机演示平台）系列产品基于Web的演示、操作、使用、管理的特性，
                    需要用户的浏览器支持（IE9+，chrome29+，firefox23+，safari6+，opera15+）版本等，
                    ITOSS所见即所得的可视化界面才能完美释放。
                </p>
                <p css={styles.article}><strong>功能强大的系统，轻松搞定！</strong></p>
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
export default Starter