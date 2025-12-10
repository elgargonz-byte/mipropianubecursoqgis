var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ComunidadesAutnomas_2 = new ol.format.GeoJSON();
var features_ComunidadesAutnomas_2 = format_ComunidadesAutnomas_2.readFeatures(json_ComunidadesAutnomas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesAutnomas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesAutnomas_2.addFeatures(features_ComunidadesAutnomas_2);
var lyr_ComunidadesAutnomas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesAutnomas_2, 
                style: style_ComunidadesAutnomas_2,
                popuplayertitle: 'Comunidades Autónomas',
                interactive: true,
                title: '<img src="styles/legend/ComunidadesAutnomas_2.png" /> Comunidades Autónomas'
            });
var format_ParquesNaturales_3 = new ol.format.GeoJSON();
var features_ParquesNaturales_3 = format_ParquesNaturales_3.readFeatures(json_ParquesNaturales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesNaturales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquesNaturales_3.addFeatures(features_ParquesNaturales_3);
var lyr_ParquesNaturales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquesNaturales_3, 
                style: style_ParquesNaturales_3,
                popuplayertitle: 'Parques Naturales',
                interactive: true,
                title: '<img src="styles/legend/ParquesNaturales_3.png" /> Parques Naturales'
            });
var format_Ros_4 = new ol.format.GeoJSON();
var features_Ros_4 = format_Ros_4.readFeatures(json_Ros_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_4.addFeatures(features_Ros_4);
var lyr_Ros_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ros_4, 
                style: style_Ros_4,
                popuplayertitle: 'Ríos',
                interactive: true,
                title: '<img src="styles/legend/Ros_4.png" /> Ríos'
            });
var group_Originales = new ol.layer.Group({
                                layers: [lyr_ComunidadesAutnomas_2,lyr_ParquesNaturales_3,lyr_Ros_4,],
                                fold: 'open',
                                title: 'Originales'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ComunidadesAutnomas_2.setVisible(true);lyr_ParquesNaturales_3.setVisible(true);lyr_Ros_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,group_Originales];
lyr_ComunidadesAutnomas_2.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', });
lyr_ParquesNaturales_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', });
lyr_Ros_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', });
lyr_ComunidadesAutnomas_2.set('fieldImages', {'ID': 'TextEdit', 'TIPO_0101': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Range', 'TOT_FOR': 'TextEdit', 'ARB': 'TextEdit', 'NO_ARB': 'TextEdit', });
lyr_ParquesNaturales_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', });
lyr_Ros_4.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', });
lyr_ComunidadesAutnomas_2.set('fieldLabels', {'ID': 'no label', 'TIPO_0101': 'no label', 'CODIGO_INE': 'no label', 'ETIQUETA': 'no label', 'COD_INE': 'no label', 'TOT_FOR': 'no label', 'ARB': 'no label', 'NO_ARB': 'no label', });
lyr_ParquesNaturales_3.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Declaracio': 'no label', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'no label', 'Modificaci': 'no label', });
lyr_Ros_4.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'header label - always visible', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'no label', 'Shape_Leng': 'no label', });
lyr_Ros_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});