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

初始化数据库：
medusa migrations run

npm start 开启
medusa develop 开启


### azure 部署
也可以用azure的postgress

注意：?sslmode=require 不要漏了


azure : postgress
azure_pg_admin

创建一个新的管理员角色：
CREATE USER <new_user> CREATEDB CREATEROLE PASSWORD '<StrongPassword!>';
GRANT azure_pg_admin TO <new_user>;

服务器参数里：azure.extensions
开启 pg_trgm 插件

### admin的账号密码设置
medusa user -e some@email.com -p some_password

admin的地址：http://localhost:9000/app

### 
azure 虚拟机 Ubuntu 
- 配置公共ip

<!-- - 安装 sudo apt install nodejs    -->

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install v18.16.0

- git clone https://github.com/shadowcz007/mix-store.git
- nano (设置.env)










## 服务常驻

1、安装 forever
npm install forever -g
3、使用 forever 启动 js 文件
forever start index.js
4、停止 js 文件
forever stop index.js
5、启动js文件并输出日志文件
forever start -l forever.log -o out.log -e err.log index.js
6、重启js文件
forever restart index.js
7、查看正在运行的进程
forever list
