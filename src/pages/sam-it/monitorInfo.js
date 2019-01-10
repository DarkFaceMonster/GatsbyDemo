import React from "react"
import SEO from "../../components/seo"
import { keyframes } from "@emotion/core"
import Button from "../../components/button"
import Footer from "../../components/footer"
import Layout from "../../components/layout"
import { vP } from "../../components/gutters"
import typography from "../../utils/typography"
import presets, { colors } from "../../utils/presets"
import { itemListInfo } from "../../utils/sidebar/item-list"
import { rhythm, options, scale } from "../../utils/typography"
import Info01 from "../../images/sam-it/info/sam2017021501.jpg"
import Info02 from "../../images/sam-it/info/sam2017021502.jpg"
import Info03 from "../../images/sam-it/info/sam2017021503.jpg"
import Info04 from "../../images/sam-it/info/sam2017021504.jpg"
import Info05 from "../../images/sam-it/info/sam2017021505.jpg"
import Tab1 from "../../images/sam-it/info/Tab1.png"
import Tab2 from "../../images/sam-it/info/Tab2.png"
import OpeTable from "../../components/sam-it/table";

const InfoPage = () => (
    <Layout location={window.location} itemList={itemListInfo}>
        <SEO title="监测器" />
        <div css={styles.backgroundWave}>
            <section css={styles.section}>
                <div css={styles.title}>
                    <h1 css={{color: colors.skyDark}}>共享1000+监测器高质量监测</h1>
                    <Button secondary to="/404/" overrideCSS={{marginTop: `1rem`, marginLeft: `0rem`}} style={{textDecoration: 'none',}}>
                        免费下载试用
                    </Button>
                </div>
            </section>
        </div>
        <div css={{ ...styles.contentHeader, ...styles.sticky }}>
            <h3 css={styles.contentTitle}>
                <span>
                    监测器的介绍与应用，以及详细监测参数、状态、返回值、事件、日志、错误等的描述，并可定制特殊应用监测与监测需求的开发。
                </span>
            </h3>
            <div css={{ marginLeft: `auto` }}>
                <label css={{ position: `relative` }}>
                    <Button small to="/404/" overrideCSS={{marginTop: `0rem`, marginLeft: `0rem`}} style={{textDecoration: 'none',}}>
                        试用全功能30天
                    </Button>
                </label>
            </div>
        </div>
        <div css={styles.contact} id="introduction">
            <h2 css={styles.summaryTitle}>监测器介绍</h2>
            <div css={styles.summary}>
                <img src={Info01} alt="" css={styles.picture} />
                <div css={styles.description}>
                    <p>ITOSS的监测器就像眼睛一样，7x24小时实时监测系统的故障和性能指标，任何风吹草动就按照设定的策略发出报警。用户通过手机（微信公共账户）就可以轻松掌握全局的运行状态，保障系统的稳定、高效运行。</p>
                    <p>ITOSS的监测模块基于OSGi架构，每个监测器是独立的OSGi组件，监测器的配置和执行都包含在一个OSGi组件里面，每个组件可以独立开发、部署和升级。灵活的架构支持监测器的高扩展性。</p>
                    <p css={{color: `#1890FF`}}>除了提供十分完善的、标准的覆盖全部IT组件的监测器，我们还提供面向业务的个性化的监测器定制开发，实现从业务、到应用、服务器和网络设备的端到端的全方位监测。</p>
                </div>
            </div>
        </div>
        <div css={styles.contact} id="uiIntroduction">
            <h2 css={styles.summaryTitle}>监测器界面介绍</h2>
            <div css={styles.summary}>
                <div css={styles.description}>
                    <p><b>A区域：</b>切换ITOSS中功能模块，包含：SAM、NNM、ALM、ITSM模块；</p>
                    <p><b>B区域：</b>功能导航栏，可以代理配置、视图、报警、报表、设置、仪表板中心等界面调用；</p>
                    <p><b>C区域：</b>统一监控平台监测树，可以创建不用的组和子组，组中添加对应的资源类型；</p>
                    <p><b>D区域：</b>平台快捷键，包含：查询、根据监测器列表定位资源、刷新树、全部折叠；</p>
                    <p><b>E区域：</b>监测树下组、子组的状态，组中服务器、网络设备、数据库、存储、虚拟机等资源状态和个数统计，统计组中资源个数状态，组中正常、危险、错误、禁止监测的个数，组的最后刷新时间等；</p>
                    <p><b>F区域：</b>监测树下组中资源状态、资源IP、名称、类型、监测总数、正常、危险、错误、禁止监测个数和最后刷新时间的统计展现；</p>
                    <p><b>G区域：</b>监测树视图的切换，包含列表视图、图标视图、树桩视图 3种；</p>
                    <p><b>H区域：</b>资源、监测数量统计，监测正常、危险、错误、禁止监测器数统计展现；</p>
                    <p><b>I区域：</b>用于注销账户操作。</p>
                </div>
                <img src={Info02} alt="" css={styles.picture} />
            </div>
        </div>
        <div css={styles.contact} id="net">
            <h2 css={styles.summaryTitle}>支持各种网络设备</h2>
            <div css={styles.summary}>
                <img src={Info03} alt="" css={styles.picture} />
                <div css={styles.description}>
                    <p>SITEVIEW ITOSS集成了1000+标准监测器，支持不同厂商、不同型号的网络设备（防火墙、路由器、交换机等等），每个监测器如同眼睛一般7*24不间断监测网络与IT资源设备，帮助IT运维管理人员对整个IT系统进行全面深度的监测管理。</p>
                </div>
            </div>
            <div css={styles.description}>
                <h3><b>监测网络、网络设备常用监测器——监测用户网络及其所有网络设备的运行状况</b></h3>
                <img src={Tab1} alt="" css={{marginLeft: `5rem`}} />
                <ul>SITEVIEW监测器文档：</ul>
                <Button small secondary overrideCSS={{marginLeft: `5rem`}} style={{textDecoration: 'none',}} to="/404/">本地下载</Button>
                <Button small secondary overrideCSS={{marginLeft: `5rem`}} style={{textDecoration: 'none',}} to="/404/">云下载</Button>
            </div>
        </div>
        <div css={styles.contact} id="server">
            <h2 css={styles.summaryTitle}>支持各种服务器</h2>
            <div css={styles.summary}>
                <div css={styles.description}>
                    <p>SITEVIEW ITOSS集成了1000+标准监测器，支持Windows、Unix、Solaris、AIX、FreeBSD、Unixware、HP-UX、OpenServer等所有主流操作系统，每个监测器如同眼睛一般7*24不间断监测网络与IT资源设备，帮助IT运维管理人员对整个IT系统进行全面深度的监测管理。</p>
                </div>
                <img src={Info04} alt="" css={styles.picture} />
            </div>
            <div css={styles.description}>
                <h3><b>监测服务器常用监测器——监测用户各种IT系统下服务器的运行状况</b></h3>
                <img src={Tab2} alt="" css={{marginLeft: `5rem`}} />
                <ul>SITEVIEW监测器文档：</ul>
                <Button small secondary overrideCSS={{marginLeft: `5rem`}} style={{textDecoration: 'none',}} to="/404/">本地下载</Button>
                <Button small secondary overrideCSS={{marginLeft: `5rem`}} style={{textDecoration: 'none',}} to="/404/">云下载</Button>
            </div>
        </div>
        <div css={styles.contact} id="operation">
            <h2 css={styles.summaryTitle}>支持各种业务系统</h2>
            <div css={styles.summary}>
                <img src={Info05} alt="" css={styles.picture} />
                <div css={styles.description}>
                    <p>针对现代企业在信息化、移动互联、互联网+、云、大数据、数字化、以及未来智能化等关键业务应用服务方面的需求，游龙科技前瞻性创新技术，为用户开发了大量专业的企业业务应用服务方面的监测器，并支持源代码级的监测器二次开发、定制开发，以及用户业务整合监测上的需求开发，真正实现用户服务为根、技术精尖为本的IT监测管理一体化平台。</p>
                </div>
            </div>
            <div css={styles.description}>
                <h3><b>企业应用与业务系统常用监测器——监测各种系统下服务器的运行状况</b></h3>
                <OpeTable />
                <ul>SITEVIEW监测器文档：</ul>
                <Button small secondary overrideCSS={{marginLeft: `5rem`}} style={{textDecoration: 'none',}} to="/404/">本地下载</Button>
                <Button small secondary overrideCSS={{marginLeft: `5rem`}} style={{textDecoration: 'none',}} to="/404/">云下载</Button>
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
    backgroundWave: {
        ...box,
        ...stripeBg,
        paddingTop: 0,
        paddingBottom: 0,
        fontFamily: typography.options.headerFontFamily.join(`,`),
    },
    button: {
        alignSelf: `flex-end`,
        display: `flex`,
        marginBottom: `1rem`,
        marginLeft: `auto`,
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
        ...scale(1/3),
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

export default InfoPage