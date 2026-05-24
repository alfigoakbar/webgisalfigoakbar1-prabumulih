var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Poligon_1 = new ol.format.GeoJSON();
var features_Poligon_1 = format_Poligon_1.readFeatures(json_Poligon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligon_1.addFeatures(features_Poligon_1);
var lyr_Poligon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligon_1, 
                style: style_Poligon_1,
                popuplayertitle: 'Poligon',
                interactive: true,
                title: '<img src="styles/legend/Poligon_1.png" /> Poligon'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Poligon_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Poligon_1];
lyr_Poligon_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Poligon_1.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Poligon_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Poligon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});