import Ember from 'ember';

export default Ember.Controller.extend({
  columns: ['id', 'title', 'body'],

  actions: {
    exportToExcel: function(){
      var self = this;
      var workbook = ExcelBuilder.createWorkbook();
      var sheet = workbook.createWorksheet({name: 'Test'});

      var prepareData = [['POPULATION']];
      prepareData.pushObject(['      ','Medicaid Expansion Adjustment', '0', '0', '0']);
      prepareData.pushObject(['      ', '% Var from Est. Exchange Pop', '0', '0', '0']);
      // prepareData.pushObject(this.get('columns'));
      // this.get('model').forEach(function(item){
      //   prepareData.pushObject(self.get('columns').map(function(column){
      //     return item.get(column);
      //   }));
      // });

      prepareData.pushObject(['PAYER RISK ARRANGEMENTS'])
      prepareData.pushObject(['     ','% Commercial Revenue in Risk Contracts', 15, 15,15])
      prepareData.pushObject(['     ','% Medicare Revenue in Risk Contracts', 15, 15,15])
      prepareData.pushObject(['     ','% Medicaid Revenue in Risk Contracts', 15, 15,15])
      prepareData.pushObject(['     ','% of HXR Revenue in Risk Contracts', 15, 15,15])
      prepareData.pushObject(['     ','% Savings to Trinity', 15, 15,15])
      sheet.setData(prepareData);
      workbook.addWorksheet(sheet);
      var data = ExcelBuilder.createFile(workbook);

			Downloadify.create('downloadify',{
				filename: function(){
					return 'sample.xlsx';
				},
				data: function(){
					return data;
				},
				onComplete: function(){ alert('Your File Has Been Saved!'); },
				onCancel: function(){ alert('You have cancelled the saving of this file.'); },
				onError: function(){ alert('You must put something in the File Contents or there will be nothing to save!'); },
				swf: 'downloadify.swf',
				downloadImage: 'download.png',
				width: 100,
				height: 30,
        dataType: 'base64',
				append: false
			});
    }

  }

});
