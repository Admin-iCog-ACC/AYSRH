const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true },
   
    
    email: {
        type: String,
        required: [true, "Must provide a Name"],
      },
    
      phoneNumber: {
          type: String,
          required: [true, "must provide a valid PhoneNumber"],
        },
   
   
      founders:{
          type: Array,
          
           age: {
              type: String,
              required: [true],
            },
            gender:{
  
            type: String,
              required: [true],
          },
          
  
      },
   
  
      //Product Information
  
      describePrimaryProductService: {
        type: String,
        required: [true, "must provide Address"],
        
      },
    
     
      uniqueProductService: {
        type: String,
        required: [true],
  
      },
    
      healthRelated : {
        type: String,
        required: [true],
      },
      
      yesMoreDescription :{
        type: String,
      },
  
  
      targetMarketCustomer: {
        type: String,
       
      },
  
      competitors:{
        type: String,
      },
  
      productLargeScale:{
        type: String,
      } ,
    
      startupFinance: {
        type: String,
        required: [true],
      },
    
    productAmountRevenue:{
    
        type: String,
        required: [true],
      },
  
  
      //Product Stage
  
      statusOfProduct : {
        type: String,  
        required: [true],
      },
  
      productRegisteredBusiness:{
        type: String,  
        required: [true],
      },
  
        
  
        establishmentDate:{
          type: String,  
          required: [true],
        },
  
        websiteForStartup :{
  
          type: String,  
          required: false,
          
        },
  
        applicationForStartup :{
  
          type: String,  
          
          required: false,
        },
  
        onlineMarketing:{
      
            type: String,  
            required: false,
              
        },
  
        socialMedia:{
  
          type: String, 
          required: false, 
              
        },
  
        socialMediaPresence:{
  
          type: String,  
          required: false,
              
        },
  
        futurePlanOfExpanding:{
  
          type: String,  
          required: [true],
              
        },
  
  
        //Additional Information
  
        accesibleToDisabledPeople:{
  
          type: String,  
          required: [false],
              
        },
  
        trackingCustomerBase:{
  
          type: String,  
          required: [false],
              
        },
  
        exitStrategy:{
  
          type: String,  
          required: [false],
              
        },
  
        otherUniqueFeatures:{
  
          type: String,  
          required: [false],
              
        },
  
        planToGrow:{
  
          type: String,  
          required: [false],
              
        },
  
        planToCreateBrand:{
  
          type: String,  
          required: [false],
              
        },
  
     //Information about team
  
  
    previouslyParticipated:{
  
          type: String,  
          required: [true],
              
        },
  
  numberOfCofounders:{
  
    type: String,  
    required: [true],
        
  },
  
  expertiseInSRH:{
    type: String,  
    required: [false],
        
  },
  
  equityShare:{
    type: String,  
    required: [true],
  },
  
  otherOccupation:{
    type: String,  
    required: [true],
  },
  
  timeCommitment:{
    type: String,  
    required: [true],
  },
  
  willingnesssToRelocate:{
    type: String,  
    required: [true],
  },
  
  
  //Required Documents
  
  motivationVideoUrl:{
    type: String,  
    required: [false],
  },
  
  linkToApplication:{
    type: String,  
    required: [false],
  },
  
  pitchDeckUrl:{
    type: String,  
    required: [false],
  },
  
  
  businessCanvasUrl:{
    type: String,  
    required: [false],
  },
  
  organizationalStructureUrl:{
    type: String,  
    required: [false],
  },

  totalScore:{
    type: String,  
  required: [false],
},
  
    
  createdDate: { type: Date, default: Date.now }
    });
    


applicationSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }


});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);