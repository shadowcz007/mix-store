const express = require("express")
const { GracefulShutdownServer } = require("medusa-core-utils")

const loaders = require("@medusajs/medusa/dist/loaders/index").default


const app = express()

;(async() => {
  async function start() {
    
    const directory = process.cwd()

    try {
      const { container } = await loaders({
        directory,
        expressApp: app
      })
      const configModule = container.resolve("configModule")
      const port = process.env.PORT ?? configModule.projectConfig.port ?? 9000
      // console.log(`1 is ready on port: ${port}`)
      const server = GracefulShutdownServer.create(
        app.listen(port, (err) => {
          if (err) {
            return
          }
          console.log(`Server is ready on port: ${port}`)
        })
      )

      // Handle graceful shutdown
      const gracefulShutDown = () => {
        server
          .shutdown()
          .then(() => {
            console.info("Gracefully stopping the server.")
            process.exit(0)
          })
          .catch((e) => {
            console.error("Error received when shutting down the server.", e)
            process.exit(1)
          })
      }
      process.on("SIGTERM", gracefulShutDown)
      process.on("SIGINT", gracefulShutDown)
    } catch (err) {
      console.error("Error starting server", err)
      process.exit(1)
    }
  }

  await start()
})()


module.exports = app;