import React from "react"
import Card from "./card"
import { Tabs } from 'antd'
import { Link } from "gatsby"
import Button from "./button"
import { scale, options } from "../utils/typography"

const TabPane = Tabs.TabPane;

const FAQ = () => (
    <>
    <Tabs defaultActiveKey="1">
        <TabPane tab="FAQ" key="1">
            <Tab1 />
        </TabPane>
        <TabPane tab="快速上手" key="2">
            <Tab2 />
        </TabPane>
        <TabPane tab="资料下载" key="3">
            <Tab3 />
        </TabPane>
        <TabPane tab="询价" key="4">
            <Tab4 />
        </TabPane>
    </Tabs>
    </>
)

const Tab1 = () => (
    <>
    <h4 css={styles.cardHeadLine}>
        常见问题解答与网管软件、IT运维相关知识
    </h4>
    <div css={styles.futuraParagraph}>
        <Card>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-az01.html">ITOSS产品安装环境要求</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-az12.html">ITOSS端口修改配置</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-zyjc02.html">linux下如何添加SNMP服务</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-zyjc04.html">邮件报警配置方法</a></li>
        </Card>
        <Card>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-az04.html">添加JAVA环境变量</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-zyjc01.html">Windows如何配置SNMP服务</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-zyjc03.html">网络设备如何开启SNMP</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-zyjc05.html">微信报警配置</a></li>
        </Card>
        <Card>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itoss-faq/faq-azjc/faq-az01.html">查看更多FAQ</a></li>
        </Card>
    </div>
    </>
)

const Tab2 = () => (
    <>
    <h4 css={styles.cardHeadLine}>
        关于安装、监测、运维详细操作步骤
    </h4>
    <h2 css={{color: `#1890FF`}}>
        “非常快速地按步骤就能把ITOSS部署下去，实现落地应用，介绍通俗易懂，也很专业。”
    </h2>
    <Button secondary to="http://www.siteview.com/sites/siteview/home/quict-start.html" tag="href" overrideCSS={{marginTop: `3rem`, marginLeft: `0rem`}} style={{textDecoration: 'none', fontFamily: options.headerFontFamily.join(`,`),}}>
        快速上手
    </Button>
    </>
)

const Tab3 = () => (
    <>
    <h4 css={styles.cardHeadLine}>
        关于产品资料、用户手册的下载与升级更新说明
    </h4>
    <div css={styles.futuraParagraph}>
        <Card>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itossinformation-download.html">SITEVIEW ITOSS PPT演示</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itossinformation-download.html">SITEVIEW ITOSS PDF彩页产品介绍</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itossinformation-download.html">SITEVIEW ITOSS 用户手册</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/document/siteview-itoss/itossupdate-instruction.html">升级更新说明</a></li>
        </Card>
        <Card>
            <li><Link to="/404/">前往文档中心</Link></li>
        </Card>
    </div>
    </>
)

const Tab4 = () => (
    <>
    <h4 css={styles.cardHeadLine}>
        产品报价、定制、OEM、需求咨询
    </h4>
    <div css={styles.futuraParagraph}>
        <Card>
            <li><a href="http://www.siteview.com/sites/siteview/home/price.html">产品报价</a></li>
            <li><a href="http://www.siteview.com/sites/siteview/home/oem.html">OEM合作</a></li>
            <li><p>客服热线：400-705-0567</p></li>
            <li><p>销售电话：13520830552（彭先生）</p></li>
        </Card>
        <Card>
            <li><Link to="/about/contactus/">联系我们</Link></li>
        </Card>
    </div>
    </>
)

const styles = {
    cardHeadLine: {
        ...scale(1 / 5),
        marginTop: 0,
        color: `#1890FF`,
    },
    demand: {
        marginLeft: `18px`,
        padding: `30px`,
    },
    futuraParagraph: {
        fontFamily: options.headerFontFamily.join(`,`),
        marginBottom: 0,
        display: `flex`,
        width: `100%`,
    },
}

export default FAQ