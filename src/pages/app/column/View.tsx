import HButton from "components/h-button";
import Recommened from "components/recommened";
import ThumbnailColumn from "components/thumbnail-column";
import { Col, Container, Row } from "reactstrap";

const RECOMMENDS = [
  {
    name: "RECOMMENDED COLUMN",
    label: "オススメ",
  },
  {
    name: "RECOMMENDED DIET",
    label: "ダイエット",
  },
  {
    name: "RECOMMENDED BEUTY",
    label: "美容",
  },
  {
    name: "RECOMMENDED HEALTH",
    label: "健康",
  },
];

const THUMBNAILS = [
  {
    image: "/assets/images/column/column-1.jpg",
    label: "2021.05.17 23:25",
    name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    image: "/assets/images/column/column-2.jpg",
    label: "2021.05.17 23:25",
    name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    image: "/assets/images/column/column-3.jpg",
    label: "2021.05.17 23:25",
    name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    image: "/assets/images/column/column-4.jpg",
    label: "2021.05.17 23:25",
    name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    image: "/assets/images/column/column-5.jpg",
    label: "2021.05.17 23:25",
    name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    image: "/assets/images/column/column-6.jpg",
    label: "2021.05.17 23:25",
    name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    image: "/assets/images/column/column-7.jpg",
    label: "2021.05.17 23:25",
    name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    image: "/assets/images/column/column-8.jpg",
    label: "2021.05.17 23:25",
    name: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
];

const View = () => {
  return (
    <div className="column-page-wrapper">
      <Container>
        <div className="section-1">
          <Row>
            {RECOMMENDS.map((h, k) => (
              <Col xs={6} md={3} key={k}>
                <Recommened label={h.label} name={h.name} />
              </Col>
            ))}
          </Row>
        </div>

        <div className="section-2">
          <Row className="custom-row">
            {THUMBNAILS.map((t, k) => (
              <Col key={k} xs={12} md={6} lg={3} className={"item"}>
                <ThumbnailColumn
                  image={t.image}
                  label={t.label}
                  tags={t.tags}
                  name={t.name}
                />
              </Col>
            ))}
          </Row>
        </div>

        <div className="section-3">
          <HButton label="記録をもっと見る" />
        </div>
      </Container>
    </div>
  );
};

export default View;
