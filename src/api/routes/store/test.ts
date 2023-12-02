import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/hello-product", async (req:any, res:any) => {
    const productService = req?.scope.resolve("productService")

    const [product] = await productService.list({}, { take: 1 })

    res.json({
      message: `Welcome to ${product.title}!`
    })
  })

  return router;
}