
// Form Elements to submit new transactions.
<script>
    document.getElementById("newTransactionForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const transactionDetails = document.getElementById("transactionDetails").value;
        const date = document.getElementById("date").value;
        const amount = parseFloat(document.getElementById("amount").value);
        const category = document.getElementById("category").value;

        const transaction = {
            userName,
            transactionDetails,
            date,
            amount,
            category
        };

        console.log("New Transaction:", transaction);
    });
</script>