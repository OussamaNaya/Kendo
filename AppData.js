var remoteData = [
            { id: 10, lb: "Option 1" },
            { id: 20, lb: "Option 2" },
            { id: 30, lb: "Option 3" }
        ];

var remoteDataSource = new kendo.data.DataSource({
            transport: {
                read: function(options) {
                    // Simuler un appel AJAX
                    setTimeout(function(){
                        options.success(remoteData);
                    }, 500);
                }
            },
            schema: {
                model: {
                    id: "id",
                    fields: {
                        id: { type: "number" },
                        lb: { type: "string" }
                    }
                }
            }
});