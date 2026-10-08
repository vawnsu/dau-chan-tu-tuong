import { useMemo, useState } from 'react'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locations } from '../data/content'
import ArchiveArt from '../components/common/ArchiveArt'

function MapEvents({ setMapReady }) {
  useMapEvents({ load: () => setMapReady(true), tileerror: () => setMapReady(false) })
  return null
}

export default function HistoricalMap() {
  const [selectedId, setSelectedId] = useState(locations[0].id)
  const [mapReady, setMapReady] = useState(true)
  const selected = locations.find((item) => item.id === selectedId)
  const markerIcon = useMemo(() => L.divIcon({ className: 'history-marker', html: '<span></span>', iconSize: [28, 28], iconAnchor: [14, 14] }), [])
  return (
    <div className="page-pad map-page">
      <section className="map-heading"><div><span className="eyebrow"><i />BẢN ĐỒ LỊCH SỬ<i /></span><h1>Những địa danh<br /><em>ghi dấu hành trình</em></h1></div><p>Nhấn vào một điểm trên bản đồ hoặc danh sách để đọc câu chuyện và đi đến trạm liên quan.</p></section>
      <section className="map-layout">
        <div className="map-frame">
          <MapContainer center={[28, 87]} zoom={3} minZoom={2} scrollWheelZoom className="leaflet-map">
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((location) => <Marker key={location.id} position={location.coords} icon={markerIcon} eventHandlers={{ click: () => setSelectedId(location.id) }} />)}
            <MapEvents setMapReady={setMapReady} />
          </MapContainer>
          {!mapReady && <div className="map-fallback-note">Bản đồ nền đang không tải được. Danh sách địa điểm bên dưới vẫn hoạt động đầy đủ.</div>}
          <div className="map-legend"><MapPin /> {locations.length} địa điểm · OpenStreetMap · Nếu nền không tải, dùng danh sách bên dưới</div>
        </div>
        <aside className="location-detail">
          <ArchiveArt compact type={selected.illustration} label={`Minh họa đồ họa ${selected.name}`} />
          <span>TRẠM {selected.stationId} · {selected.period}</span><h2>{selected.name}</h2><p>{selected.event}</p>
          <Link to={`/tram/${selected.stationId}`} className="button button-ink">Đến trạm liên quan <ArrowRight size={17} /></Link>
        </aside>
      </section>
      <section className="location-list"><h2>Danh mục địa điểm</h2><div>{locations.map((location, index) => <button key={location.id} className={selectedId === location.id ? 'active' : ''} onClick={() => setSelectedId(location.id)}><span>{String(index + 1).padStart(2, '0')}</span><div><b>{location.name}</b><small>{location.period}</small></div><ArrowRight /></button>)}</div></section>
    </div>
  )
}
