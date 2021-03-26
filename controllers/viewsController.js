
const Tour = require('../models/tourModel')
const catchAsync = require('../utils/catchAsync');


exports.getOverview = catchAsync(async (req,res)=>{
    const tours = await Tour.find()

    res.status(200).render('overview',{
      title: 'All Tours',
      tours
    }) 
  })

exports.getTour = (req,res)=>{
    res.status(200).render('tour',{
      title: 'The Forest Hiker',
        
    })
  }


  //get tour data from FeatureCollection
  //build a etmplated
  // render the template using tour data from step 1 