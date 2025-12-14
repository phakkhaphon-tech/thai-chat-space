<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ยินดีต้อนรับ | หน้าแรกของฉัน</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Sarabun:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* --- ส่วนของ CSS (ตกแต่ง) --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            /* ใช้ฟอนต์ Poppins สำหรับอังกฤษ และ Sarabun สำหรับไทย */
            font-family: 'Poppins', 'Sarabun', sans-serif;
            /* พื้นหลังไล่สี (Gradient) สวยๆ */
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 100vh; /* ความสูงเต็มจอ */
            display: flex;
            justify-content: center; /* จัดกึ่งกลางแนวนอน */
            align-items: center; /* จัดกึ่งกลางแนวตั้ง */
            color: white;
            padding: 20px;
        }

        /* กล่องข้อความตรงกลาง (Glassmorphism Effect) */
        .glass-container {
            background: rgba(255, 255, 255, 0.1); /* สีขาวโปร่งแสง */
            backdrop-filter: blur(10px); /* เอฟเฟกต์กระจกฝ้า เบลอฉากหลัง */
            border-radius: 20px; /* มุมโค้ง */
            padding: 50px;
            text-align: center;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* เงาฟุ้งๆ */
            border: 1px solid rgba(255, 255, 255, 0.18); /* ขอบขาวบางๆ */
            max-width: 600px;
            width: 100%;
        }

        h1 {
            font-size: 3em;
            margin-bottom: 15px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        p {
            font-size: 1.2em;
            margin-bottom: 35px;
            color: #e0e0e0; /* สีเทาอ่อน */
            line-height: 1.6;
        }

        /* ปุ่มกด */
        .btn-start {
            display: inline-block;
            padding: 12px 35px;
            background-color: #ff6b6b; /* สีปุ่ม (สีส้มแดง) */
            color: white;
            text-decoration: none; /* เอาเส้นใต้ลิงก์ออก */
            border-radius: 30px; /* ปุ่มกลมมน */
            font-weight: 700;
            letter-spacing: 1px;
            transition: all 0.3s ease; /* เอฟเฟกต์สมูทเวลาเอาเมาส์ชี้ */
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
        }

        /* เมื่อเอาเมาส์ไปชี้ที่ปุ่ม (Hover) */
        .btn-start:hover {
            background-color: #ff4757;
            transform: translateY(-3px); /* ลอยขึ้นนิดนึง */
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
        }
        
        /* ปรับให้สวยบนมือถือ */
        @media (max-width: 480px) {
            h1 { font-size: 2em; }
            p { font-size: 1em; }
            .glass-container { padding: 30px 20px; }
        }
    </style>
</head>
<body>
    <div class="glass-container">
        <h1>สวัสดี ชาวโลก! 🚀</h1>
        <p>ยินดีต้อนรับสู่เว็บไซต์แรกของฉัน<br>ที่สร้างขึ้นด้วย VS Code และอัปโหลดผ่าน Git<br>มันอาจจะยังดูเรียบง่าย แต่เป็นจุดเริ่มต้นที่ยิ่งใหญ่!</p>
        <a href="#" class="btn-start">เริ่มต้นใช้งาน</a>
    </div>
</body>
</html>