import HButton from "components/h-button";
import HChart from "components/h-chart";
import HCircular from "components/h-circular";
import Hexagon from "components/hexagon";
import Thumbnail from "components/thumbnail";
import { Col, Container, Row } from "reactstrap";

const HEXAGONS = [
  {
    icon: "/assets/images/top-page/hexagon-icon-1.svg",
    label: "Morning",
  },
  {
    icon: "/assets/images/top-page/hexagon-icon-1.svg",
    label: "Lunch",
  },
  {
    icon: "/assets/images/top-page/hexagon-icon-1.svg",
    label: "Dinner",
  },
  {
    icon: "/assets/images/top-page/hexagon-icon-2.svg",
    label: "Snack",
  },
];

const THUMBNAILS = [
  {
    image: "/assets/images/top-page/m01.jpg",
    label: "05.21.Morning",
  },
  {
    image: "/assets/images/top-page/l03.jpg",
    label: "05.21.Lunch",
  },
  {
    image: "/assets/images/top-page/d01.jpg",
    label: "05.21.Dinner",
  },
  {
    image: "/assets/images/top-page/l01.jpg",
    label: "05.21.Snack",
  },
  {
    image: "/assets/images/top-page/m01.jpg",
    label: "05.20.Morning",
  },
  {
    image: "/assets/images/top-page/l02.jpg",
    label: "05.20.Lunch",
  },
  {
    image: "/assets/images/top-page/l01.jpg",
    label: "05.20.Dinner",
  },
  {
    image: "/assets/images/top-page/s01.jpg",
    label: "05.21.Snack",
  },
];

const View = () => {
  return (
    <div className="top-page-wrapper">
      <div className="section-1">
        <div className="top-page-left">
          <div className="progress">
            <HCircular value={75} date="05/21" />
          </div>
        </div>
        <div className="top-page-right">
          <HChart />
        </div>
      </div>

      <div className="section-2">
        <Container>
          <Row>
            {HEXAGONS.map((h, k) => (
              <Col xs={6} md={3} key={k}>
                <Hexagon icon={h.icon} label={h.label} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="section-3">
        <Container>
          <Row className="custom-row">
            {THUMBNAILS.map((t, k) => (
              <Col key={k} xs={12} md={6} lg={3} className={"item"}>
                <Thumbnail image={t.image} label={t.label} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="section-4">
        <HButton label="記録をもっと見る" />
      </div>
    </div>
  );
};

export default View;
