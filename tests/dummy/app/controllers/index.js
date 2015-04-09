import Ember from 'ember';

export default Ember.Controller.extend({

  items: [
    {id: 1, title: 'Title1', date: '12.21.2009'},
    {id: 2, title: 'Title2', date: '13.21.2009'},
    {id: 3, title: 'Title3', date: '14.21.2009'},
    {id: 4, title: 'Title4', date: '15.21.2009'},
    {id: 5, title: 'Title5', date: '16.21.2009'}
  ],

  actions: {
    exportToExcel: function(){
      var workbook = ExcelBuilder.createWorkbook();
      var sheet = workbook.createWorksheet({name: 'Test'});
      var originalData = [
          ['Artist', 'Album', 'Price'],
          ['Buckethead', 'Albino Slug', 8.99],
          ['Buckethead', 'Electric Tears', 13.99],
          ['Buckethead', 'Colma', 11.34],
          ['Crystal Method', 'Vegas', 10.54],
          ['Crystal Method', 'Tweekend', 10.64],
          ['Crystal Method', 'Divided By Night', 8.99]
      ];
      sheet.setData(originalData);
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
				append:true
			});
    }

  }

});
