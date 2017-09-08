// This app's home page section start begins here.
	function handleHomePageClicks() {
		$('#js-home-page-button').on('click', function (e) {
			$('#js-home-page').removeClass('hidden');
			//All the elements listed below need to be hidden to render above.
			$('#js-nfl-scorecard').addClass('hidden');
			$('#js-render-nfl-scorecard').addClass('hidden');
			$('#js-nfl-schedule').addClass('hidden');
			$('#js-render-nfl-schedule').addClass('hidden');
			$('#js-nfl-standing').addClass('hidden');
			$('#js-render-nfl-standing').addClass('hidden');
			$('#js-mlb-scorecard').addClass('hidden');
			$('#js-render-mlb-scorecard').addClass('hidden');
			$('#js-mlb-schedule').addClass('hidden');
			$('#js-render-mlb-schedule').addClass('hidden');
			$('#js-mlb-standing').addClass('hidden');
			$('#js-render-mlb-standing').addClass('hidden');
			$('#js-nba-scorecard').addClass('hidden');
			$('#js-render-nba-scorecard').addClass('hidden');
			$('#js-nba-schedule').addClass('hidden');
			$('#js-render-nba-schedule').addClass('hidden');
			$('#js-nba-standing').addClass('hidden');
			$('#js-render-nba-standing').addClass('hidden');
			$('#js-nhl-scorecard').addClass('hidden');
			$('#js-render-nhl-scorecard').addClass('hidden');
			$('#js-nhl-schedule').addClass('hidden');
			$('#js-render-nhl-schedule').addClass('hidden');
			$('#js-nhl-standing').addClass('hidden');
			$('#js-render-nhl-standing').addClass('hidden');
			console.log("handleHomePageClicks() ran");
		});
	};
	$(function handleLoadScrimmageSports() {
		handleHomePageClicks();
		handleNFLscheduleClicks();
		handleNFLscoreboardClicks();
		handleNFLweek1scoreboardClicks();
		handleNFLweek2scoreboardClicks();
		handleNFLweek3scoreboardClicks();
		handleNFLweek4scoreboardClicks();
		handleNFLweek5scoreboardClicks();
		handleNFLweek6scoreboardClicks();
		handleNFLweek7scoreboardClicks();
		handleNFLweek8scoreboardClicks();
		handleNFLweek9scoreboardClicks();
		handleNFLweek10scoreboardClicks();
		handleNFLweek11scoreboardClicks();
		handleNFLweek12scoreboardClicks();
		handleNFLweek13scoreboardClicks();
		handleNFLweek14scoreboardClicks();
		handleNFLweek15scoreboardClicks();
		handleNFLweek16scoreboardClicks();
		handleNFLweek17scoreboardClicks();
		handleNFLstandingsClicks();
		handleMLBscheduleClicks();
		handleMLBscoreboardClicks();
		handleMLBstandingsClicks();
		handleNBAscheduleClicks();
		handleNBAscoreboardClicks();
		handleNBAstandingsClicks();
		handleNHLscheduleClicks();
		handleNHLscoreboardClicks();
		handleNHLstandingsClicks();
		console.log("handleLoadScrimmageSports() ran");
	});
// This app's home page section start ends here.



// This NFL section start begins here.
	// This NFL Game Scoreboards section begins here.
		// This below grouped section that consists of AJAX calls to the API begins here.
			function getNFLscoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20170101',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek1scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20160918',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek1scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20160911',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek2scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20160918',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek3scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20160925',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek4scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161002',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek5scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161009',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek6scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161016',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek7scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161023',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek8scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161030',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek9scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161106',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek10scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161113',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek11scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161120',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek12scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161127',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek13scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161204',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek14scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161211',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek15scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161218',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek16scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20161224',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
			function getNFLweek17scoreboardDataFromApi() {
				$.ajax({
					type: 'GET',
					url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/scoreboard.json?fordate=20170101',
					headers: {
						"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
					},
					dataType: "json",
					async: false,
					crossDomain: true,
					data: {},
					json: "callback",
					contentType: "application/json; charset=utf-8",
					success: function (response) {
						console.log(response);
						displayNFLscoreboardData(response);
					},
					error: function (xhr, status) {
						alert(xhr.responseText);
					}
				});
			}
		// This above grouped section that consists of AJAX calls to the API ends here.

		function displayNFLscoreboardData(scoreboardData) {
			const results = scoreboardData.scoreboard.gameScore.map((key, value) => renderNFLscoreboardResult(key));
			$('#js-nfl-scorecard').html(results);
		}
		function renderNFLscoreboardResult(result) {
			return `
	    		<div id="js-render-nfl-scorecard">
		    		<div class="boxscore-container">
						<div class="scoreboard-container">
							<!-- Below is scoreboard of the earliest game on a specific date -->
							<p class="game-location">Date & Time: ${result.game.date} - ${result.game.time}</p><br>
							<table class="sports-game-table">
								<tr>
									<th>Week ${result.game.week} Matchup</th>
									<th>1st</th>
									<th>2nd</th>
									<th>3rd</th>
									<th>4th</th>
									<th>Total</th>
								</tr>
								<tr>
									<td>${result.game.awayTeam.City} ${result.game.awayTeam.Name}</td>
									<td>${result.quarterSummary.quarter[0].awayScore}</td>
									<td>${result.quarterSummary.quarter[1].awayScore}</td>
									<td>${result.quarterSummary.quarter[2].awayScore}</td>
									<td>${result.quarterSummary.quarter[3].awayScore}</td>
									<td>${result.awayScore}</td>
								</tr>
								<tr>
									<td>${result.game.homeTeam.City} ${result.game.homeTeam.Name}</td>
									<td>${result.quarterSummary.quarter[0].homeScore}</td>
									<td>${result.quarterSummary.quarter[1].homeScore}</td>
									<td>${result.quarterSummary.quarter[2].homeScore}</td>
									<td>${result.quarterSummary.quarter[3].homeScore}</td>
									<td>${result.homeScore}</td>
								</tr>
							</table>
							<p class="game-location">Location: ${result.game.location}, ${result.game.homeTeam.City}</p><br>
						</div>
					</div>
				</div>
			`
		}

		//This below section that consists of event listeners for each week on the drop down menu begins here.
			function handleNFLscoreboardClicks() {
				$('#js-nfl-scorecard-button').on('click', function (e) {
					const queryTarget = $('#js-nfl-scorecard').find('js-nfl-scorecard');;
					const query = queryTarget.val();
					getNFLscoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLscorecardClicks() ran");
				});
			}
			function handleNFLweek1scoreboardClicks() {
				$('#week1').on('click', function (e) {
					const queryTarget = $('#week1').find('week1');;
					const query = queryTarget.val();
					getNFLweek1scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek2scoreboardClicks() {
				$('#week2').on('click', function (e) {
					const queryTarget = $('#week2').find('week2');;
					const query = queryTarget.val();
					getNFLweek2scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek3scoreboardClicks() {
				$('#week3').on('click', function (e) {
					const queryTarget = $('#week3').find('week3');;
					const query = queryTarget.val();
					getNFLweek3scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek4scoreboardClicks() {
				$('#week4').on('click', function (e) {
					const queryTarget = $('#week4').find('week4');;
					const query = queryTarget.val();
					getNFLweek4scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek5scoreboardClicks() {
				$('#week5').on('click', function (e) {
					const queryTarget = $('#week5').find('week5');;
					const query = queryTarget.val();
					getNFLweek5scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek6scoreboardClicks() {
				$('#week6').on('click', function (e) {
					const queryTarget = $('#week6').find('week6');;
					const query = queryTarget.val();
					getNFLweek6scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek7scoreboardClicks() {
				$('#week7').on('click', function (e) {
					const queryTarget = $('#week7').find('week7');;
					const query = queryTarget.val();
					getNFLweek7scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek8scoreboardClicks() {
				$('#week8').on('click', function (e) {
					const queryTarget = $('#week8').find('week8');;
					const query = queryTarget.val();
					getNFLweek8scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek9scoreboardClicks() {
				$('#week9').on('click', function (e) {
					const queryTarget = $('#week9').find('week9');;
					const query = queryTarget.val();
					getNFLweek9scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek10scoreboardClicks() {
				$('#week10').on('click', function (e) {
					const queryTarget = $('#week10').find('week10');;
					const query = queryTarget.val();
					getNFLweek10scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek11scoreboardClicks() {
				$('#week11').on('click', function (e) {
					const queryTarget = $('#week11').find('week11');;
					const query = queryTarget.val();
					getNFLweek11scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek12scoreboardClicks() {
				$('#week12').on('click', function (e) {
					const queryTarget = $('#week12').find('week12');;
					const query = queryTarget.val();
					getNFLweek12scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek13scoreboardClicks() {
				$('#week13').on('click', function (e) {
					const queryTarget = $('#week13').find('week13');;
					const query = queryTarget.val();
					getNFLweek13scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek14scoreboardClicks() {
				$('#week14').on('click', function (e) {
					const queryTarget = $('#week14').find('week14');;
					const query = queryTarget.val();
					getNFLweek14scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek15scoreboardClicks() {
				$('#week15').on('click', function (e) {
					const queryTarget = $('#week15').find('week15');;
					const query = queryTarget.val();
					getNFLweek15scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek16scoreboardClicks() {
				$('#week16').on('click', function (e) {
					const queryTarget = $('#week16').find('week16');;
					const query = queryTarget.val();
					getNFLweek16scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
			function handleNFLweek17scoreboardClicks() {
				$('#week17').on('click', function (e) {
					const queryTarget = $('#week17').find('week17');;
					const query = queryTarget.val();
					getNFLweek17scoreboardDataFromApi();
					$('#js-nfl-scorecard').removeClass('hidden');
					$('#js-render-nfl-scorecard').removeClass('hidden');
					//All the elements listed below need to be hidden to render above.
					$('#js-home-page').addClass('hidden');
					$('#js-nfl-schedule').addClass('hidden');
					$('#js-render-nfl-schedule').addClass('hidden');
					$('#js-nfl-standing').addClass('hidden');
					$('#js-render-nfl-standing').addClass('hidden');
					$('#js-mlb-scorecard').addClass('hidden');
					$('#js-render-mlb-scorecard').addClass('hidden');
					$('#js-mlb-schedule').addClass('hidden');
					$('#js-render-mlb-schedule').addClass('hidden');
					$('#js-mlb-standing').addClass('hidden');
					$('#js-render-mlb-standing').addClass('hidden');
					$('#js-nba-scorecard').addClass('hidden');
					$('#js-render-nba-scorecard').addClass('hidden');
					$('#js-nba-schedule').addClass('hidden');
					$('#js-render-nba-schedule').addClass('hidden');
					$('#js-nba-standing').addClass('hidden');
					$('#js-render-nba-standing').addClass('hidden');
					$('#js-nhl-scorecard').addClass('hidden');
					$('#js-render-nhl-scorecard').addClass('hidden');
					$('#js-nhl-schedule').addClass('hidden');
					$('#js-render-nhl-schedule').addClass('hidden');
					$('#js-nhl-standing').addClass('hidden');
					$('#js-render-nhl-standing').addClass('hidden');
					console.log("handleNFLweekOnescoreboardClicks() ran");
				});
			}
		//This above section that consists of event listeners for each week on the drop down menu ends here.

	// This NFL Game Scoreboards section ends here.


	// This NFL Season Schedule section begins here.
		function getNFLscheduleDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/full_game_schedule.json',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayNFLscheduleData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayNFLscheduleData(scheduleData) {
			const results = scheduleData.fullgameschedule.gameentry.map((key, value) => renderNFLscheduleResult(key));
			$('#js-nfl-schedule-table').html(results);
		}
		function renderNFLscheduleResult(result) {
			return `
					<tr id="js-nfl-schedule-row">
						<td>${result.date}</td>
						<td>${result.awayTeam.Abbreviation} @ ${result.homeTeam.Abbreviation}</td>
						<td>${result.time}</td>
						<td>${result.location}</td>
					</tr>
			`
		}
		function handleNFLscheduleClicks() {
			$('#js-nfl-schedule-button').on('click', function (e) {
				const queryTarget = $('#js-nfl-schedule').find('js-nfl-schedule');;
				const query = queryTarget.val();
				getNFLscheduleDataFromApi();
				$('#js-nfl-schedule').removeClass('hidden');
				$('#js-render-nfl-schedule').removeClass('hidden');
				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');
				console.log("handleNFLscheduleClicks() ran");
			});
		}
	// This NFL Season Schedule section ends here.

	// This NFL Divisional Standings section begins here.
		function getNFLstandingsDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/division_team_standings.json?teamstats=W,L,T,PF,PA',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayNFLstandingsData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayNFLstandingsData(divisionData) {
			const results = divisionData.divisionteamstandings.division.map((key, value) => renderNFLstandingsResult(key));
			$('#js-nfl-standing').html(results);
		}
		function renderNFLstandingsResult(result) {
			return `
			<div id="js-render-nfl-standing">
				<div class="boxscore-container">
					<div class="scoreboard-container">
					<p class="sports-team-top">${result['@name']}</p><br>
					<table class="sports-game-table">
						<tr>
							<th>Team</th>
							<th>W</th>
							<th>L</th>
							<th>T</th>
							<th>GP</th>
							<th>PF</th>
							<th>PA</th>
						</tr>
						<tr>
							<td>${result.teamentry[0].team["City"]} ${result.teamentry[0].team["Name"]}</td>
							<td>${result.teamentry[0].stats.Wins["#text"]}</td>
							<td>${result.teamentry[0].stats.Losses["#text"]}</td>
							<td>${result.teamentry[0].stats.Ties["#text"]}</td>
							<td>${result.teamentry[0].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[0].stats.PointsFor["#text"]}</td>
							<td>${result.teamentry[0].stats.PointsAgainst["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[1].team["City"]} ${result.teamentry[1].team["Name"]}</td>
							<td>${result.teamentry[1].stats.Wins["#text"]}</td>
							<td>${result.teamentry[1].stats.Losses["#text"]}</td>
							<td>${result.teamentry[1].stats.Ties["#text"]}</td>
							<td>${result.teamentry[1].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[1].stats.PointsFor["#text"]}</td>
							<td>${result.teamentry[1].stats.PointsAgainst["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[2].team["City"]} ${result.teamentry[2].team["Name"]}</td>
							<td>${result.teamentry[2].stats.Wins["#text"]}</td>
							<td>${result.teamentry[2].stats.Losses["#text"]}</td>
							<td>${result.teamentry[2].stats.Ties["#text"]}</td>
							<td>${result.teamentry[2].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[2].stats.PointsFor["#text"]}</td>
							<td>${result.teamentry[2].stats.PointsAgainst["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[3].team["City"]} ${result.teamentry[3].team["Name"]}</td>
							<td>${result.teamentry[3].stats.Wins["#text"]}</td>
							<td>${result.teamentry[3].stats.Losses["#text"]}</td>
							<td>${result.teamentry[3].stats.Ties["#text"]}</td>
							<td>${result.teamentry[3].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[3].stats.PointsFor["#text"]}</td>
							<td>${result.teamentry[3].stats.PointsAgainst["#text"]}</td>
						</tr>
					</table>
				</div>
			</div>
			<footer></footer>
			`
		}
		function handleNFLstandingsClicks() {
			$('#js-nfl-standing-button').on('click', function (e) {
				const queryTarget = $('#js-nfl-standing').find('js-nfl-standing');;
				const query = queryTarget.val();
				getNFLstandingsDataFromApi();
				$('#js-nfl-standing').removeClass('hidden');
				$('#js-render-nfl-standing').removeClass('hidden');
				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');
				console.log("handleNFLstandingClicks() ran");
			});
		}
	// This NFL Divisional Standings section ends here.
// This NFL section start ends here.



// This MLB section start begins here.
	// This MLB Game Scoreboards section begins here.
		function getMLBscoreboardDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/scoreboard.json?fordate=20161002',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayMLBscoreboardData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayMLBscoreboardData(scoreboardData) {
			const results = scoreboardData.scoreboard.gameScore.map((key, value) => renderMLBscoreboardResult(key));
			$('#js-mlb-scorecard').html(results);
		}
		function renderMLBscoreboardResult(result) {
			return `
	    		<div id="js-render-mlb-scorecard">
		    		<div class="boxscore-container">
						<div class="scoreboard-container">
							<!-- Below is scoreboard of the earliest game on a specific date -->
							<p class="game-location">Date & Time: ${result.game.date} - ${result.game.time}</p><br>
							<table class="sports-game-table">
								<tr>
									<th>Matchup</th>
									<th>1</th>
									<th>2</th>
									<th>3</th>
									<th>4</th>
									<th>5</th>
									<th>6</th>
									<th>7</th>
									<th>8</th>
									<th>9</th>
									<th>T</th>
								</tr>
								<tr>
									<td>${result.game.awayTeam.City} ${result.game.awayTeam.Name}</td>
									<td>${result.inningSummary.inning[0].awayScore}</td>
									<td>${result.inningSummary.inning[1].awayScore}</td>
									<td>${result.inningSummary.inning[2].awayScore}</td>
									<td>${result.inningSummary.inning[3].awayScore}</td>
									<td>${result.inningSummary.inning[4].awayScore}</td>
									<td>${result.inningSummary.inning[5].awayScore}</td>
									<td>${result.inningSummary.inning[6].awayScore}</td>
									<td>${result.inningSummary.inning[7].awayScore}</td>
									<td>${result.inningSummary.inning[8].awayScore}</td>
									<td>${result.awayScore}</td>
								</tr>
								<tr>
									<td>${result.game.homeTeam.City} ${result.game.homeTeam.Name}</td>
									<td>${result.inningSummary.inning[0].homeScore}</td>
									<td>${result.inningSummary.inning[1].homeScore}</td>
									<td>${result.inningSummary.inning[2].homeScore}</td>
									<td>${result.inningSummary.inning[3].homeScore}</td>
									<td>${result.inningSummary.inning[4].homeScore}</td>
									<td>${result.inningSummary.inning[5].homeScore}</td>
									<td>${result.inningSummary.inning[6].homeScore}</td>
									<td>${result.inningSummary.inning[7].homeScore}</td>
									<td>${result.inningSummary.inning[8].homeScore}</td>
									<td>${result.homeScore}</td>
								</tr>
							</table>
							<p class="game-location">Location: ${result.game.location}, ${result.game.homeTeam.City}</p><br>
						</div>
					</div>
				</div>
			`
		}
		function handleMLBscoreboardClicks() {
			$('#js-mlb-scorecard-button').on('click', function (e) {
				const queryTarget = $('#js-mlb-scorecard').find('js-mlb-scorecard');;
				const query = queryTarget.val();
				getMLBscoreboardDataFromApi();
				$('#js-mlb-scorecard').removeClass('hidden');
				$('#js-render-mlb-scorecard').removeClass('hidden');
				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');
				console.log("handleMLBscorecardClicks() ran");
			});
		};
	// This MLB Game Scoreboards section ends here.

	// This MLB Season Schedule section begins here.
		function getMLBscheduleDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-2017-regular/full_game_schedule.json',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayMLBscheduleData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayMLBscheduleData(scheduleData) {
			const results = scheduleData.fullgameschedule.gameentry.map((key, value) => renderMLBscheduleResult(key));
			$('#js-mlb-schedule-table').html(results);
		}
		function renderMLBscheduleResult(result) {
			return `
				<tr id="js-mlb-schedule-row">
					<td>${result.date}</td>
					<td>${result.awayTeam.Abbreviation} @ ${result.homeTeam.Abbreviation}</td>
					<td>${result.time}</td>
					<td>${result.location}</td>
				</tr>
			`
		}
		function handleMLBscheduleClicks() {
			$('#js-mlb-schedule-button').on('click', function (e) {
				const queryTarget = $('#js-mlb-schedule').find('js-mlb-schedule');;
				const query = queryTarget.val();
				getMLBscheduleDataFromApi();	
				$('#js-mlb-schedule').removeClass('hidden');
				$('#js-render-mlb-schedule').removeClass('hidden');
				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');
				console.log("handleMLBscheduleClicks() ran");

			});
		};
	// This MLB Season Schedule section ends here.

	// This MLB Divisional Standings section begins here.
		function getMLBstandingsDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/pull/mlb/2016-regular/division_team_standings.json?teamstats=W,L,RF,RA',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayMLBstandingsData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayMLBstandingsData(divisionData) {
			const results = divisionData.divisionteamstandings.division.map((key, value) => renderMLBstandingsResult(key));
			$('#js-mlb-standing').html(results);
		}
		function renderMLBstandingsResult(result) {
			return `
			<div id="js-render-mlb-standing">
				<div class="boxscore-container">
					<div class="scoreboard-container">
					<p class="sports-team-top">${result['@name']}</p><br>
					<table class="sports-game-table">
						<tr>
							<th>Team</th>
							<th>W</th>
							<th>L</th>
							<th>GP</th>
							<th>RF</th>
							<th>RA</th>
						</tr>
						<tr>
							<td>${result.teamentry[0].team["City"]} ${result.teamentry[0].team["Name"]}</td>
							<td>${result.teamentry[0].stats.Wins["#text"]}</td>
							<td>${result.teamentry[0].stats.Losses["#text"]}</td>
							<td>${result.teamentry[0].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[0].stats.RunsFor["#text"]}</td>
							<td>${result.teamentry[0].stats.RunsAgainst["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[1].team["City"]} ${result.teamentry[1].team["Name"]}</td>
							<td>${result.teamentry[1].stats.Wins["#text"]}</td>
							<td>${result.teamentry[1].stats.Losses["#text"]}</td>
							<td>${result.teamentry[1].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[1].stats.RunsFor["#text"]}</td>
							<td>${result.teamentry[1].stats.RunsAgainst["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[2].team["City"]} ${result.teamentry[2].team["Name"]}</td>
							<td>${result.teamentry[2].stats.Wins["#text"]}</td>
							<td>${result.teamentry[2].stats.Losses["#text"]}</td>
							<td>${result.teamentry[2].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[2].stats.RunsFor["#text"]}</td>
							<td>${result.teamentry[2].stats.RunsAgainst["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[3].team["City"]} ${result.teamentry[3].team["Name"]}</td>
							<td>${result.teamentry[3].stats.Wins["#text"]}</td>
							<td>${result.teamentry[3].stats.Losses["#text"]}</td>
							<td>${result.teamentry[3].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[3].stats.RunsFor["#text"]}</td>
							<td>${result.teamentry[3].stats.RunsAgainst["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[4].team["City"]} ${result.teamentry[4].team["Name"]}</td>
							<td>${result.teamentry[4].stats.Wins["#text"]}</td>
							<td>${result.teamentry[4].stats.Losses["#text"]}</td>
							<td>${result.teamentry[4].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[4].stats.RunsFor["#text"]}</td>
							<td>${result.teamentry[4].stats.RunsAgainst["#text"]}</td>
						</tr>
					</table>
				</div>
			</div>
			<footer></footer>
			`
		}
		function handleMLBstandingsClicks() {
			$('#js-mlb-standing-button').on('click', function (e) {
				const queryTarget = $('#js-mlb-standing').find('js-mlb-standing');;
				const query = queryTarget.val();
				getMLBstandingsDataFromApi()
				$('#js-mlb-standing').removeClass('hidden');
				$('#js-render-mlb-standing').removeClass('hidden');
				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');
				console.log("handleMLBstandingClicks() ran");
			});
		};
	// This MLB Divisional Standings section ends here.
// This MLB section start ends here.



// This NBA section start begins here.
	// This NBA Game Scoreboards section begins here.
		function getNBAscoreboardDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/scoreboard.json?fordate=20170412&',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayNBAscoreboardData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayNBAscoreboardData(scoreboardData) {
			const results = scoreboardData.scoreboard.gameScore.map((key, value) => renderNBAscoreboardResult(key));
			$('#js-nba-scorecard').html(results);
		}
		function renderNBAscoreboardResult(result) {
			return `
	    		<div id="js-render-nba-scorecard">
		    		<div class="boxscore-container">
						<div class="scoreboard-container">
							<!-- Below is scoreboard of the earliest game on a specific date -->
							<p class="game-location">Date & Time: ${result.game.date} - ${result.game.time}</p><br>
							<table class="sports-game-table">
								<tr>
									<th>Matchup</th>
									<th>1st</th>
									<th>2nd</th>
									<th>3rd</th>
									<th>4th</th>
									<th>Total</th>
								</tr>
								<tr>
									<td>${result.game.awayTeam.City} ${result.game.awayTeam.Name}</td>
									<td>${result.quarterSummary.quarter[0].awayScore}</td>
									<td>${result.quarterSummary.quarter[1].awayScore}</td>
									<td>${result.quarterSummary.quarter[2].awayScore}</td>
									<td>${result.quarterSummary.quarter[3].awayScore}</td>
									<td>${result.awayScore}</td>
								</tr>
								<tr>
									<td>${result.game.homeTeam.City} ${result.game.homeTeam.Name}</td>
									<td>${result.quarterSummary.quarter[0].homeScore}</td>
									<td>${result.quarterSummary.quarter[1].homeScore}</td>
									<td>${result.quarterSummary.quarter[2].homeScore}</td>
									<td>${result.quarterSummary.quarter[3].homeScore}</td>
									<td>${result.homeScore}</td>
								</tr>
							</table>
							<p class="game-location">Location: ${result.game.location}, ${result.game.homeTeam.City}</p><br>
						</div>
					</div>
				</div>
			`
		}
		function handleNBAscoreboardClicks() {
			$('#js-nba-scorecard-button').on('click', function (e) {
					const queryTarget = $('#js-nba-scorecard').find('js-nba-scorecard');;
					const query = queryTarget.val();
					getNBAscoreboardDataFromApi();
				$('#js-nba-scorecard').removeClass('hidden');
				$('#js-render-nba-scorecard').removeClass('hidden');

				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');

				console.log("handleNBAscorecardClicks() ran");
			});
		};
	// This NBA Game Scoreboards section ends here.

	// This NBA Season Schedule section begins here.
		function getNBAscheduleDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/full_game_schedule.json?',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayNBAscheduleData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayNBAscheduleData(scheduleData) {
			const results = scheduleData.fullgameschedule.gameentry.map((key, value) => renderNBAscheduleResult(key));
			$('#js-nba-schedule-table').html(results);
		}
		function renderNBAscheduleResult(result) {
			return `
				<tr id="js-nba-schedule-row">
					<td>${result.date}</td>
					<td>${result.awayTeam.Abbreviation} @ ${result.homeTeam.Abbreviation}</td>
					<td>${result.time}</td>
					<td>${result.location}</td>
				</tr>
			`
		}
		function handleNBAscheduleClicks() {
			$('#js-nba-schedule-button').on('click', function (e) {
				const queryTarget = $('#js-nba-schedule').find('js-nba-schedule');;
				const query = queryTarget.val();
				getNBAscheduleDataFromApi();
				$('#js-nba-schedule').removeClass('hidden');
				$('#js-render-nba-schedule').removeClass('hidden');

				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');

				console.log("handleNBAscheduleClicks() ran");
			});
		};
	// This NBA Season Schedule section ends here.

	// This NBA Conference Standings section begins here.
		function getNBAstandingsDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/conference_team_standings.json?',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayNBAstandingsData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayNBAstandingsData(conferenceData) {
			const results = conferenceData.conferenceteamstandings.conference.map((key, value) => renderNBAstandingsResult(key));
			$('#js-nba-standing').html(results);
		}
		function renderNBAstandingsResult(result) {
			return `
			<div id="js-render-nba-standing">
				<div class="boxscore-container">
					<div class="scoreboard-container">
					<p class="sports-team-top">${result['@name']}</p><br>
					<table class="sports-game-table">
						<tr>
							<th>Team</th>
							<th>W</th>
							<th>L</th>
							<th>PCT</th>
							<th>PPG</th>
						</tr>
						<tr>
							<td>${result.teamentry[0].team["City"]} ${result.teamentry[0].team["Name"]}</td>
							<td>${result.teamentry[0].stats.Wins["#text"]}</td>
							<td>${result.teamentry[0].stats.Losses["#text"]}</td>
							<td>${result.teamentry[0].stats.WinPct["#text"]}</td>
							<td>${result.teamentry[0].stats.PtsPerGame["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[1].team["City"]} ${result.teamentry[1].team["Name"]}</td>
							<td>${result.teamentry[1].stats.Wins["#text"]}</td>
							<td>${result.teamentry[1].stats.Losses["#text"]}</td>
							<td>${result.teamentry[1].stats.WinPct["#text"]}</td>
							<td>${result.teamentry[1].stats.PtsPerGame["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[2].team["City"]} ${result.teamentry[2].team["Name"]}</td>
							<td>${result.teamentry[2].stats.Wins["#text"]}</td>
							<td>${result.teamentry[2].stats.Losses["#text"]}</td>
							<td>${result.teamentry[2].stats.WinPct["#text"]}</td>
							<td>${result.teamentry[2].stats.PtsPerGame["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[3].team["City"]} ${result.teamentry[3].team["Name"]}</td>
							<td>${result.teamentry[3].stats.Wins["#text"]}</td>
							<td>${result.teamentry[3].stats.Losses["#text"]}</td>
							<td>${result.teamentry[3].stats.WinPct["#text"]}</td>
							<td>${result.teamentry[3].stats.PtsPerGame["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[4].team["City"]} ${result.teamentry[4].team["Name"]}</td>
							<td>${result.teamentry[4].stats.Wins["#text"]}</td>
							<td>${result.teamentry[4].stats.Losses["#text"]}</td>
							<td>${result.teamentry[4].stats.WinPct["#text"]}</td>
							<td>${result.teamentry[4].stats.PtsPerGame["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[5].team["City"]} ${result.teamentry[5].team["Name"]}</td>
							<td>${result.teamentry[5].stats.Wins["#text"]}</td>
							<td>${result.teamentry[5].stats.Losses["#text"]}</td>
							<td>${result.teamentry[5].stats.WinPct["#text"]}</td>
							<td>${result.teamentry[5].stats.PtsPerGame["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[6].team["City"]} ${result.teamentry[6].team["Name"]}</td>
							<td>${result.teamentry[6].stats.Wins["#text"]}</td>
							<td>${result.teamentry[6].stats.Losses["#text"]}</td>
							<td>${result.teamentry[6].stats.WinPct["#text"]}</td>
							<td>${result.teamentry[6].stats.PtsPerGame["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[7].team["City"]} ${result.teamentry[7].team["Name"]}</td>
							<td>${result.teamentry[7].stats.Wins["#text"]}</td>
							<td>${result.teamentry[7].stats.Losses["#text"]}</td>
							<td>${result.teamentry[7].stats.WinPct["#text"]}</td>
							<td>${result.teamentry[7].stats.PtsPerGame["#text"]}</td>
						</tr>
						<tr>
							<td><i>${result.teamentry[8].team["City"]} ${result.teamentry[8].team["Name"]}</i></td>
							<td><i>${result.teamentry[8].stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[8].stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[8].stats.WinPct["#text"]}</i></td>
							<td><i>${result.teamentry[8].stats.PtsPerGame["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[9].team["City"]} ${result.teamentry[8].team["Name"]}</i></td>
							<td><i>${result.teamentry[9].stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[9].stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[9].stats.WinPct["#text"]}</i></td>
							<td><i>${result.teamentry[9].stats.PtsPerGame["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[10].team["City"]} ${result.teamentry[10].team["Name"]}</i></td>
							<td><i>${result.teamentry[10].stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[10].stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[10].stats.WinPct["#text"]}</i></td>
							<td><i>${result.teamentry[10].stats.PtsPerGame["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[11].team["City"]} ${result.teamentry[11].team["Name"]}</i></td>
							<td><i>${result.teamentry[11].stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[11].stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[11].stats.WinPct["#text"]}</i></td>
							<td><i>${result.teamentry[11].stats.PtsPerGame["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[12].team["City"]} ${result.teamentry[12].team["Name"]}</i></td>
							<td><i>${result.teamentry[12].stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[12].stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[12].stats.WinPct["#text"]}</i></td>
							<td><i>${result.teamentry[12].stats.PtsPerGame["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[13].team["City"]} ${result.teamentry[13].team["Name"]}</i></td>
							<td><i>${result.teamentry[13].stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[13].stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[13].stats.WinPct["#text"]}</i></td>
							<td><i>${result.teamentry[13].stats.PtsPerGame["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[14].team["City"]} ${result.teamentry[14].team["Name"]}</i></td>
							<td><i>${result.teamentry[14].stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[14].stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[14].stats.WinPct["#text"]}</i></td>
							<td><i>${result.teamentry[14].stats.PtsPerGame["#text"]}</i></td>
						</tr>
					</table>
				</div>
			</div>
			<footer></footer>
			`
		}
		function handleNBAstandingsClicks() {
			$('#js-nba-standing-button').on('click', function (e) {
				const queryTarget = $('#js-nba-standing').find('js-nba-standing');;
				const query = queryTarget.val();
				getNBAstandingsDataFromApi();
				$('#js-nba-standing').removeClass('hidden');
				$('#js-render-nba-standing').removeClass('hidden');

				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');

				console.log("handleNBAstandingClicks() ran");
			});
		};
	// This NBA Conference Standings section ends here.
// This NBA section start ends here.



// This NHL section start begins here.
	// This NHL Game Scoreboards section begins here.
		function getNHLscoreboardDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/pull/nhl/2016-2017-regular/scoreboard.json?fordate=20170409',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayNHLscoreboardData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayNHLscoreboardData(scoreboardData) {
			const results = scoreboardData.scoreboard.gameScore.map((key, value) => renderNHLscoreboardResult(key));
			$('#js-nhl-scorecard').html(results);
		}
		function renderNHLscoreboardResult(result) {
			return `
	    		<div id="js-render-nhl-scorecard">
		    		<div class="boxscore-container">
						<div class="scoreboard-container">
							<!-- Below is scoreboard of the earliest game on a specific date -->
							<p class="game-location">Date & Time: ${result.game.date} - ${result.game.time}</p><br>
							<table class="sports-game-table">
								<tr>
									<th>Matchup</th>
									<th>1st</th>
									<th>2nd</th>
									<th>3rd</th>
									<th>Total</th>
								</tr>
								<tr>
									<td>${result.game.awayTeam.City} ${result.game.awayTeam.Name}</td>
									<td>${result.periodSummary.period[0].awayScore}</td>
									<td>${result.periodSummary.period[1].awayScore}</td>
									<td>${result.periodSummary.period[2].awayScore}</td>
									<td>${result.awayScore}</td>
								</tr>
								<tr>
									<td>${result.game.homeTeam.City} ${result.game.homeTeam.Name}</td>
									<td>${result.periodSummary.period[0].homeScore}</td>
									<td>${result.periodSummary.period[1].homeScore}</td>
									<td>${result.periodSummary.period[2].homeScore}</td>
									<td>${result.homeScore}</td>
								</tr>
							</table>
							<p class="game-location">Location: ${result.game.location}, ${result.game.homeTeam.City}</p><br>
						</div>
					</div>
				</div>
			`
		}
		function handleNHLscoreboardClicks() {
			$('#js-nhl-scorecard-button').on('click', function (e) {
				const queryTarget = $('#js-nhl-scorecard').find('js-nhl-scorecard');;
				const query = queryTarget.val();
				getNHLscoreboardDataFromApi();
				$('#js-nhl-scorecard').removeClass('hidden');
				$('#js-render-nhl-scorecard').removeClass('hidden');
				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');
				console.log("handleNHLscorecardClicks() ran");
			});
		};
	// This NHL Game Scoreboards section ends here.

	// This NHL Season Schedule section begins here.
		function getNHLscheduleDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/pull/nhl/2016-2017-regular/full_game_schedule.json',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayNHLscheduleData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayNHLscheduleData(scheduleData) {
			const results = scheduleData.fullgameschedule.gameentry.map((key, value) => renderNHLscheduleResult(key));
			$('#js-nhl-schedule-table').html(results);
		}
		function renderNHLscheduleResult(result) {
			return `
				<tr id="js-nhl-schedule-row">
					<td>${result.date}</td>
					<td>${result.awayTeam.Abbreviation} @ ${result.homeTeam.Abbreviation}</td>
					<td>${result.time}</td>
					<td>${result.location}</td>
				</tr>
			`
		}
		function handleNHLscheduleClicks() {
			$('#js-nhl-schedule-button').on('click', function (e) {
				const queryTarget = $('#js-nhl-schedule').find('js-nhl-schedule');;
				const query = queryTarget.val();
				getNHLscheduleDataFromApi();
				$('#js-nhl-schedule').removeClass('hidden');
				$('#js-render-nhl-schedule').removeClass('hidden');
				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-standing').addClass('hidden');
				$('#js-render-nhl-standing').addClass('hidden');
				console.log("handleNHLscheduleClicks() ran");
			});
		};
	// This NHL Season Schedule section ends here.

	// This NHL Conference Standings section begins here.
		function getNHLstandingsDataFromApi() {
			$.ajax({
				type: 'GET',
				url: 'https://api.mysportsfeeds.com/v1.1/pull/nhl/2016-2017-regular/conference_team_standings.json?teamstats=W,L,GF,GA,Pts',
				headers: {
					"Authorization": "Basic " + btoa("jyamashiro:TryThis1")
				},
				dataType: "json",
				async: false,
				crossDomain: true,
				data: {},
				json: "callback",
				contentType: "application/json; charset=utf-8",
				success: function (response) {
					console.log(response);
					displayNHLstandingsData(response);
				},
				error: function (xhr, status) {
					alert(xhr.responseText);
				}
			});
		}
		function displayNHLstandingsData(conferenceData) {
			const results = conferenceData.conferenceteamstandings.conference.map((key, value) => renderNHLstandingsResult(key));
			$('#js-nhl-standing').html(results);
		}
		function renderNHLstandingsResult(result) {
			return `
			<div id="js-render-nhl-standing">
				<div class="boxscore-container">
					<div class="scoreboard-container">
					<p class="sports-team-top">${result['@name']}</p><br>
					<table class="sports-game-table">
						<tr>
							<th>Team</th>
							<th>W</th>
							<th>L</th>
							<th>GP</th>
							<th>GF</th>
							<th>GA</th>
							<th>PTS</th>
						</tr>
						<tr>
							<td>${result.teamentry[0].team["City"]} ${result.teamentry[0].team["Name"]}</td>
							<td>${result.teamentry[0].stats.stats.Wins["#text"]}</td>
							<td>${result.teamentry[0].stats.stats.Losses["#text"]}</td>
							<td>${result.teamentry[0].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[0].stats.stats.GoalsFor["#text"]}</td>
							<td>${result.teamentry[0].stats.stats.GoalsAgainst["#text"]}</td>
							<td>${result.teamentry[0].stats.stats.Points["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[1].team["City"]} ${result.teamentry[1].team["Name"]}</td>
							<td>${result.teamentry[1].stats.stats.Wins["#text"]}</td>
							<td>${result.teamentry[1].stats.stats.Losses["#text"]}</td>
							<td>${result.teamentry[1].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[1].stats.stats.GoalsFor["#text"]}</td>
							<td>${result.teamentry[1].stats.stats.GoalsAgainst["#text"]}</td>
							<td>${result.teamentry[1].stats.stats.Points["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[2].team["City"]} ${result.teamentry[2].team["Name"]}</td>
							<td>${result.teamentry[2].stats.stats.Wins["#text"]}</td>
							<td>${result.teamentry[2].stats.stats.Losses["#text"]}</td>
							<td>${result.teamentry[2].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[2].stats.stats.GoalsFor["#text"]}</td>
							<td>${result.teamentry[2].stats.stats.GoalsAgainst["#text"]}</td>
							<td>${result.teamentry[2].stats.stats.Points["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[3].team["City"]} ${result.teamentry[3].team["Name"]}</td>
							<td>${result.teamentry[3].stats.stats.Wins["#text"]}</td>
							<td>${result.teamentry[3].stats.stats.Losses["#text"]}</td>
							<td>${result.teamentry[3].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[3].stats.stats.GoalsFor["#text"]}</td>
							<td>${result.teamentry[3].stats.stats.GoalsAgainst["#text"]}</td>
							<td>${result.teamentry[3].stats.stats.Points["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[4].team["City"]} ${result.teamentry[4].team["Name"]}</td>
							<td>${result.teamentry[4].stats.stats.Wins["#text"]}</td>
							<td>${result.teamentry[4].stats.stats.Losses["#text"]}</td>
							<td>${result.teamentry[4].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[4].stats.stats.GoalsFor["#text"]}</td>
							<td>${result.teamentry[4].stats.stats.GoalsAgainst["#text"]}</td>
							<td>${result.teamentry[4].stats.stats.Points["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[5].team["City"]} ${result.teamentry[5].team["Name"]}</td>
							<td>${result.teamentry[5].stats.stats.Wins["#text"]}</td>
							<td>${result.teamentry[5].stats.stats.Losses["#text"]}</td>
							<td>${result.teamentry[5].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[5].stats.stats.GoalsFor["#text"]}</td>
							<td>${result.teamentry[5].stats.stats.GoalsAgainst["#text"]}</td>
							<td>${result.teamentry[5].stats.stats.Points["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[6].team["City"]} ${result.teamentry[6].team["Name"]}</td>
							<td>${result.teamentry[6].stats.stats.Wins["#text"]}</td>
							<td>${result.teamentry[6].stats.stats.Losses["#text"]}</td>
							<td>${result.teamentry[6].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[6].stats.stats.GoalsFor["#text"]}</td>
							<td>${result.teamentry[6].stats.stats.GoalsAgainst["#text"]}</td>
							<td>${result.teamentry[6].stats.stats.Points["#text"]}</td>
						</tr>
						<tr>
							<td>${result.teamentry[7].team["City"]} ${result.teamentry[7].team["Name"]}</td>
							<td>${result.teamentry[7].stats.stats.Wins["#text"]}</td>
							<td>${result.teamentry[7].stats.stats.Losses["#text"]}</td>
							<td>${result.teamentry[7].stats.GamesPlayed["#text"]}</td>
							<td>${result.teamentry[7].stats.stats.GoalsFor["#text"]}</td>
							<td>${result.teamentry[7].stats.stats.GoalsAgainst["#text"]}</td>
							<td>${result.teamentry[7].stats.stats.Points["#text"]}</td>
						</tr>
						<tr>
							<td><i>${result.teamentry[8].team["City"]} ${result.teamentry[8].team["Name"]}</i></td>
							<td><i>${result.teamentry[8].stats.stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[8].stats.stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[8].stats.GamesPlayed["#text"]}</i></td>
							<td><i>${result.teamentry[8].stats.stats.GoalsFor["#text"]}</i></td>
							<td><i>${result.teamentry[8].stats.stats.GoalsAgainst["#text"]}</i></td>
							<td><i>${result.teamentry[8].stats.stats.Points["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[9].team["City"]} ${result.teamentry[9].team["Name"]}</i></td>
							<td><i>${result.teamentry[9].stats.stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[9].stats.stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[9].stats.GamesPlayed["#text"]}</i></td>
							<td><i>${result.teamentry[9].stats.stats.GoalsFor["#text"]}</i></td>
							<td><i>${result.teamentry[9].stats.stats.GoalsAgainst["#text"]}</i></td>
							<td><i>${result.teamentry[9].stats.stats.Points["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[10].team["City"]} ${result.teamentry[10].team["Name"]}</i></td>
							<td><i>${result.teamentry[10].stats.stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[10].stats.stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[10].stats.GamesPlayed["#text"]}</i></td>
							<td><i>${result.teamentry[10].stats.stats.GoalsFor["#text"]}</i></td>
							<td><i>${result.teamentry[10].stats.stats.GoalsAgainst["#text"]}</i></td>
							<td><i>${result.teamentry[10].stats.stats.Points["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[11].team["City"]} ${result.teamentry[11].team["Name"]}</i></td>
							<td><i>${result.teamentry[11].stats.stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[11].stats.stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[11].stats.GamesPlayed["#text"]}</i></td>
							<td><i>${result.teamentry[11].stats.stats.GoalsFor["#text"]}</i></td>
							<td><i>${result.teamentry[11].stats.stats.GoalsAgainst["#text"]}</i></td>
							<td><i>${result.teamentry[11].stats.stats.Points["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[12].team["City"]} ${result.teamentry[12].team["Name"]}</i></td>
							<td><i>${result.teamentry[12].stats.stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[12].stats.stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[12].stats.GamesPlayed["#text"]}</i></td>
							<td><i>${result.teamentry[12].stats.stats.GoalsFor["#text"]}</i></td>
							<td><i>${result.teamentry[12].stats.stats.GoalsAgainst["#text"]}</i></td>
							<td><i>${result.teamentry[12].stats.stats.Points["#text"]}</i></td>
						</tr>
						<tr>
							<td><i>${result.teamentry[13].team["City"]} ${result.teamentry[13].team["Name"]}</i></td>
							<td><i>${result.teamentry[13].stats.stats.Wins["#text"]}</i></td>
							<td><i>${result.teamentry[13].stats.stats.Losses["#text"]}</i></td>
							<td><i>${result.teamentry[13].stats.GamesPlayed["#text"]}</i></td>
							<td><i>${result.teamentry[13].stats.stats.GoalsFor["#text"]}</i></td>
							<td><i>${result.teamentry[13].stats.stats.GoalsAgainst["#text"]}</i></td>
							<td><i>${result.teamentry[13].stats.stats.Points["#text"]}</i></td>
						</tr>
					</table>
				</div>
			</div>
			<footer></footer>
			`
		}
		function handleNHLstandingsClicks() {
			$('#js-nhl-standing-button').on('click', function (e) {
				const queryTarget = $('#js-nhl-standing').find('js-nhl-standing');;
				const query = queryTarget.val();
				getNHLstandingsDataFromApi()
				$('#js-nhl-standing').removeClass('hidden');
				$('#js-render-nhl-standing').removeClass('hidden');
				//All the elements listed below need to be hidden to render above.
				$('#js-home-page').addClass('hidden');
				$('#js-nfl-scorecard').addClass('hidden');
				$('#js-render-nfl-scorecard').addClass('hidden');
				$('#js-nfl-schedule').addClass('hidden');
				$('#js-render-nfl-schedule').addClass('hidden');
				$('#js-nfl-standing').addClass('hidden');
				$('#js-render-nfl-standing').addClass('hidden');
				$('#js-mlb-scorecard').addClass('hidden');
				$('#js-render-mlb-scorecard').addClass('hidden');
				$('#js-mlb-schedule').addClass('hidden');
				$('#js-render-mlb-schedule').addClass('hidden');
				$('#js-mlb-standing').addClass('hidden');
				$('#js-render-mlb-standing').addClass('hidden');
				$('#js-nba-scorecard').addClass('hidden');
				$('#js-render-nba-scorecard').addClass('hidden');
				$('#js-nba-schedule').addClass('hidden');
				$('#js-render-nba-schedule').addClass('hidden');
				$('#js-nba-standing').addClass('hidden');
				$('#js-render-nba-standing').addClass('hidden');
				$('#js-nhl-scorecard').addClass('hidden');
				$('#js-render-nhl-scorecard').addClass('hidden');
				$('#js-nhl-schedule').addClass('hidden');
				$('#js-render-nhl-schedule').addClass('hidden');
				console.log("handleNHLstandingClicks() ran");
			});
		};
	// This NHL Conference Standings section ends here.
// This NHL section start ends here.
