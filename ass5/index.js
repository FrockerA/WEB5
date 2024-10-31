        let num1 = parseInt(prompt("Enter the first number"));
        let num2 = parseInt(prompt("Enter the second number"));
        let num3 = parseInt(prompt("Enter the third number"));

        let numbers = [num1, num2, num3];

        function find(numbers) {
            let nearest = numbers[0];
            let farthest = numbers[0];

            for (let i = 1; i < numbers.length; i++) {
                if (Math.abs(100 - numbers[i]) < Math.abs(100 - nearest)) {
                    nearest = numbers[i];
                }
                if (Math.abs(100 - numbers[i]) > Math.abs(100 - farthest)) {
                    farthest = numbers[i];
                }
            }
            return { nearest, farthest };
        }

        let result = find(numbers);

        document.getElementById("nearest").textContent = "Nearest to 100: " + result.nearest;
        document.getElementById("farthest").textContent = "Farthest from 100: " + result.farthest;