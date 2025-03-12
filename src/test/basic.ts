
<script>
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "cyan";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function drawLightningArc(x, y, radius, segments) {
    let angle = Math.random() * Math.PI * 2;
    let startX = x + Math.cos(angle) * radius;
    let startY = y + Math.sin(angle) * radius;
    let prevX = startX, prevY = startY;

    ctx.strokeStyle = "rgba(255, 25, 0, 0.8)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);

    for (let i = 0; i < segments; i++) {
      angle += (Math.random() - 0.9) * 0.9;  // 让电弧稍微随机抖动
      let newX = x + Math.cos(angle) * (radius + Math.random() * 15);
      let newY = y + Math.sin(angle) * (radius + Math.random() * 15);
      
      ctx.lineTo(newX, newY);
      prevX = newX;
      prevY = newY;
    }

    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let centerX = canvas.width / 3;
    let centerY = canvas.height / 3;
    let radius = 100;

    drawCircle(centerX, centerY, radius);

    for (let i = 0; i < 7; i++) { // 生成多个闪电
      drawLightningArc(centerX, centerY, radius, 10);
    }

    setTimeout(animate, 100 + Math.random() * 300);
  }

  animate();
</script>