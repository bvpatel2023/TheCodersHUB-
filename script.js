document.getElementById('feeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const courseFee = parseFloat(document.getElementById('courseFee').value);
    const discount = parseFloat(document.getElementById('discount').value);

    // Calculate total fee
    const totalFee = courseFee - (courseFee * (discount / 100));

    // Display total fee
    document.getElementById('totalFee').innerHTML = `<p>Total Fee: $${totalFee.toFixed(2)}</p>`;
});

