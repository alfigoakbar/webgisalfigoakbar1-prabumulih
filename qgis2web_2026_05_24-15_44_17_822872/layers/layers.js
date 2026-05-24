var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1 = new ol.format.GeoJSON();
var features_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1 = format_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1.readFeatures(json_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1.addFeatures(features_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1);
var lyr_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1, 
                style: style_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1,
                popuplayertitle: 'administrasi Kecamatan-20260524T032833Z-3-001 — administrasi Kecamatan/ADMINISTRASIKECAMATAN_AR_50K.shp',
                interactive: true,
                title: '<img src="styles/legend/administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1.png" /> administrasi Kecamatan-20260524T032833Z-3-001 — administrasi Kecamatan/ADMINISTRASIKECAMATAN_AR_50K.shp'
            });
var format_Poligon_2 = new ol.format.GeoJSON();
var features_Poligon_2 = format_Poligon_2.readFeatures(json_Poligon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligon_2.addFeatures(features_Poligon_2);
var lyr_Poligon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligon_2, 
                style: style_Poligon_2,
                popuplayertitle: 'Poligon',
                interactive: true,
                title: '<img src="styles/legend/Poligon_2.png" /> Poligon'
            });
var format_Titik_3 = new ol.format.GeoJSON();
var features_Titik_3 = format_Titik_3.readFeatures(json_Titik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_3.addFeatures(features_Titik_3);
var lyr_Titik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_3, 
                style: style_Titik_3,
                popuplayertitle: 'Titik',
                interactive: true,
                title: '<img src="styles/legend/Titik_3.png" /> Titik'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1.setVisible(true);lyr_Poligon_2.setVisible(true);lyr_Titik_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1,lyr_Poligon_2,lyr_Titik_3];
lyr_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Poligon_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Titik_3.set('fieldAliases', {'id': 'id', });
lyr_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Poligon_2.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Titik_3.set('fieldImages', {'id': '', });
lyr_administrasiKecamatan20260524T032833Z3001administrasiKecamatanADMINISTRASIKECAMATAN_AR_50Kshp_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Poligon_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Titik_3.set('fieldLabels', {'id': 'no label', });
lyr_Titik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});