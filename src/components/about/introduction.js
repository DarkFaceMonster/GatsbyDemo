import React from "react"
import Card from "../../components/card"
import { options } from "../../utils/typography"

const Introduction = () => (
    <>
    <Card>
        <h4 css={styles.cardHeadLine}>
            公司能力
        </h4>
        <p css={styles.futuraParagraph}>
            最稳定最强研发团队（21世纪人才最重要）；最优秀的架构（地基决定大厦的高度，架构决定软件的功能）；最漂亮的界面。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            全面深度监测
        </h4>
        <p css={styles.futuraParagraph}>
            基于ITIL框架与标准，以全面深度监测IT为核心，实现运维管理可视化、一体化IT运营支撑系统的解决方案，并持续创新，引领行业航向。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            技术能力
        </h4>
        <p css={styles.futuraParagraph}>
            一体化平台，动态插件模式，高可配置性。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            深度日志分析、海量运维
        </h4>
        <p css={styles.futuraParagraph}>
            深化监测，拓展运维角度，引入大海量日志的实时分析平台，以IT管理原生态为基础，展开广度、深度上的技术延伸和优化方案。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            大数据云
        </h4>
        <p css={styles.futuraParagraph}>
            面向业务、以用户为导向，实现大IT、大日志监测、管理、运维、分析的数据中心，为用户提供云计算、云监测、微信App监测、手机App智能运维、大数据的服务平台系统。
        </p>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            服务能力
        </h4>
        <p css={styles.futuraParagraph}>
            全国20多家销售和技术支撑中心，数百家合作伙伴，400呼叫中心，在线客服与技术支持，快速积极响应用户，主动巡检排查回访服务，并对友商渠道、市场、培训、售后等一系列品牌、技术、案例经验上的服务对接与精细化支持。
        </p>
    </Card>
    </>
)

const styles = {
    cardHeadLine: {
        marginTop: 0,
    },
    futuraParagraph: {
        fontFamily: options.headerFontFamily.join(`,`),
        marginBottom: 0,
    },
}

export default Introduction