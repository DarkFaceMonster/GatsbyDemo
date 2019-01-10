import React from "react"
import Card from "../../components/card"
import Button from "../../components/button"
import { scale, options } from "../../utils/typography"

const MainFunction = () => (
    <>
    <Card>
        <h4 css={styles.cardHeadLine}>
            主动管理和关键功能
        </h4>
        <p css={styles.futuraParagraph}>
            NNM是精确、快速的SNMP网络设备管理软件，通过拓扑自动发现、IP -MAC绑定、面板图操作等功能，可以帮助企业用户实现网络设备的主动管理，从而降低企业用户管理网络的繁杂程度，迈出高效管理的关键性一步。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            实时监测和网络管理
        </h4>
        <p css={styles.futuraParagraph}>
            NNM 能全面监测和管理网络的端口状态、网络流量、网络链路、和网络设备、服务器等关键节点，具有全面性和实时性等特点。保障网络7X24小时持续稳定的运行。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            故障报警与故障管理
        </h4>
        <p css={styles.futuraParagraph}>
            NNM可帮助管理员有效地预防或发现故障，警报将通过声音、短信、显示报警框、发送Mail、以及微信告警等方式及时发送相关人员，或自动运行相应的程序进行故障处理；提供全方位的告警监测和统计分析。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            流量分析功能
        </h4>
        <p css={styles.futuraParagraph}>
            NNM 它可对网络流量、业务流量和网络设备流量进行细致、深入的分析，具有强大的报表自定义功能，能够提供健全的报表定制和网络分析服务，完全满足用户对网络流量精确管理的需求。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            诊断工具
        </h4>
        <p css={styles.futuraParagraph}>
            NNM提供多种诊断工具，登录软件系统，点击"网络设备管理"模块下"诊断工具"按钮，包含了Ping，SSH，Telnet，TraceRoute，SNMP诊断工具，保持一些系统常网络命令工具的使用，并进行了集成，使之发挥多种用途的作用与直接有效的分析方法。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    </>
)


const styles = {
    cardHeadLine: {
        ...scale(1 / 5),
        lineHeight: 1.2,
        marginTop: 0,
    },
    futuraParagraph: {
        fontFamily: options.headerFontFamily.join(`,`),
        marginBottom: 0,
    },
}

export default MainFunction