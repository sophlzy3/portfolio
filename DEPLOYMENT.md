# 个人网站部署说明

这是一个使用Next.js和TailwindCSS构建的个人网站，具有深色/浅色模式切换功能和响应式设计。

## 环境要求

- Node.js 18.0.0 或更高版本
- npm 9.0.0 或更高版本

## 安装步骤

1. 解压下载的ZIP文件到您的本地目录

2. 打开终端，进入项目目录
   ```bash
   cd sophie-portfolio
   ```

3. 安装依赖
   ```bash
   npm install
   ```

4. 本地运行（开发模式）
   ```bash
   npm run dev
   ```
   此时网站将在 http://localhost:3000 上运行

5. 构建生产版本
   ```bash
   npm run build
   ```

6. 运行生产版本
   ```bash
   npm start
   ```

## 部署选项

### 方法1：Vercel部署（推荐）

1. 在[Vercel](https://vercel.com)上创建账户
2. 安装Vercel CLI
   ```bash
   npm install -g vercel
   ```
3. 在项目目录中运行
   ```bash
   vercel
   ```
4. 按照提示完成部署

### 方法2：静态导出

1. 修改next.config.ts文件，添加输出配置
   ```javascript
   const nextConfig = {
     output: 'export',
     // 其他配置...
   };
   ```

2. 构建静态文件
   ```bash
   npm run build
   ```

3. 静态文件将生成在`out`目录中，可以部署到任何静态网站托管服务

## 自定义选项

- 修改强调色：编辑`src/app/globals.css`文件中的`--accent`变量
- 更新项目内容：编辑`src/components`目录下的各组件文件
- 添加真实图片：替换`public/images`目录中的占位图片

## 文件结构说明

- `src/app`: 主应用目录
- `src/components`: 所有组件文件
- `public`: 静态资源（图片等）
- `tailwind.config.ts`: TailwindCSS配置

## 问题排查

如果遇到构建错误，请尝试：
1. 删除`.next`目录
2. 重新安装依赖 `npm install`
3. 重新构建 `npm run build`

如有其他问题，请参考[Next.js文档](https://nextjs.org/docs)。
