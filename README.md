# 电商后端


vercel先建一个postgres数据库

DATABASE_URL="postgres://default:hvPum0lALsV4@ep-crimson-moon-97999863.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require"


npm install -g @medusajs/medusa-cli
medusa new my-medusa-store
cd my-medusa-store
medusa develop

管理员账号
medusa user -e some@email.com -p somepassword

邀请团队成员加入，复制invite链接发送即可



npm install 安装
npm start 开启
medusa develop 开启


:::