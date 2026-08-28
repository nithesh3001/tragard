import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ---------- FIX LEAFLET MARKER ICON ISSUE ---------- */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function Map() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[22.957539955974585, 78.8110313569057]} //  INDIA CENTER
        zoom={4} //  FULL INDIA VIEW
        scrollWheelZoom={false}
        dragging={true}
        // touchZoom={false}
        style={{ height: "350px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap | The Trgard"
        />

        {/* RAMESHWARAM */}
        <Marker position={[9.28452949989268, 79.31111231357406]}>
          <Popup>
            <h5>Registered Office</h5>
            <p>
              25A,
              <br /> Railway Feeder Road,
              <br />
              Rameswaram, Tamil Nadu - 623 526.
              <br />
              <span className="num">Mobile :</span> 7550332202
            </p>
          </Popup>
        </Marker>

        {/* COIMBATORE */}
        <Marker position={[11.040523585510442, 76.94294592196282]}>
          <Popup>
            <h5>Corporate Office - South</h5>
            <p>
              18, Pricol colony, <br />
              Kavundampalayam,
              <br />
              Coimbatore, Tamil Nadu - 641 030.
              <br />
              <span className="num">Mobile :</span> 7550332202
            </p>
          </Popup>
        </Marker>

        {/* GURUGRAM */}
        <Marker position={[28.442970496242456, 77.05583279325394]}>
          <Popup>
            <h5>Corporate Office - North</h5>
            <p>
              3rd Floor, Tower - A, Unitech Cyber Park,
              <br />
              Village Jharsa, Sector-39,
              <br />
              Gurugram, Haryana - 122 003.
              <br />
              <span className="num">Mobile :</span> 7550332202
              <br />
              <span className="num">Telephone:</span> 0124 656 2421
            </p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
