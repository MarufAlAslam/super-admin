$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('#next1').click(function(event){
      event.preventDefault()
      $('.step1').hide()
      $('.step2').show()
  })

  $('#next2').click(function(event){
    event.preventDefault()
    $('.step2').hide()
    $('.step3').show()
})

$('#next3').click(function(event){
    event.preventDefault()
    $('.step3').hide()
    $('.step4').show()
})

$('#next4').click(function(event){
    event.preventDefault()
    $('.step4').hide()
    $('.step5').show()
})

$('#card1').click(function(event){
    event.preventDefault()
    $('#card1 .card').addClass("activeCard1")
    $('#card2 .card').removeClass("activeCard2")
    $('#card3 .card').removeClass("activeCard3")
    $('#next3').attr("disabled",false)
})

$('#card2').click(function(event){
    event.preventDefault()
    $('#card1 .card').removeClass("activeCard1")
    $('#card2 .card').addClass("activeCard2")
    $('#card3 .card').removeClass("activeCard3")
    $('#next3').attr("disabled",false)
})

$('#card3').click(function(event){
    event.preventDefault()
    $('#card1 .card').removeClass("activeCard1")
    $('#card2 .card').removeClass("activeCard2")
    $('#card3 .card').addClass("activeCard3")
    $('#next3').attr("disabled",false)
})
var c = 0
$('.btn .fa-bars').click(function(){
  if(window.innerWidth<=768){
    if(c%2==0){
      $('.sidebar').css("opacity","1").css("z-index","999")
      $('.main-body .col-md-10').hide()
      c++
    }
    else{
      $('.sidebar').css("opacity","0").css("z-index","-1")
      $('.main-body .col-md-10').show()
      c++
    }
  }
  else{
    $('.sidebar').css("opacity","1").css("z-index","999")
    $('.main-body .col-md-10').show()
  }
})

// data= [{ name:"first",
//   data:[
//     {value:12, date:"12/14/2014"},
//     {value:32, date:"12/15/2014"},
//     {value:56, date:"12/17/2014"},
//     {value:45, date:"12/19/2014"}    
//     ]
//   }
// ]


// options={
//   height: 300,
// // width: 9,
// x:{
//   margin: 15, 
//   min: null, 
//   max:null
// },
// y:{
//   margin:0.2, 
//   min:null, 
//   max:null
// },
// goal: {
//   show:false, 
//   value:23, 
//   color: mainColor
// },
// tooltip: {
//   how:true, 
//   maxRadius: 3
// },
// lines: {
//   show: true, 
//   fill: false, 
//   curve:false, 
//   strokeColor: [mainColor, secondaryColor], 
//   strokeWidth: 4, 
//   fillOpacity: 0.4, 
//   fillColor:[mainColor, secondaryColor]
// },
// points:{
//   show: true, 
//   strokeWidth:3.5, 
//   strokeColor:[mainColor, secondaryColor]
// },
// labels:{
//   lineWidth: 0.3,
//   fontSize: 11,
//   x:{
//     number: 7, 
//     show:true, 
//     color:"#858585", 
//     grid:false },
//   y:{
//     number:4, 
//     show:true, 
//     color:"#858585", 
//     grid:true
//  }}
// };

// $("#basic").pista(data, options);


// var canvas = document.getElementsByTagName('canvas');
// canvas.width  = 500; 
// canvas.height = 630;


$(function() {
	$(".chartContainer").CanvasJSChart({
		// title: {
		// 	text: "Monthly Rainfall in Columbus - 1996"
		// },
		axisY: {
			// title: "Rainfall in mm",
			includeZero: false
		},
		axisX: {
			interval: 1
		},
		data: [
		{
			type: "line", //try changing to column, area
			toolTipContent: "{label}: {y} mm",
			dataPoints: [
				{ label: "10/03/20",  y: 5.28 },
				{ label: "11/03/20",  y: 3.83 },
				{ label: "12/03/20",y: 6.55 },
				{ label: "13/03/20",y: 4.81 },
				{ label: "14/03/20",  y: 2.37 },
				{ label: "15/03/20", y: 2.33 },
				{ label: "16/03/20", y: 3.06 },
				{ label: "17/03/20",  y: 2.94 },
				{ label: "18/03/20",  y: 5.41 },
				{ label: "19/03/20",  y: 2.17 },
				{ label: "20/03/20",  y: 2.17 },
				{ label: "21/03/20",  y: 2.80 }
			]
		}
		]
	});
});




// barchart
const myData = [
  { key: '', value: 100 },
  { key: '', value: 95 },
  { key: '', value: 96 },
  { key: '', value: 44 },
  { key: '', value: 32 },
  { key: '', value: 130 },
  { key: '', value: 91 }
]

$('#example').simpleBarGraph({
  data: myData,
  barsColor: '#17335B',
  height:'250px',
  rowsCount: 7,

});

updateDonutChart('demo', 22,true);

