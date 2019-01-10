import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import typography from "../../utils/typography"
import { itemListAbout } from "../../utils/sidebar/item-list"
import { rhythm } from "../../utils/typography"
import { vP } from "../../components/gutters"
import presets, { colors } from "../../utils/presets"

const AboutPage = () => (
    <Layout location={window.location} itemList={itemListAbout}>
        <SEO title="About" />
        <div css={styles.contact} id="mainFunction">
            <h2 css={styles.summaryTitle}>公司能力</h2>
            <div css={styles.cards}>
                十七年来，基于稳定最强研发团队，持续投入创新，采用最优秀的软件架构，出品简约大方的风格界面。
            </div>
        </div>
        <div css={styles.contact} id="monitor">
            <h2 css={styles.summaryTitle}>技术优势</h2>
            <div css={styles.cards}>
                在技术上构建宏观一体化平台，动态插件模式，微观高可配置性的系统。产品基于ITIL框架与标准，以全面深度监测IT基础架构为核心，深化拓展运维、流程、资产管理，创新海量日志实时分析平台；以IT管理原生态为基础，面向业务、为用户延伸云计算、云监测、微信App监测、手机App智能运维、大数据的服务平台和IT运维管理可视化、人工智能深度学习以及商业智能、一体化平台的IT运营支撑系统解决方案。
            </div>
        </div>
        <div css={styles.contact} id="screenShot">
            <h2 css={styles.summaryTitle}>发展方向</h2>
            <div css={styles.cards}>
                坚持全面深度监测，并持续创新，引领行业航向；深度日志分析、海量运维，展开广度、深度上的技术延伸和优化方案；大数据云、机器学习、人工智能、万物互联等多重技术与前沿黑科技实现IT运营智能和商业智能。
            </div>
        </div>
        <div css={styles.contact} id="screenShot">
            <h2 css={styles.summaryTitle}>服务能力</h2>
            <div css={styles.cards}>
                拥有全国20多家销售技术支撑中心，数百家合作伙伴，400呼叫中心，在线客服与技术支持，快速积极响应用户，主动巡检回访服务，并对友商渠道、市场、培训、售后等一系列品牌、技术、案例经验上的服务对接与精细化支持。
            </div>
        </div>
        <div css={styles.footer}>
            <Footer />
        </div>
    </Layout>
)

const styles = {
    cards: {
        background: `#F5F5F5`,
        borderRadius: presets.radiusLg,
        display: `flex`,
        flexWrap: `wrap`,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        width: `100%`,
    },
    contact: {
        flex: `0 0 100%`,
        maxWidth: `100%`,
        padding: rhythm(presets.gutters.default / 2),
        [presets.Hd]: { padding: vP, paddingTop: 50, paddingBottom: 50 },
    },
    footer: {
        background: `dimGray`,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        paddingBottom: 0,
        paddingTop: 0,
    },
    licence: {
        color: `aliceBlue`,
        fontFamily: typography.options.headerFontFamily.join(`,`),
        fontSize: `0.5rem`,
        marginLeft: `auto`,
        textAlign: `right`,
    },
    summaryTitle: {
        alignItems: `center`,
        borderBottom: `1px solid ${colors.ui.border}`,
        display: `flex`,
        flexDirection: `row`,
        height: presets.headerHeight,
        margin: `0 0 50px 0`,
        padding: 0,
        paddingLeft: `${rhythm(3 / 4)}`,
        paddingRight: `${rhythm(3 / 4)}`,
        zIndex: 1,
    },
}

export default AboutPage