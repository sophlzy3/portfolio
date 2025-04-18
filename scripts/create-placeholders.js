// 创建四个简单的占位图片
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext('2d');

// 项目1占位图
function createPlaceholder1() {
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, 800, 600);
  
  ctx.fillStyle = '#0ea5e9';
  ctx.font = 'bold 40px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Robotics Control', 400, 300);
  
  return canvas.toDataURL('image/jpeg');
}

// 项目2占位图
function createPlaceholder2() {
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, 800, 600);
  
  ctx.fillStyle = '#0ea5e9';
  ctx.font = 'bold 40px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Visual SLAM', 400, 300);
  
  return canvas.toDataURL('image/jpeg');
}

// 项目3占位图
function createPlaceholder3() {
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, 800, 600);
  
  ctx.fillStyle = '#0ea5e9';
  ctx.font = 'bold 40px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Robotics Exploration', 400, 300);
  
  return canvas.toDataURL('image/jpeg');
}

// 项目4占位图
function createPlaceholder4() {
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, 800, 600);
  
  ctx.fillStyle = '#0ea5e9';
  ctx.font = 'bold 40px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Multimodal Perception', 400, 300);
  
  return canvas.toDataURL('image/jpeg');
}

// 保存图片
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

fs.writeFileSync(path.join(imagesDir, 'placeholder-project1.jpg'), 
                Buffer.from(createPlaceholder1().split(',')[1], 'base64'));
fs.writeFileSync(path.join(imagesDir, 'placeholder-project2.jpg'), 
                Buffer.from(createPlaceholder2().split(',')[1], 'base64'));
fs.writeFileSync(path.join(imagesDir, 'placeholder-project3.jpg'), 
                Buffer.from(createPlaceholder3().split(',')[1], 'base64'));
fs.writeFileSync(path.join(imagesDir, 'placeholder-project4.jpg'), 
                Buffer.from(createPlaceholder4().split(',')[1], 'base64'));

console.log('占位图片已创建');
