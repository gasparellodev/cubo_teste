import React, { useEffect } from 'react'

import { useProblems } from 'contexts/ProblemsContext'
import 'leaflet/dist/leaflet.css'
import L, { HeatLatLngTuple, LatLngTuple } from 'leaflet'
import 'leaflet.heat'

export default function MapTest2() {
  const { mapProblem } = useProblems()

  const createMap = () => {
    const options = {
      attributionControl: false,
      center: mapProblem.central,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: false,
      doubleClickZoom: false,
      zoom: 11
    }

    const map = L.map('map', { ...options })

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    const styleid = process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID
    const user = process.env.NEXT_PUBLIC_MAPBOX_USER_ID

    const tileLayer = token
      ? `https://api.mapbox.com/styles/v1/${user}/${styleid}/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`
      : `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`

    L.tileLayer(tileLayer).addTo(map)

    if (mapProblem.points?.[0].length === 3) {
      try {
        L.heatLayer(mapProblem.points as HeatLatLngTuple[], {
          radius: 20,
          blur: 8,

          gradient: {
            0.3: 'cyan',
            0.5: 'green',
            0.7: 'yellow',
            0.95: 'red',
            1.0: '#9400d3'
          }
        }).addTo(map)
      } catch {
        return
      }
    }

    if (mapProblem.points?.[0].length === 2) {
      mapProblem.points.forEach((point) => {
        L.circle(point as LatLngTuple, {
          color: '#F5486B',
          fillOpacity: 1,
          radius: 400,
          interactive: false
        }).addTo(map)
      })
    }

    return () => map.remove()
  }

  useEffect(() => {
    createMap()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapProblem])

  return <div id="map" style={{ zIndex: '1' }} />
}
