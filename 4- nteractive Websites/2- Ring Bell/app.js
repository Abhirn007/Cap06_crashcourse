<script>
  document.getElementById("scamImage").addEventListener("click", function() {
    if (confirm("The website you are going to visit may harm your computer, do you still want to redirect?")) {
      window.location.href = "https://www.example.com"; // Replace "https://www.example.com" with the actual URL you want to redirect to
    }
  });
</script>