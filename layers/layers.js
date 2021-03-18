var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Titik_Hidden_Gem_Bali_1 = new ol.format.GeoJSON();
var features_Titik_Hidden_Gem_Bali_1 = format_Titik_Hidden_Gem_Bali_1.readFeatures(json_Titik_Hidden_Gem_Bali_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Hidden_Gem_Bali_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Hidden_Gem_Bali_1.addFeatures(features_Titik_Hidden_Gem_Bali_1);
var lyr_Titik_Hidden_Gem_Bali_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titik_Hidden_Gem_Bali_1, 
                style: style_Titik_Hidden_Gem_Bali_1,
                interactive: true,
                title: '<img src="styles/legend/Titik_Hidden_Gem_Bali_1.png" /> Titik_Hidden_Gem_Bali'
            });
var format_amenitas_2 = new ol.format.GeoJSON();
var features_amenitas_2 = format_amenitas_2.readFeatures(json_amenitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenitas_2.addFeatures(features_amenitas_2);
var lyr_amenitas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amenitas_2, 
                style: style_amenitas_2,
                interactive: true,
                title: '<img src="styles/legend/amenitas_2.png" /> amenitas'
            });
var format_Trail_Hidden_Gem_Bali_3 = new ol.format.GeoJSON();
var features_Trail_Hidden_Gem_Bali_3 = format_Trail_Hidden_Gem_Bali_3.readFeatures(json_Trail_Hidden_Gem_Bali_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trail_Hidden_Gem_Bali_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trail_Hidden_Gem_Bali_3.addFeatures(features_Trail_Hidden_Gem_Bali_3);
var lyr_Trail_Hidden_Gem_Bali_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trail_Hidden_Gem_Bali_3, 
                style: style_Trail_Hidden_Gem_Bali_3,
                interactive: true,
                title: '<img src="styles/legend/Trail_Hidden_Gem_Bali_3.png" /> Trail_Hidden_Gem_Bali'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Titik_Hidden_Gem_Bali_1.setVisible(true);lyr_amenitas_2.setVisible(true);lyr_Trail_Hidden_Gem_Bali_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Titik_Hidden_Gem_Bali_1,lyr_amenitas_2,lyr_Trail_Hidden_Gem_Bali_3];
lyr_Titik_Hidden_Gem_Bali_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_amenitas_2.set('fieldAliases', {'Nama': 'Nama', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Trail_Hidden_Gem_Bali_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Titik_Hidden_Gem_Bali_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_amenitas_2.set('fieldImages', {'Nama': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Trail_Hidden_Gem_Bali_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Titik_Hidden_Gem_Bali_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_amenitas_2.set('fieldLabels', {'Nama': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Trail_Hidden_Gem_Bali_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Trail_Hidden_Gem_Bali_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});