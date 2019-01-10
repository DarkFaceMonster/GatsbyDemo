import React from "react"
import Card from "../../components/card"
import Button from "../../components/button"
import { scale, options } from "../../utils/typography"

const MainFunction = () => (
    <>
    <Card>
        <h4 css={styles.cardHeadLine}>
            监测管理
        </h4>
        <p css={styles.futuraParagraph}>
            有10000+监测器，可以监测服务器、网络设备、业务系统、中间件、数据库、虚拟机、存储、机房环境、日志监测、代理监测、脚本监测、OID监测及其它形式监测等。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            历史曲线
        </h4>
        <p css={styles.futuraParagraph}>
            监测器仪表板为用户提供方便、醒目、直观的监测器仪表板。用户通过简单几步可视化定义，即可得到炫酷的监测器图形化界面，一目了然地查看监测设备各指标信息以及趋势情况。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            拓扑展示
        </h4>
        <p css={styles.futuraParagraph}>
            动态拓扑图管理和展示被监测IT资源，包括逻辑拓扑、虚拟场景拓扑、3D拓扑以及简单拖拽在Web界面上就能画的资源拓扑，排查故障非常直观、易用、实用。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            故障告警
        </h4>
        <p css={styles.futuraParagraph}>
            对监测到的故障智能分析进行精确定位、溯源、醒目展示、区分错误级别等，支持颜色、远程声音、短信、邮件、微信多种预警、报警、恢复反馈等信息与日志。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            信息安全
        </h4>
        <p css={styles.futuraParagraph}>
            应用现代化全方位信息技术安全确保用户在IT监测、管理、运维实施部署应用与系统、核心业务的运营安全，有安全核心架构、密码加密，数据传输加密、用户登陆、权限、行为习惯使用安全技术应用等。
        </p>
        <div style={{marginBottom:'0px',}}>
            <Button small secondary to="/404/" overrideCSS={{marginTop: `1rem`}} style={{textDecoration: 'none'}}>
                查看详情
            </Button>
        </div>
    </Card>
    <Card>
        <h4 css={styles.cardHeadLine}>
            报表报告
        </h4>
        <p css={styles.futuraParagraph}>
            丰富的算法分析图表化包括趋势、状态统计、对比、巡检错误、巡检统计、TopN、巡检日志报表等等，并可根据用户个性化的需求定制报表。
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