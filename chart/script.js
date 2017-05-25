// Code goes here

angular.module('a',['ionic','nvd3','googlechart','highcharts-ng'])
    .controller('b',function($scope,$http) {
        $http.get('performance.json').success(function(data) {
            $scope.performance  = data;
        }).error(function(error) {
                console.log(error);
            });

        $scope.getGradeClass = function(grade) {
            //console.log(grade);
            // console.log(grade.charAt(0));
            var gradeClass = 'A-grade';
            if(grade.charAt(0) == 'A') {
                gradeClass = 'A-grade'
            } else if(grade.charAt(0) == 'B') {
                gradeClass = 'B-grade'
            } else if(grade.charAt(0) == 'C') {
                gradeClass = 'C-grade'
            } else {
                gradeClass = 'O-grade'
            }

            return gradeClass;
        };

        /* Chart options */
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
               // height:450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){ return d.label; },
                y: function(d){ return d.value; },
                showValues: false,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

      


        ;

        $scope.myChartOptions =  {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke : true,

            //String - The colour of each segment stroke
            segmentStrokeColor : "#0",

            //Number - The width of each segment stroke
            segmentStrokeWidth : 24,

            //The percentage of the chart that we cut out of the middle.
            percentageInnerCutout : 50,

            //Boolean - Whether we should animate the chart
            animation : true,

            //Number - Amount of animation steps
            animationSteps : 100,

            //String - Animation easing effect
            animationEasing : "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate : true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale : false,

            //Function - Will fire on animation completion.
            onAnimationComplete : null
        };

        


        $scope.addPoints = function () {
            var seriesArray = $scope.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
        };

        $scope.addSeries = function () {
            var rnd = [];
            for (var i = 0; i < 10; i++) {
                rnd.push(Math.floor(Math.random() * 20) + 1)
            }
            $scope.chartConfig.series.push({
                data: rnd
            })
        };

        $scope.removeRandomSeries = function () {
            var seriesArray = $scope.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1)
        };

        $scope.toggleLoading = function () {
            this.chartConfig.loading = !this.chartConfig.loading
        };

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'line',
                    zoomType: 'x'
                }
            },
            series: [{
                data: 
					[
						472,208,19466,112,348,25,39,142,18,190,102,21,1715,39,18,128,70,1194,0,15,31,144,8833,31,447,2058,35,134,250,81,2945,78,0,0,0,
						876,799,1315,948,31,85,91,6610,367,70,0,0,361,79,23009,0,0,0,0,0,0
					]
            }],
            title: {
                text: 'Car Vibrations Chart'
            },
            xAxis: {currentMin: 1, currentMax: 55, minRange: 2},
            loading: false
        }
    });