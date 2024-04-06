import React, { Component } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"

// Carousel images
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
const img6 = "https://vogazeta.ru/uploads/full_size_1695895950-0b296d8b894db0ee5af75263cd82b79d.jpg";

const items = [
  {
    src: img3,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: img4,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: img5,
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: img6,
    altText: "Slide 4",
    caption: "Slide 4",
    style: "border-radius: 5px;"
  },
]

class Slidewithindicator extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          // interval={4000}
          style={{hieght: "200px", borderRadius: "5px"}}
        >
          <img
            src={item.src}
            className="d-block img-fluid"
            alt={item.altText}
            style={{borderRadius: "5px"}}
          />
        </CarouselItem>
      )
    })

    return (
      <React.Fragment>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          {/* <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          /> */}
        </Carousel>
      </React.Fragment>
    )
  }
}

export default Slidewithindicator
