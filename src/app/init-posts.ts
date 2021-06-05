export class Init {
  load() {
    if(localStorage.getItem('feed') === null || localStorage.getItem('feed') == undefined) {
      console.log('No Feed Found... Creating...');
      let feed = [
        {
          title: 'Meal Prep',
          body:'Eat food'
        },
        {
          title: 'workout',
          body:'Deadlift'
        },
        {
          title: 'Healthy lifestyle',
          body:'Proper food'
        }
      ];

      localStorage.setItem('feed', JSON.stringify(feed));
      return
    } else {
      console.log('Found feed...');
    }
  }
}
