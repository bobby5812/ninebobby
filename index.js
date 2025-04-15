function calculate() {
    const balance = parseFloat(document.getElementById("balance").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const months = parseFloat(document.getElementById("months").value);
    const resultDiv = document.getElementById("result");
  
    if (isNaN(balance) || isNaN(rate) || isNaN(months) || balance <= 0 || rate < 0 || months <= 0) {
      resultDiv.innerHTML = "<p style='color:red;'>กรุณากรอกข้อมูลให้ถูกต้องครบถ้วน</p>";
      return;
    }
  
    const monthlyRate = rate / 100 / 12;
    const interest = balance * monthlyRate * months;
    const total = balance + interest;
  
    resultDiv.innerHTML = `
      <p>💰 ดอกเบี้ยรวมที่ต้องจ่าย: <strong>฿${interest.toFixed(2)}</strong></p>
      <p>📌 ยอดรวมที่ต้องชำระ: <strong>฿${total.toFixed(2)}</strong></p>
      <p style="font-size: 14px; color: gray;">* คำนวณแบบดอกเบี้ยธรรมดา (Simple Interest)</p>
    `;
  }
  