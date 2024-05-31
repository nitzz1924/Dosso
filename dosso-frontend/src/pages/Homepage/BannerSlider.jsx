import React, { useEffect, useState } from "react"
import Flicking from "@egjs/react-flicking"
import "@egjs/flicking-plugins/dist/flicking-plugins.css"
import { Row, Col, Card, Button } from "reactstrap"
import { AutoPlay } from "@egjs/flicking-plugins"
import axios from "axios"
import axiosRetry from "axios-retry"
import config from "constants/config"
import { getLocalData } from "services/global-storage"
import { useNavigate } from "react-router-dom"
import MockAdapter from "axios-mock-adapter"

// Carousel images
// const img1 = "https://admin.dosso21.com/uploads/1716641240.jpg"
// const img2 = "https://admin.dosso21.com/uploads/1716641279.jpg"
// const img3 = "https://admin.dosso21.com/uploads/1716641305.jpg"
// const img4 = "https://admin.dosso21.com/uploads/1716641328.jpg";
// const img5 = "https://admin.dosso21.com/uploads/1716641354.jpg";
// const img6 = "https://admin.dosso21.com/uploads/1716641373.jpg";

const BannerSlider = ({ title }) => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ]
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const axiosInstance = axios.create()
  const mockAdapter = new MockAdapter(axiosInstance)
  axiosRetry(axiosInstance, { retries: 3 })
  const [sliderdata, setSliderData] = useState([])

  const getimagesadd = async () => {
    try {
      const response = await axios.get(config.apiUrl + "getimagesadd", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log("All Adshow Data : ", response.data)
      setSliderData(response.data)
    } catch (error) {
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getimagesadd()
  }, [])

  if (loading) {
    return <div>Loading......</div>
  }
  return (
    <div className="offer-slider-container">
      {/* <Row className="my-2">
                <Col className="d-grid align-content-center">
                    <div className="fs-5 fw-bold text-white">{title}</div>
                </Col>
                <Col><div className="fs-6 float-end border rounded-pill bg bg-danger-subtle py-2 px-3  border-danger-subtle text-white">Spin Remaining: 105</div></Col>
            </Row> */}
      <Flicking
        align="prev"
        plugins={plugins}
        horizontal={true}
        circular={true}
        className="flicking-wrapper"
        resizeOnContentsReady={true}
        renderOnlyVisible={true}
        adaptive={false}
        inputType={["touch", "mouse"]}
        preventDefaultOnDrag={true}
        moveType={["strict", { count: 1 }]}
      >
        {(sliderdata || []).map((item, key) => (
          <div className="h-50 slider-card" key={item.id}>
            <img
              src={config.publicurl + item.addimage}
              className="img-fluid rounded"
              alt="Responsive image"
            />
          </div>
        ))}
      </Flicking>
    </div>
  )
}

export default BannerSlider
