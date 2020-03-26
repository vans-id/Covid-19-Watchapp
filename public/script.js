// Fetch API Indonesia
fetch(
  'https://covid-193.p.rapidapi.com/statistics?country=Indonesia',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key':
        '6626a12ee9msh4e7a8b02c264e97p12785ejsn2078971c2dbd'
    }
  }
)
  .then(res => {
    res.json().then(data => {
      const indoDeath = data.response[0].deaths.total,
        indoRecover = data.response[0].cases.recovered,
        indoNewCase = data.response[0].cases.new,
        indoNewDeaths = data.response[0].deaths.new,
        indoCritical = data.response[0].cases.critical;

      // Indonesia Chart
      const indoCtx = document
        .getElementById('indoChart')
        .getContext('2d');

      const indoChart = new Chart(indoCtx, {
        type: 'bar',
        data: {
          labels: [
            'Deaths',
            'Recovered',
            'New Case',
            'New Deaths',
            'Critical'
          ],
          datasets: [
            {
              label: '# of Person',
              data: [
                indoDeath,
                indoRecover,
                indoNewCase,
                indoNewDeaths,
                indoCritical
              ],
              backgroundColor: [
                'rgba(232,30,99, 0.2)', //red
                'rgba(3,218,197, 0.2)', // green
                'rgba(55,0,179, 0.2)',
                'rgba(254,192,7, 0.2)',
                'rgba(254,87,34, 0.2)'
              ],
              borderColor: [
                'rgba(232,30,99, 1)', //red
                'rgba(3,218,197, 1)', // green
                'rgba(55,0,179, 1)',
                'rgba(254,192,7, 1)',
                'rgba(254,87,34, 1)'
              ],
              borderWidth: 1
            }
          ]
        }
      });

      // Distribution Chart
      const infected =
        data.response[0].cases.total -
        (indoDeath + indoRecover);

      const ctx = document
        .getElementById('infectedChart')
        .getContext('2d');

      const infectedChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Deaths', 'Recovered', 'Infected'],
          datasets: [
            {
              label: '# of Person',
              data: [indoDeath, indoRecover, infected],
              backgroundColor: [
                '#E81E63',
                '#03DAC5',
                '#3700B3'
              ]
            }
          ]
        }
      });

      // Append Info to cards
      const indoTotal = document.createTextNode(
        data.response[0].cases.total
      );
      const recoverNode = document.createTextNode(
        data.response[0].cases.recovered
      );
      const deathsNode = document.createTextNode(
        data.response[0].deaths.total
      );
      const rate = indoNewCase.split('+').join('');
      const total = data.response[0].cases.total;
      const infectionRate = (rate / total) * 100;

      const infectionNode = document.createTextNode(
        infectionRate.toFixed(2) + '%'
      );

      document
        .getElementById('indo-confirmed')
        .appendChild(indoTotal);
      document
        .getElementById('indo-deaths')
        .appendChild(deathsNode);
      document
        .getElementById('indo-recoveries')
        .appendChild(recoverNode);
      document
        .getElementById('infection-rate')
        .appendChild(infectionNode);
    });
  })
  .catch(err => {
    console.log(err);
  });

// Fetch World Wide data
fetch(
  'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host':
        'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key':
        '6626a12ee9msh4e7a8b02c264e97p12785ejsn2078971c2dbd'
    }
  }
)
  .then(res =>
    res.json().then(data => {
      const wwDeaths = parseInt(
          data.total_deaths.split(',').join('')
        ),
        wwRecover = parseInt(
          data.total_recovered.split(',').join('')
        ),
        wwNewCase = parseInt(
          data.new_cases.split(',').join('')
        ),
        wwNewDeaths = parseInt(
          data.new_deaths.split(',').join('')
        );

      // Main Chart
      const ctx = document
        .getElementById('mainChart')
        .getContext('2d');

      const mainChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'Deaths',
            'Recovered',
            'New Case',
            'New Deaths'
          ],
          datasets: [
            {
              label: '# of Person',
              data: [
                wwDeaths,
                wwRecover,
                wwNewCase,
                wwNewDeaths
              ],
              backgroundColor: [
                'rgba(232,30,99, 0.2)', //red
                'rgba(3,218,197, 0.2)', // green
                'rgba(55,0,179, 0.2)',
                'rgba(254,192,7, 0.2)'
              ],
              borderColor: [
                'rgba(232,30,99, 1)', //red
                'rgba(3,218,197, 1)', // green
                'rgba(55,0,179, 1)',
                'rgba(254,192,7, 1)'
              ],
              borderWidth: 1
            }
          ]
        }
      });

      // Append Info to cards
      const wwTotal = document.createTextNode(
        parseInt(data.total_cases.split(',').join(''))
      );
      const recoverNode = document.createTextNode(
        parseInt(
          data.total_recovered.split(',').join('')
        )
      );
      const deathsNode = document.createTextNode(
        parseInt(data.total_deaths.split(',').join(''))
      );

      document
        .getElementById('ww-confirmed')
        .appendChild(wwTotal);
      document
        .getElementById('ww-deaths')
        .appendChild(deathsNode);
      document
        .getElementById('ww-recoveries')
        .appendChild(recoverNode);
    })
  )
  .catch(err => {
    console.log(err);
  });

// Fetch USA API
fetch(
  'https://covid-193.p.rapidapi.com/statistics?country=USA',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key':
        '6626a12ee9msh4e7a8b02c264e97p12785ejsn2078971c2dbd'
    }
  }
)
  .then(res => {
    res.json().then(data => {
      const usDeath = data.response[0].deaths.total,
        usRecover = data.response[0].cases.recovered,
        usNewCase = data.response[0].cases.new,
        usNewDeaths = data.response[0].deaths.new,
        usCritical = data.response[0].cases.critical;

      // US Chart
      const usCtx = document
        .getElementById('usChart')
        .getContext('2d');

      const usChart = new Chart(usCtx, {
        type: 'doughnut',
        data: {
          labels: [
            'Deaths',
            'Recovered',
            'New Case',
            'New Deaths',
            'Critical'
          ],
          datasets: [
            {
              label: '# of Person',
              data: [
                usDeath,
                usRecover,
                usNewCase,
                usNewDeaths,
                usCritical
              ],
              backgroundColor: [
                '#E81E63',
                '#03DAC5',
                '#3700B3',
                '#FEC007',
                '#d602ee'
              ]
            }
          ]
        }
      });

      // Append Info to cards
      const usTotal = document.createTextNode(
        data.response[0].cases.total
      );

      document
        .getElementById('us-total')
        .appendChild(usTotal);
    });
  })
  .catch(err => {
    console.log(err);
  });

// Fetch Italy
fetch(
  'https://covid-193.p.rapidapi.com/statistics?country=Italy',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key':
        '6626a12ee9msh4e7a8b02c264e97p12785ejsn2078971c2dbd'
    }
  }
)
  .then(res =>
    res.json().then(data => {
      const italyDeath = data.response[0].deaths.total,
        italyRecover =
          data.response[0].cases.recovered,
        italyNewCase = data.response[0].cases.new,
        italyNewDeaths = data.response[0].deaths.new,
        italyCritical =
          data.response[0].cases.critical;

      // Italy Chart
      const italyCtx = document
        .getElementById('italyChart')
        .getContext('2d');

      const italyChart = new Chart(italyCtx, {
        type: 'doughnut',
        data: {
          labels: [
            'Deaths',
            'Recovered',
            'New Case',
            'New Deaths',
            'Critical'
          ],
          datasets: [
            {
              label: '# of Person',
              data: [
                italyDeath,
                italyRecover,
                italyNewCase,
                italyNewDeaths,
                italyCritical
              ],
              backgroundColor: [
                '#E81E63',
                '#03DAC5',
                '#3700B3',
                '#FEC007',
                '#d602ee'
              ]
            }
          ]
        }
      });

      // Append Info to cards
      const italyTotal = document.createTextNode(
        data.response[0].cases.total
      );

      document
        .getElementById('italy-total')
        .appendChild(italyTotal);
    })
  )
  .catch(err => {
    console.log(err);
  });

fetch(
  'https://covid-193.p.rapidapi.com/statistics?country=S.-Korea',
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key':
        '6626a12ee9msh4e7a8b02c264e97p12785ejsn2078971c2dbd'
    }
  }
)
  .then(res =>
    res.json().then(data => {
      const koreaDeath = data.response[0].deaths.total,
        koreaRecover =
          data.response[0].cases.recovered,
        koreaNewCase = data.response[0].cases.new,
        koreaNewDeaths = data.response[0].deaths.new,
        koreaCritical =
          data.response[0].cases.critical;

      // South Korea Chart
      const koreaCtx = document
        .getElementById('koreaChart')
        .getContext('2d');

      const koreaChart = new Chart(koreaCtx, {
        type: 'doughnut',
        data: {
          labels: [
            'Deaths',
            'Recovered',
            'New Case',
            'New Deaths',
            'Critical'
          ],
          datasets: [
            {
              label: '# of Person',
              data: [
                koreaDeath,
                koreaRecover,
                koreaNewCase,
                koreaNewDeaths,
                koreaCritical
              ],
              backgroundColor: [
                '#E81E63',
                '#03DAC5',
                '#3700B3',
                '#FEC007',
                '#d602ee'
              ]
            }
          ]
        }
      });

      // Append Info to cards
      const koreaTotal = document.createTextNode(
        data.response[0].cases.total
      );

      document
        .getElementById('korea-total')
        .appendChild(koreaTotal);
    })
  )
  .catch(err => {
    console.log(err);
  });

// Indonesia History
// fetch(
//   'https://covid-193.p.rapidapi.com/history?country=Indonesia',
//   {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'covid-193.p.rapidapi.com',
//       'x-rapidapi-key':
//         '6626a12ee9msh4e7a8b02c264e97p12785ejsn2078971c2dbd'
//     }
//   }
// )
//   .then(res =>
//     res.json().then(data => {
//       const rate = [];

//       data.response.map((el, i) => {
//         rate[i] = el.cases.new;
//       });

//       rate.map(el => console.log(el));
//     })
//   )
//   .catch(err => {
//     console.log(err);
//   });
