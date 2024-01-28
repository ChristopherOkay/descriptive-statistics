class DescriptiveStatistics {
    // Measure of Central Tendency: Mean
    static mean(data) {
      const sum = data.reduce((acc, val) => acc + val, 0);
      return sum / data.length;
    }
  
    // Measure of Central Tendency: Median
    static median(data) {
      const sortedData = data.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[mid - 1] + sortedData[mid]) / 2;
      } else {
        return sortedData[mid];
      }
    }
  
    // Measure of Central Tendency: Mode
    static mode(data) {
      const countMap = new Map();
  
      data.forEach((value) => {
        countMap.set(value, (countMap.get(value) || 0) + 1);
      });
  
      let maxCount = 0;
      let modes = [];
  
      countMap.forEach((count, value) => {
        if (count > maxCount) {
          maxCount = count;
          modes = [value];
        } else if (count === maxCount) {
          modes.push(value);
        }
      });
  
      return modes;
    }
  
    // Measure of Dispersion: Range
    static range(data) {
      const sortedData = data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    // Measure of Dispersion: Variance
    static variance(data) {
      const mean = this.mean(data);
      const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
      const sumSquaredDiff = squaredDifferences.reduce((acc, val) => acc + val, 0);
      return sumSquaredDiff / data.length;
    }
  
    // Measure of Dispersion: Standard Deviation
    static standardDeviation(data) {
      return Math.sqrt(this.variance(data));
    }
  }
  
  // Example usage
  const dataset = [4, 8, 6, 2, 10, 8, 5];
  console.log("Mean:", DescriptiveStatistics.mean(dataset));
  console.log("Median:", DescriptiveStatistics.median(dataset));
  console.log("Mode:", DescriptiveStatistics.mode(dataset));
  console.log("Range:", DescriptiveStatistics.range(dataset));
  console.log("Variance:", DescriptiveStatistics.variance(dataset));
  console.log("Standard Deviation:", DescriptiveStatistics.standardDeviation(dataset));
  
