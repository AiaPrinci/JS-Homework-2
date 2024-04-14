function getRandomDegree(min, max) {
    return (max - Math.random() * (max - min));
  }
  
  function springDegrees() {
    return getRandomDegree(10, 24);
  }
  
  function summerDegrees() {
    return getRandomDegree(20, 40);
  }
  
  function autumnDegrees() {
    return getRandomDegree(5, 16);
  }
  
  function winterDegrees() {
    return getRandomDegree(-5, 10);
  }
  
  function getSeasonalDegrees(season) {
    switch (season) {
      case 'spring':
        return springDegrees();
      case 'summer':
        return summerDegrees();
      case 'autumn':
        return autumnDegrees();
      case 'winter':
        return winterDegrees();
      default:
        return 'Season not recognized.';
    }
  }
  
  const currentSeason = 'spring';
  console.log(`The degrees for ${currentSeason} is: ${getSeasonalDegrees(currentSeason)}C°`); 