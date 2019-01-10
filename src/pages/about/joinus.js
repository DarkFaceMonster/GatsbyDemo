import React from "react"
import { Table } from "antd"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import { vP } from "../../components/gutters"
import presets, { colors } from "../../utils/presets"
import typography, { rhythm } from "../../utils/typography"
import { itemListAbout } from "../../utils/sidebar/item-list"
import Introduction from "../../components/about/introduction"

const columns = [
    {title: '招聘职位', dataIndex: 'position', key: 'position'},
    {title: '要求', dataIndex: 'requirements', key: 'requirements'},
    {title: '人数', dataIndex: 'people', key: 'people'},
    {title: '地点', dataIndex: 'site', key: 'site', filters:[{text: '北京', value: '北京'}, {text: '上海', value: '上海'}, {text: '长沙', value: '长沙'},], 
        filterMultiple: false, onFilter: (value, record) => record.site.indexOf(value) === 0,
    },
    {title: '发布时间', dataIndex:'date', key: 'date'},
]

const WantPage = () => (
    <Layout location={window.location} itemList={itemListAbout}>
        <SEO title="About" />
        <div css={styles.contact} id="joinus">
            <div css={styles.summaryTitle}>
                <h2>诚聘英才</h2>
                <h4>Join Us (Social recruitment)</h4>
            </div>
            <Table 
                dataSource={data}
                columns={columns}
                pagination={false}
            />
        </div>
        <div css={styles.contact} id="introduction">
            <div css={styles.summaryTitle}>
                <h2>公司介绍</h2>
                <h4>Company introduction</h4>
            </div>
            <div css={styles.cards}>
                <Introduction />
            </div>
        </div>
        <div css={styles.footer}>
            <Footer />
        </div>
    </Layout>
)

const data = [
    {key: 1, position: '销售经理', requirements: '查看详细', people: '3人', site : '北京', date: '2017-02-07'},
    {key: 2, position: '销售经理', requirements: '查看详细', people: '2人', site : '上海', date: '2017-02-07'},
    {key: 3, position: '销售经理', requirements: '查看详细', people: '2人', site : '长沙', date: '2017-02-07'},
]

const styles = {
    cards: {
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
        paddingTop: 0,
        paddingBottom: 0,
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

export default WantPage