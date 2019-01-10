import React from "react"
import Card from "../components/card"
import { scale, options } from "../utils/typography"
import Button from "../components/button"
import presets from "../utils/presets"

const Cards = () => (
    <>
    <Card>
        <h2 css={styles.cardHeadLine}>
            众多产品无缝对接
        </h2>
        <p css={styles.futuraParagraph}>
        <b>SITEVIEW ITOSS IT运营支撑系统</b>： 确保运营网络、关键IT系统与、核心业务应用99.99%高稳定
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/itoss/home.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            基础设施监控平台
        </h2>
        <p css={styles.futuraParagraph}>
        <b>SITEVIEW IMP 基础设施监控平台</b>： 企业级7*24小时自动监控及时预警
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            "会“聊天”的IT运维平台"
        </h2>
        <p css={styles.futuraParagraph}>
           <b>DeepChat 聊天社交智能运维</b>： 深度集成三人即时通，实现IT监测故障报警发送到指定的频道沟通群聊、协同处理、工单运维解决问题
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/itoss/home/sam-it/sam-jc3ren.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            全面、深度监测管理服务器与应用
        </h2>
        <p css={styles.futuraParagraph}>
           <b>SAM 服务器与应用管理</b>： 类似Windows文件夹操作的IT资源树形目录、友好易用、简化IT管理
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/sam-it/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            自拓扑网络图、网络流量监控分析
        </h2>
        <p css={styles.futuraParagraph}>
           <b>NNM 网管设备管理</b>： 简化网络管理中冗繁关系、精确定位设备复杂问题、保障其持续健康运行
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/nnm/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            工单流程、知识库等IT服务管理
        </h2>
        <p css={styles.futuraParagraph}>
           <b>ITSM IT 服务管理</b>： 面向业务流程化管控IT服务管理、整体全面提高效率、提升终端用户满意度与业务服务价值
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/itoss/home/itsm.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            万亿级字节海量日志监控分析处理
        </h2>
        <p css={styles.futuraParagraph}>
           <b>DeepLOG 深度日志分析</b>： 机器学习人工智能分析处理大数据海量日志、实时定位关键业务的故障、滚动展示日志中的错误信息
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/itoss/home/deeplog.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            基于HTML5网页远程桌面
        </h2>
        <p css={styles.futuraParagraph}>
           <b>RemoteDesktop 远程桌面</b>： 可安全远程（远程桌面、SSH、telnet、VNC连接等）到Windows平台、Linux平台、网络设备
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/itoss/home/sam-it/sam-yczm.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            动态数据展示、高视觉冲击力
        </h2>
        <p css={styles.futuraParagraph}>
           <b>ScreenDisplay 多终端与大屏展示</b>： 实时展示监测关键绩效指标、洞察核心系统与业务运营状态、满足用户服务体验
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/itoss/home/Screendisplay.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            IT运维平台Cloud云端应用方案
        </h2>
        <p css={styles.futuraParagraph}>
           <b>Cloud 远程管理云平台</b>： 1个账号独享1000+监测器服务、关联微信App运维管理更便捷
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/itoss/home/cloud.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            分中心平滑递增、无限扩容级联
        </h2>
        <p css={styles.futuraParagraph}>
           <b>分布式部署</b>： 支持对企业分布网络、系统、业务应用、物联网等进行分布式安装部署、监测、运维管理和负载均衡
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/siteview/home/Technicalhighlights/siteview-fbsbs.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    <Card>
        <h2 css={styles.cardHeadLine}>
            网络设备配置文件运维周期监管
        </h2>
        <p css={styles.futuraParagraph}>
           <b>设备配置文件管理</b>： 全面的网络设备配置文件实时监测、异常报警、全自动集中备份、版本对比和恢复等可运维的安全管理
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="http://www.siteview.com/sites/itoss/home/sam-it/sam-sbpzwjgl.html" tag="href" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                详情
            </Button>
        </div>
    </Card>
    </>
)


const styles = {
    cardHeadLine: {
        ...scale(2 / 5),
        lineHeight: 1.2,
        marginTop: 0,
        [presets.Tablet]: {
            fontSize: scale(1 / 10).fontSize,
        },
        [presets.Desktop]: {
            fontSize: scale(3 / 10).fontSize,
        },
        [presets.VHd]: {
            fontSize: scale(5 / 10).fontSize,
        },
        [presets.VVHd]: {
            fontSize: scale(7 / 10).fontSize,
        },
    },
    futuraParagraph: {
        fontFamily: options.headerFontFamily.join(`,`),
        marginBottom: 0,
    },
}

export default Cards