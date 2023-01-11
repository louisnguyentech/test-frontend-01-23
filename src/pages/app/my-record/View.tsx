import Diary from "components/diary";
import HButton from "components/h-button";
import HChart from "components/h-chart";
import RecordCategory from "components/record-category";
import { Col, Container, Row } from "reactstrap";

const RECORDS = [
  {
    image: "/assets/images/my-record/MyRecommend-1.jpg",
    label: "自分のカラダの記録",
    name: "BODY RECORD",
  },
  {
    image: "/assets/images/my-record/MyRecommend-2.jpg",
    label: "自分の運動の記録",
    name: "MY EXERCISE",
  },
  {
    image: "/assets/images/my-record/MyRecommend-3.jpg",
    label: "自分の日記",
    name: "MY DIARY",
  },
];

const View = () => {
  return (
    <div className="my-record-wrapper">
      <Container>
        <div className="section-1">
          <Row className="custom-row">
            {RECORDS.map((h, k) => (
              <Col xs={12} md={6} lg={4} key={k} className="item">
                <RecordCategory name={h.name} image={h.image} label={h.label} />
              </Col>
            ))}
          </Row>
        </div>

        <div className="section-2">
          <Row>
            {" "}
            <div className="title-wrapper">
              <div className="title">MY RECORD</div>
              <div className="date">2021.05.21</div>
            </div>
            <HChart />
            <div className="actions">
              <div className="action">日</div>
              <div className="action">週</div>
              <div className="action">月</div>
              <div className="active action">年</div>
            </div>
          </Row>
        </div>

        <div className="section-3">
          <div>
            <Row>
              <div className="title-wrapper">
                <div className="title">MY EXERCISE</div>
                <div className="date">2021.05.21</div>
              </div>
              <Col xs={12} lg={6}>
                <ul>
                  {Array(10)
                    .fill(0)
                    .map((_, k) => (
                      <div key={k}>
                        <li>
                          <div>
                            {" "}
                            <div className="label">家事全般（立位・軽い）</div>
                            <div className="weight">26kcal</div>
                          </div>
                          <div className="time">10 min</div>
                        </li>
                        <hr />
                      </div>
                    ))}
                </ul>
              </Col>
              <Col xs={12} lg={6}>
                <ul>
                  {Array(10)
                    .fill(0)
                    .map((_, k) => (
                      <div key={k}>
                        <li>
                          <div>
                            {" "}
                            <div className="label">家事全般（立位・軽い）</div>
                            <div className="weight">26kcal</div>
                          </div>
                          <div className="time">10 min</div>
                        </li>
                        <hr />
                      </div>
                    ))}
                </ul>
              </Col>
            </Row>
          </div>
        </div>

        <div className="section-4">
          <Row className="custom-row">
            <div className="title"> MY DIARY </div>
            {Array(8)
              .fill(0)
              .map((h, k) => (
                <Col xs={12} md={6} lg={3} key={k} className="item">
                  <Diary
                    name="私の日記の記録が一部表示されます"
                    description="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
                    time="2021.05.21 23:25"
                  />
                </Col>
              ))}
          </Row>
        </div>

        <div className="section-5">
          <HButton label="自分の日記をもっと見る" />
        </div>
      </Container>
    </div>
  );
};

export default View;
