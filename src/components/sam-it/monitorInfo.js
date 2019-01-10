import React from "react"
import Card from "../card"
import { scale, options } from "../../utils/typography"

const MonitorInfo = () => (
    <>
    <Card>
        <h4 css={styles.cardHeadLine}>
            监测器介绍
        </h4>
        <p css={styles.futuraParagraph}>
            有10000+监测器，CPU、内存、Disk、目录、文件、Ping、端口、服务、进程、网卡、系统事件日志、VMOracle数据库信息、Oracle表空间、Oracle连接数、SQLServer事务及日志、SQLServer死锁、数据库查询、WebSphereMQSeries等等，并可进行监测器个性化定制开发。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
           监测器界面介绍
        </h4>
        <p css={styles.futuraParagraph}>
            监测器个性化展示、列表、历史曲线、设备、资源仪表板等以图线表智能分析被监测IT资源详细运行状态与秒级实时监测参数等。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
             对网络设备支持
        </h4>
        <p css={styles.futuraParagraph}>
            支持不同厂商、不同型号的网络设备（防火墙、路由器、交换机等等），每个监测器如同眼睛一般7*24不间断监测网络与IT资源设备，帮助IT运维管理人员对整个IT系统进行全面深度的监测管理。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            对服务器支持
        </h4>
        <p css={styles.futuraParagraph}>
            支持Windows、Unix、Solaris、AIX、FreeBSD、Unixware、HP-UX、OpenServer等所有主流操作系统的各种运行状态、参数、错误、日志、事件等进行7*24不间断的监测管理，并对这些信息进行智能分析、存储和故障识别、告警，以及自动恢复等。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            对业务系统支持
        </h4>
        <p css={styles.futuraParagraph}>
            对现代企业在信息化、移动互联、互联网+、云、大数据、数字化、以及未来智能化等关键业务应用服务方面的需求，为用户开发了大量专业的企业业务应用服务方面的监测器，并支持源代码级的监测器二次开发、定制开发，以及用户业务整合监测上的需求开发。
        </p>
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

export default MonitorInfo