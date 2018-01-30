import React, {Component} from 'react'
import config from './config'

class Greeter extends Component {
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter