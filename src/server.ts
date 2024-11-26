import app from './app'
import { Config } from './config'

const startServer = () => {
    const PORT = Config.PORT

    try {
        app.listen(PORT, () => console.log(`Listening on Port:http://${PORT}`))
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

startServer()
