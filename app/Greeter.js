import React, {Component} from 'react'
import config from './config'

import styles from './Greeter.css' // 导入样式

class Greeter extends Component {
    render() {
        // 使用css module添加类名的方式
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter