const  Mongoose = require("mongoose");

const InputApiSchema = new Mongoose.Schema({

    
        totalCount: { type: 'Number' },
        totalPLAShown: { type: 'Number' },
        totalPLACount: { type: 'Number' },
        products: { type: [ 'Mixed' ] },
        sortOptions: { type: [ 'String' ] },
        nextBestResults: { type: 'Array' },
        pageTitle: { type: 'Mixed' },
        storefrontId: { type: 'String' },
        guidedNavigation: { name: { type: 'String' }, guidedNavEntries: { type: 'Array' } },
        upsInfo: {
          personalizationSortAlgoUsed: { type: 'String' },
          numPersonalizedProductShown: { type: 'Number' },
          isPersonalized: { type: 'Boolean' }
        },
        changeLog: { type: 'Array' },
        appliedParams: {
          filters: { type: 'Array' },
          geoFilters: { type: 'Array' },
          rangeFilters: { type: 'Array' },
          sort: { type: 'String' }
        },
        templateMessage: { type: 'Mixed' },
        querySubstitution: { type: 'Mixed' }
      

})

module.exports = Mongoose.model('InputApiSchema',InputApiSchema)
