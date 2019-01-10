import React from 'react'
import { Table } from 'antd'

const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 36) {
      obj.props.colSpan = 0;
    }
    return obj;
}

const columns = [
    {
        title: 'Sort',
        dataIndex: 'sort',
        render: (value, row, index) => {
            const obj = {
                children: value,
                props: {},
            };
            if (index === 0||index === 3||index === 10||index === 14||index === 17||index === 18||index === 22||index === 30||index === 32||index === 36) {
                if (index === 0||index === 14) {
                    obj.props.rowSpan = 3;
                }
                if (index === 3) {
                    obj.props.rowSpan = 7;
                }
                if (index === 10||index === 18||index === 32) {
                    obj.props.rowSpan = 4;
                }
                if (index === 22) {
                    obj.props.rowSpan = 8;
                }
                if (index === 30) {
                    obj.props.rowSpan = 2;
                }
                if (index === 36) {
                    obj.props.colSpan = 3;
                }
            } else {
                obj.props.colSpan = 0;
            }
            return obj;
        },
    }, {
        title: 'Name',
        dataIndex: 'name',
        render: renderContent,
    }, {
        title: 'Info',
        dataIndex: 'info',
        render: renderContent,
    }
]

const data = [
    {
        key: '1',
        sort: '虚拟机',
        name: 'VMware主机信息',
        info: '监测VMware主机信息',
    }, {
        key: '2',
        name: 'VMware主机网络',
        info: '监测VMware主机网络流量信息',
    }, {
        key: '3',
        name: 'VMware虚拟机',
        info: '监测VMware虚拟机运行状态',
    }, {
        key: '4',
        sort: '数据库',
        name: 'Oracle数据库信息',
        info: '监测Oracle数据库信息',
    }, {
        key: '5',
        name: 'Oracle表空间',
        info: '监测Oracle数据库表空间',
    }, {
        key: '6',
        name: 'Oracle连接数',
        info: '监测Oracle数据库连接数',
    }, {
        key: '7',
        name: 'Sybase',
        info: '监测指定Sybase的CPU处理时间性能参数',
    }, {
        key: '8',
        name: 'SQLServer事务及日志',
        info: '监测SQLServer事务及日志',
    }, {
        key: '9',
        name: 'SQLServer死锁',
        info: '监测SQLServer死锁',
    }, {
        key: '10',
        name: '数据库查询',
        info: '监测器连接到指定数据源并执行一个查询来监测数据库情况',
    }, {
        key: '11',
        sort: '中间件',
        name: 'WebSphereMQSeries',
        info: '监测 MQ对象（通道和队列）的性能',
    }, {
        key: '12',
        name: 'WebLogic Jms',
        info: '监测WebLogic Jms消息传递',
    }, {
        key: '13',
        name: 'Tomcat',
        info: '监测Tomcat状态、大小、返回时间、总会话数',
    }, {
        key: '14',
        name: 'JBOSS监测',
        info: '监测JBOSS连接和状态',
    }, {
        key: '15',
        sort: '存储',
        name: '存储缓存',
        info: '监测存储设备卷状态',
    }, {
        key: '16',
        name: '存储磁盘',
        info: '监测主机运行时间',
    }, {
        key: '17',
        name: '存储故障',
        info: '监测存储设备故障状态',
    }, {
        key: '18',
        sort: '负载均衡',
        name: 'F5 Big IP',
        info: '监测指定Big IP的F5的当前连接数、内存与端口拒绝数据包总数等性能参数',
    }, {
        key: '19',
        sort: '机房环境',
        name: 'ActiveEnergy',
        info: '监测PDU当前能源情况',
    }, {
        key: '20',
        name: '电池剩余容量',
        info: '监测UPS电池剩余容量情况',
    }, {
        key: '21',
        name: '温度',
        info: '监测空调温度',
    }, {
        key: '22',
        name: '风机状态',
        info: '监测空调风机状态',
    }, {
        key: '23',
        sort: '网站应用',
        name: 'URL',
        info: '监测指定网页状态、大小、返回时间',
    }, {
        key: '24',
        name: 'URL Transaction',
        info: '监测基于URL的业务流程是否正常工作，如网上购买、注册过程，可内容匹配',
    }, {
        key: '25',
        name: 'DNS',
        info: '监测指定DNS解析时间',
    }, {
        key: '26',
        name: '域名注册Whois',
        info: '监测域名的联系方式、到期时间、创建时间、联系人、剩余有效期（天）',
    }, {
        key: '27',
        name: 'FTP',
        info: '监测指定FTP的下载文件大小及下载速率等',
    }, {
        key: '28',
        name: 'News',
        info: '监测指定News对指定讨论组的文件个数等',
    }, {
        key: '29',
        name: 'IIS性能计数器',
        info: '监测器监控勾选的计数器项目',
    }, {
        key: '30',
        name: 'Apache',
        info: '监测Apache状态、连接个数、并发情况',
    }, {
        key: '31',
        sort: '邮件服务',
        name: 'Exchange队列',
        info: '监测Exchange队列、虚主机、虚服务、连名称、队大小、消数',
    }, {
        key: '32',
        name: 'Mail',
        info: '监测通过收发邮件测试Mail是否正常工作',
    }, {
        key: '33',
        sort: '其它业务与应用等',
        name: 'LDAP',
        info: '监测LDAP的服务、支持内容匹配和LDAP过滤',
    }, {
        key: '34',
        name: 'VPN Connection',
        info: '模拟VPN拔号过程，监测VPN拔号服务器是否正常工作',
    }, {
        key: '35',
        name: '磁盘阵列监测',
        info: '监测磁盘阵列读写I/O速率、读写缓存命中、读写数据速度、读写传输速度',
    }, {
        key: '36',
        name: '万能脚本监测器',
        info: '监测运行用户指定的任意脚本、识别脚本结果、生成需要的报告',
    }, {
        key: '37',
        sort: '本表只列出部分常用监测器介绍，详细说明参考SITEVIEW监测器文档，详细参数以SITEVIEW ITOSS的监测器为标准。',
    },
]

const OpeTable = () => (
    <Table 
        bordered
        size="small"
        dataSource={data}
        columns={columns}
        showHeader={false}
        pagination={false}
    />
)

export default OpeTable