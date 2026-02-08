'use client';

import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { GeoJSONFeatureProperties } from '@/lib/types';
import mainFeatures from '@/data/geojson/main_features.json';

interface NepalMapProps {
    activeLayers?: string[]; // IDs of layers to show
    onFeatureClick?: (feature: GeoJSONFeatureProperties) => void;
    className?: string;
    initialCenter?: [number, number];
    initialZoom?: number;
}

export default function NepalMap({
    activeLayers = [],
    onFeatureClick,
    className = "h-[500px] w-full rounded-xl overflow-hidden",
    initialCenter = [84.1240, 28.3949], // Nepal center approx
    initialZoom = 6
}: NepalMapProps) {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (map.current) return;
        if (!mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: {
                version: 8,
                sources: {
                    osm: {
                        type: 'raster',
                        tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors'
                    }
                },
                layers: [
                    {
                        id: 'osm-tiles',
                        type: 'raster',
                        source: 'osm',
                        minzoom: 0,
                        maxzoom: 19
                    }
                ]
            },
            center: initialCenter,
            zoom: initialZoom,
        });

        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

        map.current.on('load', () => {
            setIsLoaded(true);

            // Add data source
            map.current?.addSource('nepal-data', {
                type: 'geojson',
                data: mainFeatures as any
            });

            // Add layers
            // UNESCO Points
            map.current?.addLayer({
                id: 'points-layer',
                type: 'circle',
                source: 'nepal-data',
                paint: {
                    'circle-radius': 8,
                    'circle-color': [
                        'match',
                        ['get', 'layerType'],
                        'UNESCO', '#eab308', // Yellow
                        'TREK', '#22c55e',   // Green
                        'RISK', '#ef4444',   // Red
                        '#3b82f6'            // Blue default
                    ],
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                }
            });

            // Add click handler
            map.current?.on('click', 'points-layer', (e) => {
                if (e.features && e.features[0].properties && onFeatureClick) {
                    // Cast strictly for TS
                    const props = e.features[0].properties as unknown as GeoJSONFeatureProperties;
                    onFeatureClick(props);

                    // Internal Popup
                    new maplibregl.Popup()
                        .setLngLat(e.lngLat)
                        .setHTML(`<strong>${props.name}</strong><p>${props.description}</p>`)
                        .addTo(map.current!);
                }
            });

            // Change cursor
            map.current?.on('mouseenter', 'points-layer', () => {
                if (map.current) map.current.getCanvas().style.cursor = 'pointer';
            });
            map.current?.on('mouseleave', 'points-layer', () => {
                if (map.current) map.current.getCanvas().style.cursor = '';
            });
        });

    }, []);

    return (
        <div className={`relative ${className}`}>
            <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 z-10">
                    <span className="text-gray-500 animate-pulse">Cargando mapa...</span>
                </div>
            )}
        </div>
    );
}
