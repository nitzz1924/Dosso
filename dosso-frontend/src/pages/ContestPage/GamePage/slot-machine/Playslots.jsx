import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "reactstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
let instantWin = "/Assets/images/instantWin.wav"
let playSound2 = "/Assets/images/metalcraking.mp3"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import config from "constants/config"
import { getLocalData } from "services/global-storage"
const Playslots = ({ data }) => {
  const [spincount, setSpincount] = useState(7)
  const [slots, setSlots] = useState(null)
  const [spinDisabled, setSpinDisabled] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)
  const [totalSum, setTotalSum] = useState(0)
  const navigate = useNavigate()
  const [spinResults, setSpinResults] = useState(
    Array.from({ length: 8 }, () => "")
  )
  const spinAudio = new Audio(playSound2)
  const instantWinAudio = new Audio(instantWin)
  const axiosInstance = axios.create()
  // Create a new instance of the mock adapter
  const mockAdapter = new MockAdapter(axiosInstance)

  let newTotalSum = 0

  const slotSymbols = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ]

  function createSymbolElement(symbol) {
    const div = document.createElement("div")
    div.classList.add("symbol")
    div.textContent = symbol
    return div
  }

  let spun = false
  let spinCompleted = false

  function spin() {
    if (spun) {
      reset()
    }

    const slots = document.querySelectorAll(".slot")
    let completedSlots = 0

    slots.forEach((slot, index) => {
      const symbols = slot.querySelector(".symbols")
      const symbolHeight = symbols.querySelector(".symbol")
        ? symbols.querySelector(".symbol").clientHeight
        : 0
      const symbolCount = symbols.childElementCount

      symbols.innerHTML = ""

      symbols.appendChild(createSymbolElement("?"))

      for (let i = 0; i < 6; i++) {
        slotSymbols[index].forEach(symbol => {
          symbols.appendChild(createSymbolElement(symbol))
        })
      }

      const totalDistance = symbolCount * symbolHeight
      const randomOffset =
        -Math.floor(Math.random() * (symbolCount - 1) + 1) * symbolHeight
      symbols.style.top = `${randomOffset}px`

      symbols.addEventListener(
        "transitionend",
        () => {
          completedSlots++
          if (completedSlots === slots.length && !spinCompleted) {
            logDisplayedSymbols()
            spinCompleted = true
          }
        },
        { once: true }
      )
    })

    spun = true
    setSpinDisabled(true)
  }

  function reset() {
    const slots = document.querySelectorAll(".slot")

    slots.forEach(slot => {
      const symbols = slot.querySelector(".symbols")
      symbols.style.transition = "none"
      symbols.style.top = "0"
      symbols.offsetHeight
      symbols.style.transition = ""
    })
  }
  //Insert API
  const InsertLastSpin = async newTotalSum => {
    try {
      const dataList = []
      dataList.push({
        studentid: getLocalData("userId"),
        contestid: data.id,
        point: newTotalSum,
        status: 1,
      })
      console.log(dataList)
      // Mock the HTTP request
      mockAdapter
        .onPost(config.apiUrl + "InsertLastSpin")
        .reply(200, { success: true })
      axios
        .post(config.apiUrl + "InsertLastSpin", dataList[0], {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(response => {
          console.log(JSON.stringify(response.data))
        })
        .catch(error => {
          // Handle errors here
          console.log("error->", error)
        })
    } catch (error) {
      console.error(error)
    }
  }
  function logDisplayedSymbols() {
    if (!slots) return
    const displayedSymbols = []

    slots.forEach((slot, index) => {
      const symbols = slot.querySelector(".symbols")
      const symbolIndex =
        Math.floor(
          Math.abs(parseInt(symbols.style.top, 10)) / slot.clientHeight
        ) % slotSymbols[index].length
      const displayedSymbolIndex =
        (slotSymbols[index].length + symbolIndex - 1) %
        slotSymbols[index].length
      const displayedSymbol = slotSymbols[index][displayedSymbolIndex]
      displayedSymbols.push(displayedSymbol)
    })

    setSpinDisabled(false)
    const newSpincount = spincount - 1
    setSpincount(newSpincount)

    const newSpinResult = parseInt(displayedSymbols.join(""))
    setSpinResults(prevSpinResults => {
      const updatedResults = [...prevSpinResults]
      updatedResults[7 - newSpincount] = newSpinResult
      return updatedResults
    })

    newTotalSum = totalSum + newSpinResult // Calculate the new total sum
    setTotalSum(newTotalSum)

    instantWinAudio.play()

    console.log(
      displayedSymbols,
      "newSpinResult",
      newSpinResult,
      "totalSum",
      totalSum,
      "newTotalSum",
      newTotalSum
    )

    if (newSpincount <= 0) {
      setGameComplete(true)
      setSpinDisabled(true)
      InsertLastSpin(newTotalSum)
    }
  }
  useEffect(() => {
    if (!slots) {
      // Select slots once when the component mounts
      const slots = document.querySelectorAll(".slot")
      setSlots(slots)
      spin()
      setSpinDisabled(false)
    }
  }, [slots])

  const handlechange = () => {
    spin();
    spinAudio.play()
  }

  return (
    <>
      <div className=" ">
        <Container fluid>
          <Row className="justify-content-center">
            <div className="button-ring button-ring-sq">
              <div className="gamearea py-5 my-2">
                <video className="video-background" autoPlay loop muted>
                  <source src="/Assets/images/gamebg.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content-overlay">
                  <div className="fw-bold col-12 pb-2 fs-1 text-white text-uppercase text-center">
                    Spin To Play
                  </div>
                  <div className="slotcontainer">
                    {slotSymbols.map((symbols, index) => (
                      <div key={index} className="slot linear me-1">
                        <div className="symbols text-black">
                          {spun &&
                            symbols.map((symbol, i) => (
                              <div key={i} className="symbol ">
                                {symbol}
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex justify-content-around ">
                    {gameComplete ? (
                      <div className="d-flex flex-column ">
                        <div className="fw-bold fs-1 text-white text-uppercase text-center">
                          Turn Over!!!
                        </div>
                        <button
                          onClick={() =>
                            navigate("/leaderbaord", { state: data })
                          }
                          className="btn btn-light btn-lg"
                        >
                          View Leaderboard
                        </button>
                      </div>
                    ) : (
                      <button
                        className="btn btn-light btn-lg w-75"
                        disabled={spinDisabled}
                        onClick={handlechange}
                      >

                        {spinDisabled == false ? "Play Round" : "Wait..."}
                        <span>({spincount}/7)</span>
                      </button>
                    )}

                    {/* <button className='btn btn-secondary btn-lg' onClick={reset}>Reset</button> */}
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <Row className="justify-content-center mt-3">
            <Col className="d-flex flex-column shadow-lg rounded p-3">
              {spinResults.map((result, index) => (
                <div key={index}>
                  {index === 0 && result === "" ? (
                    <div className="fs-4 fw-bold text-center w-100  pt-1  mb-3 linear resultss">
                      Spin Results
                    </div>
                  ) : (
                    <div className="resultTab  fs-4 mt-2 shadow px-2 d-flex justify-content-between ">
                      <span className="text-dark fw-bold">{`Round ${index} :`}</span>{" "}
                      <span className="fw-bolder text-success">{`${result}`}</span>
                    </div>
                  )}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Playslots