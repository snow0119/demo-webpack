import React, {Component} from 'react'
import config from './config'

import styles from './Greeter.css' // 导入样式

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}> // 使用css module添加类名的方式
                {config.greetText}
            </div>
        )
    }
}

export default Greeter