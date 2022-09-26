import { MapContainer, TileLayer } from 'react-leaflet'

import { useProblems } from 'contexts/ProblemsContext'
import { LatLngTuple } from 'leaflet'

export type Point = {
  id: number
  position: LatLngTuple
  radius: number
}

export type MapProps = {
  points?: Point[]
}

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
const styleid = process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID
const user = process.env.NEXT_PUBLIC_MAPBOX_USER_ID

const tileLayer = token
  ? `https://api.mapbox.com/styles/v1/${user}/${styleid}/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`
  : `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`

const Map = () => {
  const { mapProblem } = useProblems()

  return (
    <MapContainer
      attributionControl={false}
      center={mapProblem.central}
      zoom={11}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      doubleClickZoom={false}
    >
      {/* {!!mapProblem.points?.length &&
        mapProblem.points.map((point, index) => (
          <Circle
            key={index}
            center={point}
            radius={400}
            pathOptions={{
              fillColor: '#329DFF',
              fillOpacity: 1,
              color: '#fff',
              opacity: 0.6
            }}
          />
        ))} */}

      <TileLayer url={tileLayer} />
    </MapContainer>
  )
}

export default Map
