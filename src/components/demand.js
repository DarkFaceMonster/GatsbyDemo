import React from "react"
import Card from "./card"
import { scale, options } from "../utils/typography"

const Demand = () => (
    <>
        <Card>
            <h4 css={styles.cardHeadLine}>
                硬盘
            </h4>
            <p css={styles.futuraParagraph}>
                50+ GB
            </p>
        </Card>
        <Card>
            <h4 css={styles.cardHeadLine}>
                内存
            </h4>
            <p css={styles.futuraParagraph}>
                8+ GB
            </p>
        </Card>
        <Card>
            <h4 css={styles.cardHeadLine}>
                CPU
            </h4>
            <p css={styles.futuraParagraph}>
                4+ 核
            </p>
        </Card>
        <div>
            <div css={styles.demand}>
                <h4 css={styles.cardHeadLine}>
                    操作系统
                </h4>
                <p css={styles.futuraParagraph}>
                    64位操作系统：支持Windows（除系统WIN2000，WIN2003外，这两个系统不支持安装JDK 1.8 64位以上的版本） 各版本，CentOS,RedHat ,Mac 操作系统，推荐Centos6.5 64位操作系统。
                </p>
            </div>
            <div css={styles.demand}>
                <h4 css={styles.cardHeadLine}>
                    数据库
                </h4>
                <div css={styles.futuraParagraph}>
                    <div>数据库、大数据及数据库集群:</div>
                    <ul>标准支持Mysql(试用时无需安装，自带嵌入式mysql数据库，直接使用即可)</ul>
                    <ul>定制支持MS Sql ,Oracle ,Sysbase ,Hadoop ,Elasticsearch</ul>
                </div>
            </div>
            <div css={styles.demand}>
                <h4 css={styles.cardHeadLine}>
                    准备环境
                </h4>
                <p css={styles.futuraParagraph}>
                    JDK1.8及以上版本，并配置好java环境变量，可执行java -version确认JDK版本和路径。
                </p>
            </div>
            <div css={styles.demand}>
                <h4 css={styles.cardHeadLine}>
                    浏览器
                </h4>
                <p css={styles.futuraParagraph}>
                    IE9+ ; Google Chrome 29+ ; Firefox 23+ ; Safari 6+ ; Microsoft Edge 1.0+ ; Opera 15+
                </p>
            </div>
        </div>
    </>
)

const styles = {
    cardHeadLine: {
        ...scale(1 / 5),
        lineHeight: 1.2,
        marginTop: 0,
    },
    demand: {
        marginLeft: `18px`,
        padding: `30px`,
    },
    futuraParagraph: {
        fontFamily: options.headerFontFamily.join(`,`),
        marginBottom: 0,
    },
}

export default Demand