# Descriptive Statistics Calculator

A JavaScript class for computing descriptive statistics, including measures of central tendency and measures of dispersion.

## DescriptiveStatistics Class

The `DescriptiveStatistics` class provides methods to calculate various descriptive statistics for a given dataset.

### Methods:

#### 1. Mean
static mean(data)

Calculates the mean (average) of the dataset.

#### 2. Median
javascript
Copy code
static median(data)
Calculates the median of the dataset.


#### 3. Mode
javascript
Copy code
static mode(data)
Calculates the mode(s) of the dataset.


#### 4. Range
javascript
Copy code
static range(data)
Calculates the range of the dataset.


#### 5. Variance
javascript
Copy code
static variance(data)
Calculates the variance of the dataset.


#### 6. Standard Deviation
javascript
Copy code
static standardDeviation(data)
Calculates the standard deviation of the dataset.


#### Example Usage
javascript
Copy code
const dataset = [4, 8, 6, 2, 10, 8, 5];

`console.log("Mean:", DescriptiveStatistics.mean(dataset));
console.log("Median:", DescriptiveStatistics.median(dataset));
console.log("Mode:", DescriptiveStatistics.mode(dataset));
console.log("Range:", DescriptiveStatistics.range(dataset));
console.log("Variance:", DescriptiveStatistics.variance(dataset));
console.log("Standard Deviation:", DescriptiveStatistics.standardDeviation`
