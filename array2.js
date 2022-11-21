<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The push method appends a new element to an array.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo1"></p>


<script>
const fruits = ["Banana", "Orange", "Apple"];// Adds a new element (Lemon) to fruits
document.getElementById("demo1").innerHTML = fruits;
function myFunction() {
  fruits.push("Lemon");
  document.getElementById("demo").innerHTML = fruits;
  }
</script>

</body>
</html>
