import { factorial } from "./factorial.ts";

export class binomialDistribution {

    // Factorial => export const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
    /**
     * @param n Number of trials.
     * @param x The number of success desired.
     * @param p Probability of getting a success in one trial.
     * @param q The probability of getting a failure in one trial.
     * @returns The final equation.
     */
    calculateBinomialDistribution(n: number, x: number, p: number, q: number) {

        // Calculate the Combination equation: (n!)/((n-x)!(x))!
        const combinationEquation = (factorial(n))/(factorial((n - x)) * factorial(x));

        // Calculate the probability ((pˣ)(qⁿ⁻ˣ))
        const probabilityEquation = p ** x * Math.pow(q, n - x)
        
        // Multiply the two.
        const finalEquation = (combinationEquation) * (probabilityEquation);

        // Return the final equation.
        return finalEquation;

    }
    
}

// Example ---------------------------------------------------------
const bD = new binomialDistribution();
console.log(bD.calculateBinomialDistribution(4, 0, 0.79, 0.21));
// -----------------------------------------------------------------

